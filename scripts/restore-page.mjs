import { execSync } from 'child_process';

try {
  // Check git log for page.tsx
  const log = execSync('git log --oneline --follow -- app/page.tsx', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log("Git log for app/page.tsx:");
  console.log(log);

  // Get the first (oldest) commit that has the original page
  const commits = log.trim().split('\n');
  if (commits.length > 0) {
    const firstCommit = commits[commits.length - 1].split(' ')[0];
    console.log("\nOldest commit:", firstCommit);
    
    // Restore the file from that commit
    execSync(`git checkout ${firstCommit} -- app/page.tsx`, { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
    console.log("Successfully restored app/page.tsx from commit", firstCommit);
  }
} catch (e) {
  console.error("Error:", e.message);
  
  // Try alternative: just show what's in the first commit
  try {
    const result = execSync('git log --all --oneline | head -20', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
    console.log("\nAll commits:");
    console.log(result);
  } catch (e2) {
    console.error("Error getting commits:", e2.message);
  }
}
