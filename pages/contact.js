import NextLink from 'next/link'

import {
	Divider,
	Link,
	Container,
	Heading,
	Box,
	Button,
	List,
	ListItem,
	useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

import Section from '../components/section'

const Contact = () => (
	<Layout title="Contact">
		<Container maxW="container.md">
			<Box
				borderRadius="lg"
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				css={{ backdropFilter: 'blur(10px)' }}
			>
				You can contact me by clicking the button below.
			</Box>

			<Section delay={0.1}>
				<Box align="center" my={4}>
					<NextLink href="/" passHref scroll={false}>
						<Button
							colorScheme={useColorModeValue('pink', 'pink')}
							>
							Contact me
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h2" variant="section-title">
					Links
				</Heading>

				<List>
					<ListItem>
						<Link href="https://github.com/Tinthavong" target="_blank">
							<Button
								variant="ghost"
								colorScheme='#ff63c3'
								leftIcon={<IoLogoGithub />}
							>
								Tinthavong
							</Button>
						</Link>
					</ListItem>

					<Link href="https://twitter.com/beteljuche" target="_blank">
						<Button
							variant="ghost"
							colorScheme='#ff63c3'
							leftIcon={<IoLogoTwitter />}
						>
							GameDev Related
						</Button>
					</Link>
				</List>
			</Section>

			<Divider my={6} borderColor={useColorModeValue('white.300', 'pink.200')} />
		</Container>
	</Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'