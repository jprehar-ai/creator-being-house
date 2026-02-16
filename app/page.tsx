export default function Page() {
  return (
    <div style={{ padding: '40px', background: '#0a0a0f', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Test: Page is rendering</h1>
      <p>If you can see this, the layout and CSS are working correctly.</p>
      <p>The issue is in the page component itself (likely framer-motion or another dependency).</p>
    </div>
  )
}
