import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Jaya Mark - استثمر في مستقبلك'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Jaya Mark
        </div>
        <div
          style={{
            fontSize: 48,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          استثمر في مستقبلك
        </div>
        <div
          style={{
            fontSize: 36,
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: 30,
            textAlign: 'center',
          }}
        >
          وحدات تجارية • إدارية • طبية
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '20px 40px',
              borderRadius: 20,
            }}
          >
            <div style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>25%</div>
            <div style={{ fontSize: 28, color: 'white' }}>خصم كاش</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '20px 40px',
              borderRadius: 20,
            }}
          >
            <div style={{ fontSize: 60, fontWeight: 'bold', color: 'white' }}>5%</div>
            <div style={{ fontSize: 28, color: 'white' }}>مقدم فقط</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
