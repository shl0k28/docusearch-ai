import { NextPage } from 'next'
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const [documentUrl, setDocumentUrl] = useState<string>('')
	const [prompt, setPrompt] = useState('')
	const [reply, setReply] = useState('')

	const queryDocument = async () => {
		const res = await fetch(`http://localhost:8080/api/query`, {
			method: 'POST',
			body: JSON.stringify({ prompt })
		})
		const answer = await res.json()
		setReply(answer.response.text)
	}

	return(
		<Box px={8} py={8}>
			<Heading>some ai app</Heading>
			<VStack>
				<Text>Enter the document URL</Text>
				<Input value={documentUrl} onChange={({ target }) => setDocumentUrl(target.value)}/>
				<Input value={prompt} onChange={({ target }) => setPrompt(target.value)}/>
				<Button onClick={queryDocument} disabled={!documentUrl}>Create BOT</Button>
				{
					reply && <Text>{reply}</Text>
				}
			</VStack>
		</Box>
	)
}

export default Home