import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function downloadAndRead(url: string, filename: string) {
  const res = await fetch(url);
  const dest = fs.createWriteStream(filename);
  await finished(Readable.fromWeb(res.body as any).pipe(dest));
  const content = fs.readFileSync(filename, 'utf-8');
  console.log(`\n--- ${filename} ---`);
  console.log(content);
}

async function main() {
  const pageId = '348d6ec8-2726-8021-8ec0-d03d7c50e4e1';
  const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`;
  const res = await fetch(url, { headers });
  const data = await res.json();
  
  if (data.results) {
    const fileBlock = data.results.find((b: any) => b.type === 'file');
    if (fileBlock) {
      const fileUrl = fileBlock.file.file.url;
      await downloadAndRead(fileUrl, 'USER_PROFILE.txt');
    } else {
      console.log('No file block found in USER_PROFILE page');
    }
  } else {
    console.log('No blocks returned');
  }
}

main();
