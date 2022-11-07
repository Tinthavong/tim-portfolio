import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge, Heading, Stack, Center, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w="100%" textAlign="center">
		<LinkBox cursor="pointer">
			<Image
				src={thumbnail}
				alt={title}
				className="grid-item-thumbnail"
				placeholder="blur"
				loading="lazy"
			/>
			<LinkOverlay href={href} target="_blank">
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkItem = ({ thumbnail, title, text, year, category }) => (
	<Center>
		<Box w="100%" textAlign="center" p={5} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} boxShadow={'2xl'} borderRadius="lg" >
			<Stack direction={"row"}>
				<Heading textAlign="left" fontSize={24} variant="section-title">
				<LinkOverlay href={`${id}`}>
							<Heading textAlign="left" fontSize={24} variant="section-title">
								{title}
							</Heading>
						</LinkOverlay>
						<Box><ChevronRightIcon /></Box>
				</Heading>
				<Box><Badge fontSize={16} color={useColorModeValue('purple.700', 'blue.200')}>{category}</Badge></Box>
			</Stack>
			<Box align={"left"} mb={2}><Badge fontSize={16} color={useColorModeValue('purple.700', 'blue.200')}>{year}</Badge></Box>
			<Text textAlign={"left"} mb={3} fontSize={16}>{text}</Text>
			<Image
				src={thumbnail}
				alt={title}
				w="lg"
			/>
		</Box>
	</Center>
)

export const SimpleGridItem = ({ title, thumbnail }) => (
	<Box w="100%"
		textAlign="center"
		bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
		borderRadius="lg"
		p={2}>
		<Image
			src={thumbnail}
			alt={title}
			className="simple-grid-item-thumbnail"
			loading="lazy"
		/>
		<Box>
			<Badge rounded="lg" px="2" p={1} variantColor="teal">
				{title}
			</Badge>
		</Box>
	</Box>
)

export const GridItemStyle = () => (
	<Global
		styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
	/>
)