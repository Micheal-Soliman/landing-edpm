import fs from 'fs'
import path from 'path'
 
export const size = {
  width: 180,
  height: 180,
}
 
export const contentType = 'image/webp'
 
export default function AppleIcon() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.webp')
  const logoBuffer = fs.readFileSync(logoPath)
  
  return new Response(logoBuffer, {
    headers: {
      'Content-Type': 'image/webp',
    },
  })
}
