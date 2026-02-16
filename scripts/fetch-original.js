const { execSync } = require('child_process');

// Try fetching from GitHub API (public repo)
const urls = [
  'https://api.github.com/repos/jprehar-ai/creator-being-house/contents/app/page.tsx?ref=main',
  'https://api.github.com/repos/jprehar-ai/creator-being-house/contents/app/page.tsx',
];

async function fetchFile() {
  for (const url of urls) {
    try {
      console.log('Trying:', url);
      const res = await fetch(url, {
        headers: { 'Accept': 'application/vnd.github.v3.raw' }
      });
      if (res.ok) {
        const text = await res.text();
        console.log('SUCCESS! Got', text.length, 'chars');
        console.log('First 200 chars:', text.substring(0, 200));
        require('fs').writeFileSync('app/page.tsx', text);
        console.log('Written to app/page.tsx');
        return;
      } else {
        console.log('Failed:', res.status, res.statusText);
        const body = await res.text();
        console.log('Body:', body.substring(0, 200));
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  }
  console.log('All attempts failed');
}

fetchFile();
