import fs from 'fs';

const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function fetchBlocks(blockId: string, depth = 0): Promise<any[]> {
  let allBlocks: any[] = [];
  let cursor: string | undefined = undefined;
  
  do {
    const url = `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;
    const res = await fetch(url, { headers });
    const data = await res.json();
    
    if (data.results) {
      for (const block of data.results) {
        allBlocks.push(block);
        if (block.has_children) {
          block.children = await fetchBlocks(block.id, depth + 1);
        }
      }
    }
    cursor = data.next_cursor;
  } while (cursor);
  
  return allBlocks;
}

async function main() {
  const pageId = '6db29236ddeb4818a4005fe9537b9b7c';
  try {
    const pageRes = await fetch(`https://api.notion.com/v1/pages/${pageId}`, { headers });
    const pageData = await pageRes.json();
    
    const blocks = await fetchBlocks(pageId);
    
    fs.writeFileSync('notion_data_full.json', JSON.stringify({ page: pageData, blocks }, null, 2));
    console.log('Successfully fetched full Notion data');
  } catch (e) {
    console.error('Error fetching:', e);
  }
}

main();
