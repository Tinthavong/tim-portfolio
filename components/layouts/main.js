import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ActualModelLoader from '../model-loader'

const LazyModel = dynamic(() => import('../actual-model'), {
  ssr: false,
  loading: () => <ActualModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tim's portfolio" />
        <meta name="author" content="Tim Inthavong" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta property="og:site_name" content="Tim Inthavong" />
        <meta name="og:title" content="Tim Inthavong" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        
        <title>Tim Inthavong - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyModel />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
