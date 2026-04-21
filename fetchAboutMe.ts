import fs from 'fs';

const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function fetchBlocks(blockId: string): Promise<any[]> {
  let allBlocks: any[] = [];
  let cursor: string | undefined = undefined;
  
  do {
    const url = `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
    const res = await fetch(url, { headers });
    const data = await res.json();
    
    if (data.results) {
      for (const block of data.results) {
        allBlocks.push(block);
      }
    }
    cursor = data.next_cursor;
  } while (cursor);
  
  return allBlocks;
}

async function main() {
  const pages = [
    { name: 'BIOGRAPHY', id: '342d6ec8-2726-805f-9a5d-dce54173192d' },
    { name: 'EDUCATION', id: '342d6ec8-2726-8074-989a-c5a42c9cd38c' },
    { name: 'HOBBIES', id: '342d6ec8-2726-80ad-9cb4-f2fc396ff0dd' }
  ];
  
  const content: Record<string, any> = {};
  
  for (const page of pages) {
    const blocks = await fetchBlocks(page.id);
    content[page.name] = blocks;
  }
  
  fs.writeFileSync('notion_about_me.json', JSON.stringify(content, null, 2));
  console.log('Fetched about me content');
}

main();
