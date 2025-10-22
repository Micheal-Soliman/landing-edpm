import fs from 'fs'
import path from 'path'
 
export const size = {
  width: 32,
  height: 32,
}
 
export const contentType = 'image/webp'
 
export default function Icon() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.webp')
  const logoBuffer = fs.readFileSync(logoPath)
  
  return new Response(logoBuffer, {
    headers: {
      'Content-Type': 'image/webp',
    },
  })
}
