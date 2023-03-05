'use client'

import * as AspectRatio from '@radix-ui/react-aspect-ratio'

export function ManifestVideo() {
  return (
    <AspectRatio.Root ratio={16 / 9} style={{ marginBottom: '16px' }}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/VzqWAzLmIC8"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </AspectRatio.Root>
  )
}
