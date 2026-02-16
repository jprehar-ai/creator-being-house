import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

try {
  // Get the list of commits that touched app/page.tsx
  const log = execSync('git log --oneline -- app/page.tsx', { encoding: 'utf-8' });
  console.log('Commits that touched app/page.tsx:');
  console.log(log);

  // Get the first (initial) commit hash
  const commits = log.trim().split('\n');
  const firstCommit = commits[commits.length - 1].split(' ')[0];
  console.log('First commit:', firstCommit);

  // Restore the file from that commit
  const content = execSync(`git show ${firstCommit}:app/page.tsx`, { encoding: 'utf-8' });
  writeFileSync('app/page.tsx', content);
  console.log('Successfully restored app/page.tsx from commit', firstCommit);
  console.log('File length:', content.length, 'chars');
} catch (e) {
  console.error('Error:', e.message);
  
  // Fallback: try to get from HEAD~1 or the main branch
  try {
    const content = execSync('git show origin/main:app/page.tsx', { encoding: 'utf-8' });
    writeFileSync('app/page.tsx', content);
    console.log('Restored from origin/main');
  } catch (e2) {
    console.error('Fallback also failed:', e2.message);
    
    // Try listing all available refs
    try {
      const refs = execSync('git log --all --oneline -20', { encoding: 'utf-8' });
      console.log('Available commits:');
      console.log(refs);
    } catch (e3) {
      console.error('Cannot list refs:', e3.message);
    }
  }
}
