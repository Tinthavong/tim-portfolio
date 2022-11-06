import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SimpleGridItem } from '../components/grid-item'

import c_sharp_svg from '../public/svg/csharp.svg'
import python_svg from '../public/svg/python-svg.svg'
import js_svg from '../public/svg/js-svg.svg'
import vs_svg from '../public/svg/vs-svg.svg'

import c_pp_png from '../public/images/cpp_logo.png'
import UE_png from '../public/images/UE_Logo_icon.png'
import U3D_png from '../public/images/U3D_Logo.png'
import godot_png from '../public/images/Godot_Logo.png'
import blender_png from '../public/images/blender_icon.png'
import substance_png from '../public/images/substance-painter.png'

const Skills = () => (
  <Layout title="skills()">
    <Container maxW="container.md">     
     <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      A list of skills and tools I utilize.
    </Box>
      <Heading variant="section-title" mb={5}>
        Programming
      </Heading>

      <Section delay={0.2}>
        <SimpleGrid columns={[2, 3, 5]} gap={6}>
          <SimpleGridItem
            title="C++"
            thumbnail={c_pp_png}
          />
          <SimpleGridItem
            title="C#"
            thumbnail={c_sharp_svg}
          />
          <SimpleGridItem
            title="Python"
            thumbnail={python_svg}
          />
          <SimpleGridItem
            title="JavaScript"
            thumbnail={js_svg}
          />
        </SimpleGrid>
      </Section>

      <Heading variant="section-title" mb={5}>
        Game Engines
      </Heading>

        <Section delay={0.2}>
          <SimpleGrid columns={[2, 3, 5]} gap={6}>
            <SimpleGridItem
              title="Unreal"
              thumbnail={UE_png}
              
            />
            <SimpleGridItem
              title="Unity 3D"
              thumbnail={U3D_png}
            />
            <SimpleGridItem
              title="Godot"
              thumbnail={godot_png}
            />
          </SimpleGrid>
        </Section>

      <Heading variant="section-title" mb={5}>
        Tools
      </Heading>
      <Section delay={0.3}>
      <Section delay={0.2}>
          <SimpleGrid columns={[2, 3, 5]} gap={6}>
            <SimpleGridItem
              title="Blender"
              thumbnail={blender_png}
              
            />
            <SimpleGridItem
              title="Subst. Painter"
              thumbnail={substance_png}
            />
            <SimpleGridItem
              title="Visual Studio"
              thumbnail={vs_svg}
            />
          </SimpleGrid>
        </Section>
      </Section>
      <Divider my={6} borderColor={useColorModeValue('white.300', 'pink.200')} />

    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
