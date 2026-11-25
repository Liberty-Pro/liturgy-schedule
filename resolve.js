/* Shared by the public page (index.html) and the planning page.
   Turns the base data in data.js plus a set of choices into the readings to show.
   data.js is never rewritten, so any choice can be changed later.

   A Mass is identified by its date (only one Mass per date has options).
   A "pick" is one array per option group in x.sl, holding the chosen option numbers (0 = first),
   so reordering the options in data.js would change what an existing choice points to. */
(function (root) {
  'use strict';

  const emptyPick = x => x.sl.map(() => []);

  /* Drop anything that does not match the data: unknown numbers, duplicates, two choices on a one-choice row. */
  function clean(x, pick) {
    return x.sl.map(([, opts, multi], g) => {
      const a = pick && Array.isArray(pick[g]) ? pick[g] : [];
      const ok = [...new Set(a.filter(i => Number.isInteger(i) && i >= 0 && i < opts.length))].sort((m, n) => m - n);
      return multi ? ok : ok.slice(0, 1);
    });
  }

  /* Rows marked "if ..." only apply when the earlier option they depend on is chosen. */
  const setIs = n => p => p[0][0] === n;
  const checked = n => p => p[0].includes(n);
  const SHOW_IF = {
    '2026-12-27': { 1: setIs(0) },
    '2027-02-28': { 1: setIs(0), 2: setIs(1) },
    '2027-03-07': { 1: setIs(1) },
    '2027-03-14': { 1: setIs(1) },
    '2027-03-27': { 1: checked(0), 2: checked(0), 3: checked(1), 4: checked(6) },
    '2027-05-15': { 1: setIs(0), 2: setIs(1) }
  };
  function visible(x, pick) {
    const p = clean(x, pick), rules = SHOW_IF[x.d] || {};
    return x.sl.map((_, g) => rules[g] ? rules[g](p) : true);
  }
  /* The pick with hidden rows emptied: this is what gets published and compared. */
  function shown(x, pick) {
    const p = clean(x, pick), v = visible(x, p);
    return p.map((a, g) => v[g] ? a : []);
  }
  const isEmpty = (x, pick) => shown(x, pick).every(a => !a.length);
  function isComplete(x, pick) {
    const p = shown(x, pick), v = visible(x, p);
    if (x.d === '2027-03-27' && !(p[0].length >= 3 && p[0].includes(2))) return false; /* at least three, #3 required */
    return p.every((a, g) => !v[g] || a.length > 0);
  }
  const same = (x, a, b) => JSON.stringify(shown(x, a)) === JSON.stringify(shown(x, b));

  /* ---------- per-Mass results ---------- */
  const SLOT = [[/^1st Reading/, 0], [/^Responsorial Psalm/, 1], [/^2nd Reading/, 2], [/^Acclamation/, 3], [/Gospel/, 4]];
  /* Default: each row's choice replaces the matching reading. */
  function direct(x, t, r) {
    x.sl.forEach(([label], g) => {
      const hit = SLOT.find(([re]) => re.test(label));
      if (!hit) throw new Error('No rule for "' + label + '" on ' + x.d);
      r[hit[1]] = t(g);
    });
    return { r };
  }
  /* Year A readings for the OCIA Scrutinies (Third to Fifth Sundays of Lent). */
  const scrutiny = (name, four, gospel) => ({ r: [...four, gospel], n: 'Year A readings for the ' + name + ' Scrutiny (OCIA)' });

  const BUILD = {
    '2026-12-25': (x, t, r) => ({ ...direct(x, t, r), s: x.s }), /* keep the Mass at Dawn readings */
    '2026-12-27': (x, t, r, p) => p[0][0] === 0
      ? { r: [r[0], r[1], t(1), 'Col 3:15a+16a', t(2)] }
      : { r: ['Gen 15:1-6; 21:1-3', 'Ps 105:1-2, 3-4, 5-6, 8-9', 'Heb 11:8, 11-12, 17-19', 'Heb 1:1-2', t(2)] },
    '2027-01-10': (x, t, r, p) => p[0][0] === 0
      ? { r }
      : { r: ['Isa 55:1-11', 'Isa 12:2-3, 4bcd, 5-6', '1 John 5:1-9', 'cf. John 1:29', r[4]] },
    '2027-02-28': (x, t, r, p) => p[0][0] === 0
      ? { r: [t(1), r[1], r[2], r[3], r[4]] }
      : scrutiny('First', ['Exod 17:3-7', 'Ps 95:1-2, 6-7b, 7c-9', 'Rom 5:1-2, 5-8', 'cf. John 4:42+15'], t(2)),
    '2027-03-07': (x, t, r, p) => p[0][0] === 0
      ? { r }
      : scrutiny('Second', ['1 Sam 16:1b, 6-7, 10-13a', 'Ps 23:1-3a, 3b-4, 5, 6', 'Eph 5:8-14', 'John 8:12'], t(1)),
    '2027-03-14': (x, t, r, p) => p[0][0] === 0
      ? { r }
      : scrutiny('Third', ['Ezek 37:12-14', 'Ps 130:1-2, 3-4, 5-6, 7-8', 'Rom 8:8-11', 'John 11:25a+26'], t(1)),
    '2027-03-21': (x, t, r) => ({ r: [r[0], r[1], r[2], r[3], t(1)], s: '<b>Procession with Palms Gospel:</b> ' + t(0) }),
    '2027-03-27': (x, t, r, p) => {
      const rows = [
        () => [t(1), t(2)],
        () => [t(3), 'Ps 16:5+8, 9-10, 11'],
        () => ['Exod 14:15–15:1', 'Exod 15:1-2, 3-4, 5-6, 17-18'],
        () => ['Isa 54:5-14', 'Ps 30:2+4, 5-6, 11-12a+13b'],
        () => ['Isa 55:1-11', 'Isa 12:2-3, 4bcd, 5-6'],
        () => ['Bar 3:9-15, 32–4:4', 'Ps 19:8, 9, 10, 11'],
        () => ['Ezek 36:16-17a, 18-28', t(4)]
      ];
      const list = p[0].map(i => { const [reading, response] = rows[i](); return `${i + 1}) ${reading}, response ${response}`; });
      return {
        r: [`${list.length} Old Testament readings (listed below)`, 'Responses (listed below)', r[2], r[3], r[4]],
        s: '<b>Old Testament readings and responses:</b><br>' + list.join('<br>')
      };
    },
    '2027-05-09': (x, t, r) => ({ ...direct(x, t, r), s: x.s.slice(x.s.indexOf('If the Ascension')) }),
    '2027-05-15': (x, t, r, p) => p[0][0] === 0
      ? { r: [t(1), r[1], r[2], r[3], r[4]] }
      : {
        r: ['All four: Gen 11:1-9 · Exod 19:3-8a, 16-20b · Ezek 37:1-14 · Joel 3:1-5',
          `Each reading has its own response (after Exodus: ${t(2)})`, r[2], r[3], r[4]],
        s: '<b>Extended form of the Vigil:</b> all four readings, each with its own response.'
      },
    '2027-05-30': (x, t, r, p) => ({
      r: [r[0], r[1], r[2], ['Full Sequence; John 6:51',
        'Short Sequence (begins “Lo! the angel’s food is given”); John 6:51',
        'John 6:51 (Sequence omitted)'][p[0][0]], r[4]]
    }),
    '2027-11-02': (x, t, r) => ({ ...direct(x, t, r), n: 'Lectionary #668' }),
    '2027-11-25': (x, t, r) => ({ ...direct(x, t, r), n: 'Mass “In Thanksgiving to God,” Lectionary #943-947' })
  };

  /* Returns the Mass as it should appear publicly. Without a complete choice it is returned unchanged. */
  function apply(x, pick) {
    if (!x.sl || !pick || !isComplete(x, pick)) return x;
    const p = shown(x, pick);
    const text = g => x.sl[g][1][p[g][0]];
    const out = (BUILD[x.d] || direct)(x, text, x.r.slice(), p);
    const done = { d: x.d, f: x.f, c: x.c, r: out.r };
    const note = out.n || x.n;
    if (note) done.n = note;
    if (out.s) done.s = out.s;
    return done;
  }

  /* What publishing `picks` over `published` would do. */
  function changes(masses, picks, published) {
    const out = { set: [], remove: [], incomplete: [] };
    masses.filter(x => x.sl && Object.prototype.hasOwnProperty.call(picks, x.d)).forEach(x => {
      const mine = picks[x.d], live = published[x.d];
      if (isEmpty(x, mine)) { if (live) out.remove.push(x); }
      else if (!isComplete(x, mine)) out.incomplete.push(x);
      else if (!live || !same(x, mine, live)) out.set.push(x);
    });
    return out;
  }

  /* selections.js is a script (so the pages need no extra loading step) holding plain JSON. */
  const serializeSel = sel => '/* Committed reading selections. Written by the planning page. */\nwindow.SEL = ' +
    JSON.stringify(Object.fromEntries(Object.keys(sel).sort().map(k => [k, sel[k]])), null, 1) + ';\n';
  function parseSel(text) {
    const m = String(text).match(/window\.SEL\s*=\s*(\{[\s\S]*\})\s*;?\s*$/);
    if (!m) throw new Error('selections.js is not in the expected form.');
    return JSON.parse(m[1]);
  }

  root.Readings = { emptyPick, clean, visible, shown, isEmpty, isComplete, same, apply, changes, serializeSel, parseSel };
})(typeof window !== 'undefined' ? window : globalThis);
