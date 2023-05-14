import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@fontsource/jura'
import '@fontsource/manrope'

const App = ({ Component, pageProps }: AppProps) => {
  return (
	<ChakraProvider>
		<Component {...pageProps} />
	</ChakraProvider>
  )
}

export default App
