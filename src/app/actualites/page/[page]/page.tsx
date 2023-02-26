import type { Metadata } from 'next/types'

import { Header } from '../../../../components/header'
import { InternalNewsSection } from '../../../../components/news'
import { constants } from '../../../../config/constants'
import { getNewsService } from '../../../../services/get-news'

export default function News({ params }: { params: { page?: string } }) {
  return (
    <>
      <Header />
      {/* @ts-expect-error Server Component */}
      <InternalNewsSection page={params?.page ? +params.page : 1} />
    </>
  )
}

export async function generateStaticParams() {
  const newsData = await getNewsService({ limit: constants.NEWS_LIMIT })
  const pages = Array.from({ length: newsData.totalPages }, (_, i) => String(i + 1))
  return pages.map(page => ({ page }))
}

export const metadata: Metadata = {
  title: 'Actualités'
}
