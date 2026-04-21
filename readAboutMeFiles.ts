import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

async function downloadAndRead(url: string, filename: string) {
  const res = await fetch(url);
  const dest = fs.createWriteStream(filename);
  await finished(Readable.fromWeb(res.body as any).pipe(dest));
  const content = fs.readFileSync(filename, 'utf-8');
  console.log(`\n--- ${filename} ---`);
  console.log(content);
}

async function main() {
  const data = JSON.parse(fs.readFileSync('notion_about_me.json', 'utf-8'));
  
  for (const [section, blocks] of Object.entries(data)) {
    const fileBlock = (blocks as any[]).find(b => b.type === 'file');
    if (fileBlock) {
      const url = fileBlock.file.file.url;
      await downloadAndRead(url, `${section}.txt`);
    }
  }
}

main();
