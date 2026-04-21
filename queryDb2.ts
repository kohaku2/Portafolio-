import fs from 'fs';

const token = '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';
const headers = {
  'Authorization': `Bearer ${token}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json'
};

async function queryDatabase() {
  const dbId = '342d6ec8-2726-80ed-8013-e753662cf456';
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${dbId}/query`, {
      method: 'POST',
      headers,
      body: JSON.stringify({})
    });
    const data = await res.json();
    fs.writeFileSync('notion_db.json', JSON.stringify(data, null, 2));
    console.log('Database queried successfully');
  } catch (e) {
    console.error('Error querying db:', e);
  }
}

queryDatabase();
