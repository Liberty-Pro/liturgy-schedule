/* ---------- DATA ----------
 One entry per celebration:
 d = date, f = feast, c = color, n = note, r = [1st reading, psalm, 2nd reading, acclamation, gospel],
 s = special/alternate readings, aw = indexes of readings awaiting Fr., sl = options Fr. chooses from, pn = note on the choice.
*/
const MONTHS = [
 {id:'dec', name:'December 2026', short:'Dec', blurb:'Includes the First Sunday of Advent on Nov 29, 2026, the start of the year. Then the Immaculate Conception and Christmas.', e:[
  {d:'2026-11-29', f:'First Sunday of Advent', c:'Violet', n:'Liturgical Year 2027 begins: Sunday Cycle B, Weekday Cycle I', r:['Isa 63:16b-17, 19b; 64:2-7','Ps 80:2-3, 15-16, 18-19','1 Cor 1:3-9','Ps 85:8','Mark 13:33-37']},
  {d:'2026-12-06', f:'Second Sunday of Advent', c:'Violet', r:['Isa 40:1-5, 9-11','Ps 85:9ab+10, 11-12, 13-14','2 Pet 3:8-14','Luke 3:4+6','Mark 1:1-8']},
  {d:'2026-12-08', f:'Solemnity of the Immaculate Conception of the Blessed Virgin Mary', c:'White', n:'Holy Day of Obligation (Tuesday)', r:['Gen 3:9-15, 20','Ps 98:1, 2-3ab, 3cd-4','Eph 1:3-6, 11-12','cf. Luke 1:28','Luke 1:26-38']},
  {d:'2026-12-12', f:'Feast of Our Lady of Guadalupe', c:'White', r:['Zech 2:14-17','Jdt 13:18bcde, 19','None','(non-biblical verse)','Luke 1:26-38'], s:'<b>Alternates:</b> 1st Reading Rev 11:19a; 12:1-6a, 10ab · Gospel Luke 1:39-47', aw:[0,4], sl:[
    ['1st Reading',['Zech 2:14-17','Rev 11:19a; 12:1-6a, 10ab']],
    ['Gospel',['Luke 1:26-38','Luke 1:39-47']]]},
  {d:'2026-12-13', f:'Third Sunday of Advent (Gaudete Sunday)', c:'Rose or Violet', r:['Isa 61:1-2a, 10-11','Luke 1:46-48, 49-50, 53-54','1 Thess 5:16-24','Isa 61:1 (cited in Luke 4:18)','John 1:6-8, 19-28']},
  {d:'2026-12-20', f:'Fourth Sunday of Advent', c:'Violet', r:['2 Sam 7:1-5, 8b-12, 14a, 16','Ps 89:2-3, 4-5, 27+29','Rom 16:25-27','Luke 1:38','Luke 1:26-38']},
  {d:'2026-12-24', f:'Vigil Mass of the Nativity of the Lord', c:'White', n:'Early evening of Dec 24 (Christmas Eve), with readings anticipating the birth (Jesus’ genealogy). Fulfills the Christmas obligation.', r:['Isa 62:1-5','Ps 89:4-5, 16-17, 27+29','Acts 13:16-17, 22-25','(no citation)','Matt 1:1-25 or 1:18-25'], aw:[4], sl:[
    ['Gospel',['Matt 1:1-25 (long form)','Matt 1:18-25 (short form)']]]},
  {d:'2026-12-24', f:'The Nativity of the Lord: Mass during the Night', c:'White', n:'Traditional “Midnight Mass”: late night of Dec 24 into Christmas, with Luke’s account of the birth. Also fulfills the Christmas obligation.', r:['Isa 9:1-6','Ps 96:1-2a, 2b-3, 11-12, 13','Titus 2:11-14','Luke 2:10-11','Luke 2:1-14']},
  {d:'2026-12-25', f:'Solemnity of the Nativity of the Lord (Christmas): Mass during the Day', c:'White', n:'Holy Day of Obligation (Friday)', r:['Isa 52:7-10','Ps 98:1, 2-3a, 3b-4, 5-6','Heb 1:1-6','(no citation)','John 1:1-18 or 1:1-5, 9-14'], s:'<b>Mass at Dawn:</b> Isa 62:11-12 · Ps 97:1+6, 11-12 · Titus 3:4-7 · Luke 2:14 · Luke 2:15-20', aw:[4], sl:[
    ['Gospel',['John 1:1-18 (long form)','John 1:1-5, 9-14 (short form)']]]},
  {d:'2026-12-27', f:'Feast of the Holy Family of Jesus, Mary, and Joseph', c:'White', r:['Sir 3:3-7, 14-17a','Ps 128:1-2, 3, 4-5','Col 3:12-21 or 3:12-17','Heb 1:1-2','Luke 2:22-40 or 2:22, 39-40'], s:'<b>Optional Year B readings:</b> Gen 15:1-6; 21:1-3 · Ps 105:1-2, 3-4, 5-6, 8-9 · Heb 11:8, 11-12, 17-19', aw:[0,1,2,3,4], sl:[
    ['Set of readings',['Standard readings: Sir 3:3-7, 14-17a · Ps 128:1-2, 3, 4-5 · Col 3:12-21 · Accl. Col 3:15a+16a','Optional Year B readings: Gen 15:1-6; 21:1-3 · Ps 105:1-2, 3-4, 5-6, 8-9 · Heb 11:8, 11-12, 17-19 · Accl. Heb 1:1-2']],
    ['2nd Reading (if standard set)',['Col 3:12-21 (long form)','Col 3:12-17 (short form)']],
    ['Gospel',['Luke 2:22-40 (long form)','Luke 2:22, 39-40 (short form)']]]}
 ]},
 {id:'jan', name:'January 2027', short:'Jan', blurb:'Mary, Mother of God. Epiphany. Baptism of the Lord. Ordinary Time begins.', e:[
  {d:'2027-01-01', f:'Solemnity of Mary, the Holy Mother of God', c:'White', n:'Holy Day of Obligation (Friday)', r:['Num 6:22-27','Ps 67:2-3, 5, 6+8','Gal 4:4-7','Heb 1:1-2','Luke 2:16-21']},
  {d:'2027-01-03', f:'Solemnity of the Epiphany of the Lord', c:'White', r:['Isa 60:1-6','Ps 72:1-2, 7-8, 10-11, 12-13','Eph 3:2-3a, 5-6','Matt 2:2','Matt 2:1-12']},
  {d:'2027-01-10', f:'Feast of the Baptism of the Lord', c:'White', n:'Christmas Season ends', r:['Isa 42:1-4, 6-7','Ps 29:1-2, 3ac+4, 3b+9b-10','Acts 10:34-38','cf. Mark 9:7','Mark 1:7-11'], s:'<b>Optional Year B readings:</b> Isa 55:1-11 · Isa 12:2-3, 4bcd, 5-6 · 1 John 5:1-9 · Acclamation cf. John 1:29', aw:[0,1,2,3], pn:'The Gospel is Mark 1:7-11 either way.', sl:[
    ['Set of readings',['Standard readings: Isa 42:1-4, 6-7 · Ps 29:1-2, 3ac+4, 3b+9b-10 · Acts 10:34-38 · Accl. cf. Mark 9:7','Optional Year B readings: Isa 55:1-11 · Isa 12:2-3, 4bcd, 5-6 · 1 John 5:1-9 · Accl. cf. John 1:29']]]},
  {d:'2027-01-17', f:'Second Sunday in Ordinary Time', c:'Green', r:['1 Sam 3:3b-10, 19','Ps 40:2+4, 7-8a, 8b-9, 10','1 Cor 6:13c-15a, 17-20','John 1:41+17b','John 1:35-42']},
  {d:'2027-01-24', f:'Third Sunday in Ordinary Time', c:'Green', n:'Sunday of the Word of God', r:['Jonah 3:1-5, 10','Ps 25:4-5, 6-7, 8-9','1 Cor 7:29-31','Mark 1:15','Mark 1:14-20']},
  {d:'2027-01-31', f:'Fourth Sunday in Ordinary Time', c:'Green', r:['Deut 18:15-20','Ps 95:1-2, 6-7b, 7c-9','1 Cor 7:32-35','Matt 4:16','Mark 1:21-28']}
 ]},
 {id:'feb', name:'February 2027', short:'Feb', blurb:'Ash Wednesday. The first three Sundays of Lent.', e:[
  {d:'2027-02-07', f:'Fifth Sunday in Ordinary Time', c:'Green', r:['Job 7:1-4, 6-7','Ps 147:1-2, 3-4, 5-6','1 Cor 9:16-19, 22-23','Matt 8:17','Mark 1:29-39']},
  {d:'2027-02-10', f:'Ash Wednesday', c:'Violet', n:'Not a Holy Day of Obligation; day of fasting and abstinence', r:['Joel 2:12-18','Ps 51:3-4, 5-6ab, 12-13, 14+17','2 Cor 5:20–6:2','See Ps 95:8','Matt 6:1-6, 16-18']},
  {d:'2027-02-14', f:'First Sunday of Lent', c:'Violet', r:['Gen 9:8-15','Ps 25:4-5, 6-7, 8-9','1 Pet 3:18-22','Matt 4:4b','Mark 1:12-15']},
  {d:'2027-02-21', f:'Second Sunday of Lent', c:'Violet', r:['Gen 22:1-2, 9a, 10-13, 15-18','Ps 116:10+15, 16-17, 18-19','Rom 8:31b-34','cf. Matt 17:5','Mark 9:2-10']},
  {d:'2027-02-28', f:'Third Sunday of Lent', c:'Violet', r:['Exod 20:1-17 or 20:1-3, 7-8, 12-17','Ps 19:8, 9, 10, 11','1 Cor 1:22-25','John 3:16','John 2:13-25'], s:'<b>If celebrating the First Scrutiny (OCIA), use Year A:</b> Exod 17:3-7 · Ps 95:1-2, 6-7b, 7c-9 · Rom 5:1-2, 5-8 · cf. John 4:42+15 · John 4:5-42', aw:[0,1,2,3,4], sl:[
    ['Set of readings',['Year B readings: Exod 20 · Ps 19:8, 9, 10, 11 · 1 Cor 1:22-25 · John 2:13-25','Year A readings for the First Scrutiny (OCIA): Exod 17:3-7 · Ps 95:1-2, 6-7b, 7c-9 · Rom 5:1-2, 5-8 · John 4:5-42']],
    ['1st Reading (if Year B)',['Exod 20:1-17 (long form)','Exod 20:1-3, 7-8, 12-17 (short form)']],
    ['Gospel (if Year A)',['John 4:5-42 (long form)','John 4:5-15, 19b-26, 39a, 40-42 (short form)']]]}
 ]},
 {id:'mar', name:'March 2027', short:'Mar', blurb:'Lent to Easter: Laetare, Palm Sunday, the Triduum, the Easter Vigil.', e:[
  {d:'2027-03-07', f:'Fourth Sunday of Lent (Laetare Sunday)', c:'Rose or Violet', r:['2 Chr 36:14-16, 19-23','Ps 137:1-2, 3, 4-5, 6','Eph 2:4-10','John 3:16','John 3:14-21'], s:'<b>If celebrating the Second Scrutiny (OCIA), use Year A:</b> 1 Sam 16:1b, 6-7, 10-13a · Ps 23:1-3a, 3b-4, 5, 6 · Eph 5:8-14 · John 8:12 · John 9:1-41', aw:[0,1,2,3,4], sl:[
    ['Set of readings',['Year B readings: 2 Chr 36:14-16, 19-23 · Ps 137:1-2, 3, 4-5, 6 · Eph 2:4-10 · John 3:14-21','Year A readings for the Second Scrutiny (OCIA): 1 Sam 16:1b, 6-7, 10-13a · Ps 23 · Eph 5:8-14 · John 9:1-41']],
    ['Gospel (if Year A)',['John 9:1-41 (long form)','John 9:1, 6-9, 13-17, 34-38 (short form)']]]},
  {d:'2027-03-14', f:'Fifth Sunday of Lent', c:'Violet', r:['Jer 31:31-34','Ps 51:3-4, 12-13, 14-15','Heb 5:7-9','John 12:26','John 12:20-33'], s:'<b>If celebrating the Third Scrutiny (OCIA), use Year A:</b> Ezek 37:12-14 · Ps 130:1-2, 3-4, 5-6, 7-8 · Rom 8:8-11 · John 11:25a+26 · John 11:1-45', aw:[0,1,2,3,4], sl:[
    ['Set of readings',['Year B readings: Jer 31:31-34 · Ps 51:3-4, 12-13, 14-15 · Heb 5:7-9 · John 12:20-33','Year A readings for the Third Scrutiny (OCIA): Ezek 37:12-14 · Ps 130 · Rom 8:8-11 · John 11:1-45']],
    ['Gospel (if Year A)',['John 11:1-45 (long form)','John 11:3-7, 17, 20-27, 33b-45 (short form)']]]},
  {d:'2027-03-21', f:'Palm Sunday of the Passion of the Lord', c:'Red', n:'Holy Week begins', r:['Isa 50:4-7','Ps 22:8-9, 17-18, 19-20, 23-24','Phil 2:6-11','Phil 2:8-9','Mark 14:1–15:47 or 15:1-39'], s:'<b>Procession with Palms Gospel:</b> Mark 11:1-10 or John 12:12-16', aw:[4], sl:[
    ['Gospel at the Procession with Palms',['Mark 11:1-10','John 12:12-16']],
    ['Passion Gospel',['Mark 14:1–15:47 (long form)','Mark 15:1-39 (short form)']]]},
  {d:'2027-03-25', f:'Holy Thursday: Evening Mass of the Lord’s Supper', c:'White', n:'Lent ends. Sacred Paschal Triduum begins.', r:['Exod 12:1-8, 11-14','Ps 116:12-13, 15-16, 17-18','1 Cor 11:23-26','John 13:34','John 13:1-15']},
  {d:'2027-03-26', f:'Good Friday of the Passion of the Lord', c:'Red', n:'Celebration of the Lord’s Passion (no Mass); fasting and abstinence', r:['Isa 52:13–53:12','Ps 31:2+6, 12-13, 15-16, 17+25','Heb 4:14-16; 5:7-9','Phil 2:8-9','John 18:1–19:42']},
  {d:'2027-03-27', f:'Easter Vigil in the Holy Night', c:'White', n:'Fulfills the Easter Sunday obligation', r:['Up to 7 OT readings (see below)','Responses (see below)','Rom 6:3-11','Ps 118:1-2, 16-17, 22-23','Mark 16:1-7'], s:'<b>OT readings (at least three, always including #3), with responses:</b> 1) Gen 1:1–2:2 or 1:1, 26-31a — Ps 104:1-2, 5-6, 10+12, 13-14, 24+35 or Ps 33:4-5, 6-7, 12-13, 20-22 · 2) Gen 22:1-18 or 22:1-2, 9a, 10-13, 15-18 — Ps 16:5+8, 9-10, 11 · 3) Exod 14:15–15:1 — Exod 15:1-2, 3-4, 5-6, 17-18 · 4) Isa 54:5-14 — Ps 30:2+4, 5-6, 11-12a+13b · 5) Isa 55:1-11 — Isa 12:2-3, 4bcd, 5-6 · 6) Bar 3:9-15, 32–4:4 — Ps 19:8, 9, 10, 11 · 7) Ezek 36:16-17a, 18-28 — Ps 42:3, 5; 43:3, 4 (if Baptism) or Isa 12:2-3, 4bcd, 5-6 or Ps 51:12-13, 14-15, 18-19', aw:[0,1], pn:'The Epistle (Rom 6:3-11), Psalm 118, and Gospel (Mark 16:1-7) are fixed.', sl:[
    ['Old Testament readings: check each one to use (at least three; #3 is required)',['1) Gen 1:1–2:2 (Creation)','2) Gen 22:1-18 (Sacrifice of Isaac), response Ps 16:5+8, 9-10, 11','3) Exod 14:15–15:1 (Red Sea), response Exod 15:1-2, 3-4, 5-6, 17-18 [required]','4) Isa 54:5-14, response Ps 30:2+4, 5-6, 11-12a+13b','5) Isa 55:1-11, response Isa 12:2-3, 4bcd, 5-6','6) Bar 3:9-15, 32–4:4, response Ps 19:8, 9, 10, 11','7) Ezek 36:16-17a, 18-28'],true],
    ['Reading 1 (if used)',['Gen 1:1–2:2 (long form)','Gen 1:1, 26-31a (short form)']],
    ['Response after Reading 1',['Ps 104:1-2, 5-6, 10+12, 13-14, 24+35','Ps 33:4-5, 6-7, 12-13, 20-22']],
    ['Reading 2 (if used)',['Gen 22:1-18 (long form)','Gen 22:1-2, 9a, 10-13, 15-18 (short form)']],
    ['Response after Reading 7',['Ps 42:3, 5; 43:3, 4 (when Baptism is celebrated)','Isa 12:2-3, 4bcd, 5-6','Ps 51:12-13, 14-15, 18-19']]]},
  {d:'2027-03-28', f:'Easter Sunday of the Resurrection of the Lord', c:'White', r:['Acts 10:34a, 37-43','Ps 118:1-2, 16-17, 22-23','Col 3:1-4 or 1 Cor 5:6b-8','Sequence; cf. 1 Cor 5:7b-8a','John 20:1-9'], s:'<b>Gospel alternates:</b> Mark 16:1-7 (Vigil Gospel) · Luke 24:13-35 (afternoon or evening Masses)', aw:[2,4], sl:[
    ['2nd Reading',['Col 3:1-4','1 Cor 5:6b-8']],
    ['Gospel',['John 20:1-9','Mark 16:1-7 (Easter Vigil Gospel)','Luke 24:13-35 (afternoon or evening Masses)']]]}
 ]},
 {id:'apr', name:'April 2027', short:'Apr', blurb:'The Easter season. Divine Mercy Sunday and Good Shepherd Sunday.', e:[
  {d:'2027-04-04', f:'Second Sunday of Easter (Sunday of Divine Mercy)', c:'White', r:['Acts 4:32-35','Ps 118:2-4, 13-15, 22-24','1 John 5:1-6','John 20:29','John 20:19-31']},
  {d:'2027-04-11', f:'Third Sunday of Easter', c:'White', r:['Acts 3:13-15, 17-19','Ps 4:2, 4, 7-8, 9','1 John 2:1-5a','cf. Luke 24:32','Luke 24:35-48']},
  {d:'2027-04-18', f:'Fourth Sunday of Easter', c:'White', n:'Good Shepherd Sunday; World Day of Prayer for Vocations', r:['Acts 4:8-12','Ps 118:1+8-9, 21-23, 26+21+29','1 John 3:1-2','John 10:14','John 10:11-18']},
  {d:'2027-04-25', f:'Fifth Sunday of Easter', c:'White', r:['Acts 9:26-31','Ps 22:26-27, 28+30, 31-32','1 John 3:18-24','John 15:4a+5b','John 15:1-8']}
 ]},
 {id:'may', name:'May 2027', short:'May', blurb:'Ascension, Pentecost, Trinity Sunday, Corpus Christi.', e:[
  {d:'2027-05-02', f:'Sixth Sunday of Easter', c:'White', r:['Acts 10:25-26, 34-35, 44-48','Ps 98:1, 2-3a, 3b-4','1 John 4:7-10','John 14:23','John 15:9-17']},
  {d:'2027-05-09', f:'The Ascension of the Lord', c:'White', n:'Holy Day of Obligation, transferred to Sunday (replaces the Seventh Sunday of Easter)', r:['Acts 1:1-11','Ps 47:2-3, 6-7, 8-9','Eph 1:17-23','Matt 28:19a+20b','Mark 16:15-20'], s:'<b>Optional Year B 2nd Reading:</b> Eph 4:1-13 or 4:1-7, 11-13. If the Ascension were kept on Thu May 6, this Sunday would be the Seventh Sunday of Easter: Acts 1:15-17, 20a, 20c-26 · Ps 103:1-2, 11-12, 19-20 · 1 John 4:11-16 · cf. John 14:18 · John 17:11b-19', aw:[2], sl:[
    ['2nd Reading',['Eph 1:17-23','Eph 4:1-13 (Year B option, long form)','Eph 4:1-7, 11-13 (Year B option, short form)']]]},
  {d:'2027-05-15', f:'The Solemnity of Pentecost: Vigil', c:'Red', r:['Gen 11:1-9','Ps 104:1-2, 24+35, 27-28, 29b-30','Rom 8:22-27','(no citation)','John 7:37-39'], s:'<b>1st Reading options:</b> Gen 11:1-9 or Exod 19:3-8a, 16-20b or Ezek 37:1-14 or Joel 3:1-5. The extended Vigil uses all four, each with its own response.', aw:[0,1], sl:[
    ['Form of the Vigil',['Simple form (one 1st Reading, below)','Extended form (all four readings, each with its own response)']],
    ['1st Reading (simple form)',['Gen 11:1-9','Exod 19:3-8a, 16-20b','Ezek 37:1-14','Joel 3:1-5']],
    ['Response after Exodus (extended form)',['Dan 3:52, 53, 54, 55, 56','Ps 19:8, 9, 10, 11']]]},
  {d:'2027-05-16', f:'The Solemnity of Pentecost', c:'Red', n:'Easter Season ends', r:['Acts 2:1-11','Ps 104:1+24, 29-30, 31+34','1 Cor 12:3b-7, 12-13','Sequence','John 20:19-23'], s:'<b>Optional Year B readings:</b> 2nd Reading Gal 5:16-25 · Gospel John 15:26-27; 16:12-15', aw:[2,4], sl:[
    ['2nd Reading',['1 Cor 12:3b-7, 12-13','Gal 5:16-25 (Year B option)']],
    ['Gospel',['John 20:19-23','John 15:26-27; 16:12-15 (Year B option)']]]},
  {d:'2027-05-23', f:'The Solemnity of the Most Holy Trinity', c:'White', r:['Deut 4:32-34, 39-40','Ps 33:4-5, 6+9, 18-19, 20+22','Rom 8:14-17','cf. Rev 1:8','Matt 28:16-20']},
  {d:'2027-05-30', f:'The Solemnity of the Most Holy Body and Blood of Christ', c:'White', r:['Exod 24:3-8','Ps 116:12-13, 15-16, 17-18','Heb 9:11-15','Sequence (optional); John 6:51','Mark 14:12-16, 22-26'], aw:[3], sl:[
    ['Sequence (Lauda Sion, optional)',['Full Sequence','Short form (begins “Lo! the angel’s food is given”)','Omit the Sequence']]]}
 ]},
 {id:'jun', name:'June 2027', short:'Jun', blurb:'Ordinary Time, Sundays 10 through 13.', e:[
  {d:'2027-06-06', f:'Tenth Sunday in Ordinary Time', c:'Green', r:['Gen 3:9-15','Ps 130:1-2, 3-4, 5-6, 7-8','2 Cor 4:13–5:1','John 12:31b-32','Mark 3:20-35']},
  {d:'2027-06-13', f:'Eleventh Sunday in Ordinary Time', c:'Green', r:['Ezek 17:22-24','Ps 92:2-3, 13-14, 15-16','2 Cor 5:6-10','(no citation)','Mark 4:26-34']},
  {d:'2027-06-20', f:'Twelfth Sunday in Ordinary Time', c:'Green', r:['Job 38:1, 8-11','Ps 107:23-24, 25-26, 28-29, 30-31','2 Cor 5:14-17','Luke 7:16','Mark 4:35-41']},
  {d:'2027-06-27', f:'Thirteenth Sunday in Ordinary Time', c:'Green', r:['Wis 1:13-15; 2:23-24','Ps 30:2+4, 5-6, 11-12a+13b','2 Cor 8:7, 9, 13-15','cf. 2 Tim 1:10','Mark 5:21-43 or 5:21-24, 35-43'], aw:[4], sl:[
    ['Gospel',['Mark 5:21-43 (long form)','Mark 5:21-24, 35-43 (short form)']]]}
 ]},
 {id:'jul', name:'July 2027', short:'Jul', blurb:'Ordinary Time, Sundays 14 through 17.', e:[
  {d:'2027-07-04', f:'Fourteenth Sunday in Ordinary Time', c:'Green', r:['Ezek 2:2-5','Ps 123:1-2a, 2bc, 3-4','2 Cor 12:7-10','cf. Luke 4:18','Mark 6:1-6']},
  {d:'2027-07-11', f:'Fifteenth Sunday in Ordinary Time', c:'Green', r:['Amos 7:12-15','Ps 85:9ab+10, 11-12, 13-14','Eph 1:3-14 or 1:3-10','cf. Eph 1:17-18','Mark 6:7-13'], aw:[2], sl:[
    ['2nd Reading',['Eph 1:3-14 (long form)','Eph 1:3-10 (short form)']]]},
  {d:'2027-07-18', f:'Sixteenth Sunday in Ordinary Time', c:'Green', r:['Jer 23:1-6','Ps 23:1-3a, 3b-4, 5, 6','Eph 2:13-18','John 10:27','Mark 6:30-34']},
  {d:'2027-07-25', f:'Seventeenth Sunday in Ordinary Time', c:'Green', r:['2 Kgs 4:42-44','Ps 145:10-11, 15-16, 17-18','Eph 4:1-6','Luke 7:16','John 6:1-15']}
 ]},
 {id:'aug', name:'August 2027', short:'Aug', blurb:'Bread of Life readings. The Assumption falls on a Sunday.', e:[
  {d:'2027-08-01', f:'Eighteenth Sunday in Ordinary Time', c:'Green', r:['Exod 16:2-4, 12-15','Ps 78:3-4, 23-24, 25+54','Eph 4:17, 20-24','Matt 4:4b','John 6:24-35']},
  {d:'2027-08-08', f:'Nineteenth Sunday in Ordinary Time', c:'Green', r:['1 Kgs 19:4-8','Ps 34:2-3, 4-5, 6-7, 8-9','Eph 4:30–5:2','John 6:51','John 6:41-51']},
  {d:'2027-08-14', f:'Vigil Mass of the Solemnity of the Assumption of the Blessed Virgin Mary', c:'White', n:'Saturday evening; fulfills the Sunday/Assumption obligation', r:['1 Chr 15:3-4, 15-16; 16:1-2','Ps 132:6-7, 9-10, 13-14','1 Cor 15:54b-57','Luke 11:28','Luke 11:27-28']},
  {d:'2027-08-15', f:'Solemnity of the Assumption of the Blessed Virgin Mary', c:'White', n:'Holy Day of Obligation. Falls on Sunday (replaces the 20th Sunday in Ordinary Time)', r:['Rev 11:19a; 12:1-6a, 10ab','Ps 45:10, 11, 12, 16','1 Cor 15:20-27','(non-biblical verse)','Luke 1:39-56']},
  {d:'2027-08-22', f:'Twenty-First Sunday in Ordinary Time', c:'Green', r:['Josh 24:1-2a, 15-17, 18b','Ps 34:2-3, 16-17, 18-19, 20-21','Eph 5:21-32 or 5:2a, 25-32','cf. John 6:63c+68c','John 6:60-69'], aw:[2], sl:[
    ['2nd Reading',['Eph 5:21-32 (long form)','Eph 5:2a, 25-32 (short form)']]]},
  {d:'2027-08-29', f:'Twenty-Second Sunday in Ordinary Time', c:'Green', r:['Deut 4:1-2, 6-8','Ps 15:2-3a, 3b-4a, 4b-5','Jas 1:17-18, 21b-22, 27','Jas 1:18','Mark 7:1-8, 14-15, 21-23']}
 ]},
 {id:'sep', name:'September 2027', short:'Sep', blurb:'Ordinary Time, Sundays 23 through 26.', e:[
  {d:'2027-09-05', f:'Twenty-Third Sunday in Ordinary Time', c:'Green', r:['Isa 35:4-7a','Ps 146:6c-7, 8-9a, 9b-10','Jas 2:1-5','cf. Matt 4:23','Mark 7:31-37']},
  {d:'2027-09-12', f:'Twenty-Fourth Sunday in Ordinary Time', c:'Green', r:['Isa 50:5-9a','Ps 116:1-2, 3-4, 5-6, 8-9','Jas 2:14-18','Gal 6:14','Mark 8:27-35']},
  {d:'2027-09-19', f:'Twenty-Fifth Sunday in Ordinary Time', c:'Green', r:['Wis 2:12, 17-20','Ps 54:3-4, 5, 6-8','Jas 3:16–4:3','cf. 2 Thess 2:14','Mark 9:30-37']},
  {d:'2027-09-26', f:'Twenty-Sixth Sunday in Ordinary Time', c:'Green', r:['Num 11:25-29','Ps 19:8, 10, 12-13, 14','Jas 5:1-6','cf. John 17:17b+a','Mark 9:38-43, 45, 47-48']}
 ]},
 {id:'oct', name:'October 2027', short:'Oct', blurb:'Ordinary Time, Sundays 27 through 31. Three Gospels with a long or short form.', e:[
  {d:'2027-10-03', f:'Twenty-Seventh Sunday in Ordinary Time', c:'Green', r:['Gen 2:18-24','Ps 128:1-2, 3, 4-5, 6','Heb 2:9-11','1 John 4:12','Mark 10:2-16 or 10:2-12'], aw:[4], sl:[
    ['Gospel',['Mark 10:2-16 (long form)','Mark 10:2-12 (short form)']]]},
  {d:'2027-10-10', f:'Twenty-Eighth Sunday in Ordinary Time', c:'Green', r:['Wis 7:7-11','Ps 90:12-13, 14-15, 16-17','Heb 4:12-13','Matt 5:3','Mark 10:17-30 or 10:17-27'], aw:[4], sl:[
    ['Gospel',['Mark 10:17-30 (long form)','Mark 10:17-27 (short form)']]]},
  {d:'2027-10-17', f:'Twenty-Ninth Sunday in Ordinary Time', c:'Green', r:['Isa 53:10-11','Ps 33:4-5, 18-19, 20+22','Heb 4:14-16','Mark 10:45','Mark 10:35-45 or 10:42-45'], aw:[4], sl:[
    ['Gospel',['Mark 10:35-45 (long form)','Mark 10:42-45 (short form)']]]},
  {d:'2027-10-24', f:'Thirtieth Sunday in Ordinary Time', c:'Green', r:['Jer 31:7-9','Ps 126:1-2a, 2b-3, 4-5, 6','Heb 5:1-6','cf. 2 Tim 1:10','Mark 10:46-52']},
  {d:'2027-10-31', f:'Thirty-First Sunday in Ordinary Time', c:'Green', r:['Deut 6:2-6','Ps 18:2-3a, 3b-4, 47+51','Heb 7:23-28','John 14:23','Mark 12:28b-34']}
 ]},
 {id:'nov', name:'November 2027', short:'Nov', blurb:'All Saints, All Souls, Christ the King, and Thanksgiving Mass. The year ends Nov 27.', e:[
  {d:'2027-11-01', f:'Solemnity of All Saints', c:'White', n:'Monday this year: the obligation to attend Mass is lifted in the USA', r:['Rev 7:2-4, 9-14','Ps 24:1bc-2, 3-4ab, 5-6','1 John 3:1-3','Matt 11:28','Matt 5:1-12a']},
  {d:'2027-11-02', f:'The Commemoration of All the Faithful Departed (All Souls)', c:'Violet, Black, or White', n:'Choose readings from Lectionary #668', r:['','','','',''], aw:[0,1,2,3,4], pn:'Lectionary #668 (acclamations from #1015). Other readings from the Masses for the Dead (#1011-1016) may also be used.', sl:[
    ['1st Reading',['Wis 3:1-9','Wis 4:7-15','Isa 25:6-9']],
    ['Responsorial Psalm',['Ps 23:1-3a, 3b-4, 5, 6','Ps 25:6+7b, 17-18, 20-21','Ps 27:1, 4, 7+8b+9a, 13-14']],
    ['2nd Reading',['Rom 5:5-11','Rom 5:17-21','Rom 6:3-9','Rom 8:14-23','Rom 8:31b-35, 37-39','Rom 14:7-9, 10c-12','1 Cor 15:20-28','1 Cor 15:51-57','2 Cor 4:14–5:1','2 Cor 5:1, 6-10','Phil 3:20-21','1 Thess 4:13-18','2 Tim 2:8-13']],
    ['Acclamation',['See Matt 11:25','Matt 25:34','John 3:16','John 6:39','John 6:40','John 6:51','John 11:25a, 26','See Phil 3:20','2 Tim 2:11-12a','Rev 1:5a, 6b','Rev 14:13']],
    ['Gospel',['Matt 5:1-12a','Matt 11:25-30','Matt 25:31-46','Luke 7:11-17','Luke 23:44-46, 50, 52-53; 24:1-6a','Luke 24:13-16, 28-35','John 5:24-29','John 6:37-40','John 6:51-59','John 11:17-27','John 11:32-45','John 14:1-6']]]},
  {d:'2027-11-07', f:'Thirty-Second Sunday in Ordinary Time', c:'Green', r:['1 Kgs 17:10-16','Ps 146:6c-7, 8-9a, 9b-10','Heb 9:24-28','Matt 5:3','Mark 12:38-44 or 12:41-44'], aw:[4], sl:[
    ['Gospel',['Mark 12:38-44 (long form)','Mark 12:41-44 (short form)']]]},
  {d:'2027-11-14', f:'Thirty-Third Sunday in Ordinary Time', c:'Green', r:['Dan 12:1-3','Ps 16:5+8, 9-10, 11','Heb 10:11-14, 18','Luke 21:36','Mark 13:24-32']},
  {d:'2027-11-21', f:'Solemnity of Our Lord Jesus Christ, King of the Universe', c:'White', n:'Last Sunday of the liturgical year. Advent (Cycle C) begins Nov 28.', r:['Dan 7:13-14','Ps 93:1a, 1b-2, 5','Rev 1:5-8','Mark 11:9b+10a','John 18:33b-37']},
  {d:'2027-11-25', f:'Thanksgiving Day Mass', c:'White', n:'Choose from Masses in Thanksgiving to God, Lectionary #943-947', r:['','','','',''], aw:[0,1,2,3,4], pn:'Mass “In Thanksgiving to God,” Lectionary #943-947.', sl:[
    ['1st Reading (Old Testament)',['1 Kgs 8:55-61','Sir 50:22-24','Isa 63:7-9','Zeph 3:14-15']],
    ['Responsorial Psalm',['1 Chr 29:10bc, 11, 12','Ps 113:1-2, 3-4, 5-6, 7-8','Ps 138:1-2a, 2bc-3, 4-5','Ps 145:2-3, 4-5, 6-7, 8-9, 10-11']],
    ['2nd Reading (New Testament)',['1 Cor 1:3-9','Eph 1:3-14','Col 3:12-17']],
    ['Acclamation',['Ps 65:16','Ps 137:1bc','cf. Matt 11:25','Luke 1:49','John 15:11','Eph 1:3','1 Thess 5:18','Non-biblical verse']],
    ['Gospel',['Matt 7:7-11','Matt 11:25-30','Mark 5:18-20','Luke 1:39-55','Luke 10:17-24','Luke 17:11-19','John 15:9-17','John 16:20-22']]]}
 ]}
];

/* ---------- HELPERS ---------- */
const LABELS = ['1st Reading','Responsorial Psalm','2nd Reading','Acclamation','Gospel'];
const WD = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
