import fs from 'fs';

const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function searchNotion() {
  try {
    const res = await fetch('https://api.notion.com/v1/search', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: '',
        sort: {
          direction: 'descending',
          timestamp: 'last_edited_time'
        }
      })
    });
    const data = await res.json();
    fs.writeFileSync('notion_search.json', JSON.stringify(data, null, 2));
    console.log('Search successful');
  } catch (e) {
    console.error('Error searching:', e);
  }
}

searchNotion();
