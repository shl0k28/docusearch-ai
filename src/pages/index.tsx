import { NextPage } from 'next'
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const [documentUrl, setDocumentUrl] = useState<string>('')

	return(
		<Box px={8} py={8}>
			<Heading>some ai app</Heading>
			<VStack>
				<Text>Enter the document URL</Text>
				<Input value={documentUrl} onChange={({ target }) => setDocumentUrl(target.value)}/>
				<Button>Create BOT</Button>
			</VStack>
		</Box>
	)
}

export default Home