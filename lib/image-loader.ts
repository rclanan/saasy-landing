'use client'

import type { ImageLoaderProps } from 'next/image'

export default function imageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const params = new URLSearchParams()
  params.set('w', width.toString())
  params.set('q', (quality || 75).toString())

  if (src.startsWith('http')) {
    return `${src}?${params.toString()}`
  }
  return `${src}?${params.toString()}`
}
