import fs from 'fs';

async function main() {
  const token = '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';
  const pageId = '6db29236ddeb4818a4005fe9537b9b7c';
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };
  
  const res = await fetch(`https://api.api.notion.com/v1/blocks/${pageId}/children?page_size=100`, { headers }).catch(() => null);
  // wait, earlier url: https://api.notion.com
  const res2 = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, { headers });
  const data = await res2.json();
  
  const imageBlock = data.results.find((b: any) => b.type === 'image');
  if (imageBlock && imageBlock.image.type === 'file') {
    const imageUrl = imageBlock.image.file.url;
    console.log('Found image URL, downloading...');
    const imgRes = await fetch(imageUrl);
    const arrayBuffer = await imgRes.arrayBuffer();
    fs.writeFileSync('public/perfil.jpg', Buffer.from(arrayBuffer));
    console.log('Image saved correctly');
  } else {
    console.log('No image block found');
  }
}

main().catch(console.error);
