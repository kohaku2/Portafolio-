import fs from 'fs';

const data = JSON.parse(fs.readFileSync('notion_db3.json', 'utf-8'));
const userProfilePage = data.results.find((page: any) => {
  const titleProp = page.properties?.Nombre?.title;
  return titleProp && titleProp.length > 0 && titleProp[0].plain_text === 'USER_PROFILE';
});

if (userProfilePage) {
  console.log('USER_PROFILE page ID:', userProfilePage.id);
} else {
  console.log('Not found');
}
