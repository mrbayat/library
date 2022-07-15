import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
})

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
}
export default RTL
