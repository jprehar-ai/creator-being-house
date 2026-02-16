const fs = require('fs');

const url = 'https://raw.githubusercontent.com/jprehar-ai/creator-being-house/main/app/page.tsx';

async function main() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log('Failed to fetch:', res.status, res.statusText);
      return;
    }
    const text = await res.text();
    fs.writeFileSync('/vercel/share/v0-project/app/page.tsx', text, 'utf-8');
    console.log('Successfully wrote page.tsx, length:', text.length);
    console.log('First 200 chars:', text.substring(0, 200));
  } catch (e) {
    console.log('Error:', e.message);
  }
}

main();
