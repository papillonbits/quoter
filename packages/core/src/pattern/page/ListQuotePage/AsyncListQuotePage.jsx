import { lazy, Suspense } from 'react'
import { propTypes } from './ListQuotePage.prop'

const LazyListQuotePage = lazy(() => import('./ListQuotePage'))

export function AsyncListQuotePage() {
  return (
    <Suspense fallback={null}>
      <LazyListQuotePage />
    </Suspense>
  )
}

AsyncListQuotePage.propTypes = propTypes
