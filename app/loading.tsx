export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(220, 20, 60, 0.4);
            }
            50% { 
              box-shadow: 0 0 40px rgba(220, 20, 60, 0.8);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }} />
      <div style={{
        textAlign: 'center',
        color: 'white',
        animation: 'fadeIn 0.6s ease-out',
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          border: '5px solid rgba(220, 20, 60, 0.2)',
          borderTop: '5px solid #DC143C',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite, pulse 2s ease-in-out infinite',
          margin: '0 auto 30px',
        }} />
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '10px',
          letterSpacing: '2px',
        }}>EDPM</h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#DC143C',
          fontWeight: '600',
        }}>جاري التحميل...</p>
      </div>
    </div>
  )
}
