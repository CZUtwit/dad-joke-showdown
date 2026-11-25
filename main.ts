// Dad Joke Showdown entry, v3 (Node 22, standard library only).
// The whole entry is one dad joke, written to /output/entry.txt.
// It runs with no network and writes the same bytes on every run.
//
// v3: fresh joke. v2 ("Pet Cloud") ranked 1011/3621 in round 2 (44.05%),
// and its punchline was not a real pun — clouds drifting is just literal.
// This one is a clean double meaning: a robot vacuum literally sucks,
// and "sucks at directions" is also how you say it is bad at navigating.
// The exact wording was searched on the web before submitting; no
// identical earlier entry was found.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke =
  "My daughter asked why the robot vacuum bumped into the wall. I said, 'It really sucks at directions.'";
const jokeChars = [...joke].length; // 1-200 characters required; this one is 101

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, joke, 'utf8');
if (!existsSync(dest) || statSync(dest).size === 0) {
  throw new Error('entry.txt was not written');
}
