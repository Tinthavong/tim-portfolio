import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoGameController, IoLogoGithub } from 'react-icons/io5'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie game developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tim Inthavong
          </Heading>
          <p>Indie GameDev ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Background
        </Heading>
        <Paragraph>
          Tim is a software developer passionate about video games and for building innovative
          digital products. He has a knack for game development, from planning and designing
          to creating and executing code.
          He is experienced with Unreal Engine, Unity3D, Blender, Substance Painter,
          et al relevant to game development.
          He publishes game dev related content on his
          <NextLink href="https://www.youtube.com/@Winter-Triangle"
            passHref>
            <Link target="_blank"> YouTube channel</Link>
          </NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button colorScheme="pink">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Stockton, California.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s of Science Program at Davenport University, focused on Gaming & Simulations
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Indie GameDev
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Art, Drawings, 3D Modeling,
          Gaming, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Tinthavong" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#ff63c3"
                leftIcon={<IoLogoGithub />}
              >
                Tinthavong
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://tinthavong.itch.io/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#ff63c3"
                leftIcon={<IoGameController />}
              >
                Games on itch.io
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
