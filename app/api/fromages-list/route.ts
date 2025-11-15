import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), 'public', 'data')
    const files = fs.readdirSync(dataDir)

    // Extract slugs from filenames
    const slugs = files
      .filter(file => file.endsWith('-enrichi.json'))
      .map(file => file.replace('-enrichi.json', ''))

    return NextResponse.json(slugs)
  } catch (error) {
    console.error('Error listing fromages:', error)
    return NextResponse.json([], { status: 500 })
  }
}
