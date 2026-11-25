# Liturgy Schedule: Year B (Advent 2026 to Christ the King 2027)

Shepherd of the Valley Catholic Church. A single-page site listing every Mass, its liturgical color and readings, with the Masses still awaiting Fr.'s reading selections flagged.

Live site: https://liberty-pro.github.io/liturgy-schedule/

## Files

- `index.html`: the public schedule.
- The `plan-*.html` file: the planning page for choosing readings (not linked from the public page).
- `data.js`: every Mass and its options. Edit this to change the base schedule.
- `selections.js`: the committed choices. Written by the planning page.
- `resolve.js`: turns choices into the readings shown, including the rules for dependent rows.

## Recording selections

1. Choose on the planning page. Choices are saved in that browser.
2. "Send my selections" makes a link carrying the choices to the person who commits.
3. That person opens the link, reviews, and presses "Commit to public page". This needs a fine-grained GitHub token limited to this repository with Contents: Read and write, entered once on the planning page.

Commits are made on GitHub, so run `git pull` before editing files by hand. Choices are stored by position: do not reorder a Mass's options in `data.js` after it has a committed choice.
