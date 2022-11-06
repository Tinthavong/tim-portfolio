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
import { IoGameController, IoLogoGithub } from 'react-icons/io5'

import Section from '../components/section'
import { EmailIcon } from '@chakra-ui/icons'

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
				Check out my resum&eacute; below
			</Box>
			<Section delay={0.1}>
				<Box align="center" my={4}>
					<Link href="/Tim_Inthavong_Resume.pdf" target="_blank">
						<Button
							colorScheme={useColorModeValue('pink', 'pink')}	>
							Resum&eacute;
						</Button>
					</Link>
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

					<Link href="https://tinthavong.itch.io/" target="_blank">
						<Button
							variant="ghost"
							colorScheme='#ff63c3'
							leftIcon={<IoGameController/>}
							>
							Games on itch.io
						</Button>
					</Link>

					<ListItem>

						<Link href="mailto:timainthavong@gmail.com" target="_blank">
							<Button
								variant="ghost"
								colorScheme='#ff63c3'
								leftIcon={<EmailIcon />}
							>
								Email  &#40;right click, copy!&#41;
							</Button>
						</Link>
					</ListItem>

				</List>
			</Section>

			<Divider my={6} borderColor={useColorModeValue('white.300', 'pink.200')} />
		</Container>
	</Layout>
)

export default Contact
export { getServerSideProps } from '../components/chakra'