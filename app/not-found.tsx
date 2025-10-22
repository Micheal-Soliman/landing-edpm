import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        color: 'white',
        maxWidth: '500px',
      }}>
        <h1 style={{ fontSize: '120px', fontWeight: 'bold', marginBottom: '20px' }}>
          404
        </h1>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          الصفحة غير موجودة
        </h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px' }}>
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '12px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '8px',
            transition: 'transform 0.2s',
          }}
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  )
}
