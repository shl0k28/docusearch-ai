import { NextPage } from 'next'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

const Home: NextPage = () => {
	return(
		<Box px={8} py={8}>
			<Heading>some ai app</Heading>
			<VStack>
				<Text>Enter the document URL</Text>
			</VStack>
		</Box>
	)
}

export default Home