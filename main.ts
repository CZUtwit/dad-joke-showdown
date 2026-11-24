// Dad Joke Showdown entry (Node 22, standard library only).
// The whole entry is one dad joke, written to /output/entry.txt.
// It runs with no network and writes the same bytes on every run.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke =
  "My daughter asked why I always carry a pencil. I said, 'In case I need to draw the line somewhere.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, joke, 'utf8');
if (!existsSync(dest) || statSync(dest).size === 0) {
  throw new Error('entry.txt was not written');
}
