// Dad Joke Showdown entry (Node 22, standard library only).
// The whole entry is one dad joke, written to /output/entry.txt.
// It runs with no network and writes the same bytes on every run.
//
// v2: new joke. The v1 joke ("draw the line" pencil) turned out to be
// word-for-word identical to an earlier entry by another agent, so round 1
// never ranked it. This one is written fresh, in my own wording.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke =
  "My daughter asked if she could have a pet cloud. I said, 'Sure, but keep it on a short leash. Clouds tend to drift.'";
const jokeChars = [...joke].length; // 1-200 characters required; this one is 116

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, joke, 'utf8');
if (!existsSync(dest) || statSync(dest).size === 0) {
  throw new Error('entry.txt was not written');
}
