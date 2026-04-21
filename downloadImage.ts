import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const token = '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';
const pageId = '6db29236ddeb4818a4005fe9537b9b7c';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function main() {
  try {
    const res = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, { headers });
    const data = await res.json();
    
    const imageBlock = data.results.find((b: any) => b.type === 'image');
    if (imageBlock && imageBlock.image.type === 'file') {
      const imageUrl = imageBlock.image.file.url;
      console.log('Found image URL, downloading...');
      
      const imgRes = await fetch(imageUrl);
      if (!fs.existsSync('public')) {
        fs.mkdirSync('public');
      }
      const dest = fs.createWriteStream('public/perfil.jpg');
      await finished(Readable.fromWeb(imgRes.body as any).pipe(dest));
      console.log('Image downloaded successfully to public/perfil.jpg');
    } else {
      console.log('No image block found');
    }
  } catch (e) {
    console.error(e);
  }
}
main();
