import { Container, SimpleGrid, Divider, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkItem } from '../components/grid-item'

import toonTanks from '../public/images/ToonTanks.png'
import faceplantDemo from '../public/images/faceplantWebPromo.gif'
import causationDemo from '../public/images/causationGifPromo.gif'


const Works = () => (
	<Layout title="Works">
		<Container maxW="container.md">
			<Box
				borderRadius="lg"
				mt={6}
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			>
				An example of some of my works.
			</Box>

			<SimpleGrid columns={[1, 1, 1]} gap={6}>
				<Section delay={0.2}>
					<WorkItem
						thumbnail={toonTanks}
						title="Toon Tanks"
						text="Developed in Unreal Engine, Toon Tanks is a top down 3D action game inspired by the 'bullet hell' subgenre. 
						The player's goal is to survive as long as they can as waves of enemies try to take them down."
						year={2022}
					/>
				</Section>
			</SimpleGrid>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
				<Section delay={0.2}>
					<WorkItem
						thumbnail={causationDemo}
						title="Causation"
						text=" Developed in Unity, Causation is a 2D pixel art action game that tells the story of a family of bounty
						hunters. The player controls three characters, each with a unique story and different mechanics.

						I was de facto lead developer, handled version control with github and developed the core gameplay. I implemented
						character
						animations and created
						cutscenes
						with Unity's timeline sequencer. "
						year={2020}
					/>
				</Section>
			</SimpleGrid>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
				<Section delay={0.2}>
					<WorkItem
						thumbnail={faceplantDemo}
						title="Faceplant"
						text=" Developed in Unity, Faceplant is a first person 3D platformer. The player uses momentum from
						running, coupled with a grapple hook to navigate. I contributed by creating an NPC AI that
						has simple behavior for the player to latch onto and creating every 3D model. I utilized
						shaders in Unity to create animated clouds. I created and implemented a highscore database."
						year={2020}
					/>
				</Section>
			</SimpleGrid>
			<Divider my={6} borderColor={useColorModeValue('white.300', 'pink.200')} />
		</Container>


	</Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'