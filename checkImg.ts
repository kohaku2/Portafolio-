import fs from 'fs';
const stats = fs.statSync('public/perfil.jpg');
console.log('Size:', stats.size);
const buffer = fs.readFileSync('public/perfil.jpg');
console.log('Header:', buffer.subarray(0, 10).toString('hex'));
