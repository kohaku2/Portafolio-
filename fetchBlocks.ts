import fs from 'fs';

async function main() {
  const token = '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';
  const pageId = '6db29236ddeb4818a4005fe9537b9b7c';
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': '2022-06-28',
    'Content-Type': 'application/json'
  };
  
  const res = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, { headers });
  const data = await res.json();
  fs.writeFileSync('notion_blocks.json', JSON.stringify(data, null, 2));
  console.log('Saved blocks');
}
main();
