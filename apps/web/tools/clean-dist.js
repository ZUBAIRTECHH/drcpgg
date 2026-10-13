// Post-build: strip Horizons editor scripts and junk llms.txt from the production output.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../../../dist/apps/web');
const file = resolve(dist, 'index.html');
const html = readFileSync(file, 'utf8').replace(/\s*<script type="module">[\s\S]*?<\/script>/g, '');
writeFileSync(file, html);
rmSync(resolve(dist, 'llms.txt'), { force: true });
console.log('clean-dist: index.html cleaned');
