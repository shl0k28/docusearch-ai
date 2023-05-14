import { NextPage } from 'next'
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const [documentUrl, setDocumentUrl] = useState<string>('')
	const [prompt, setPrompt] = useState('')
	const [reply, setReply] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const queryDocument = async (prompt: string) => {
		setIsLoading(true)
		const body = JSON.stringify({ prompt })
		const res = await fetch(`http://localhost:8080/api/query`, {
			method: 'POST',
			body,
			headers: {
				"Content-Type": "application/json"
			}
		})
		const answer = await res.json()
		console.log(answer)
		setReply(answer.response.text)
		setIsLoading(false)
	}

	return(
		<Box px={8} py={8}>
			<Heading>docusearch.ai</Heading>
			<VStack>
				<Text>Enter the document URL</Text>
				<Input value={documentUrl} onChange={({ target }) => setDocumentUrl(target.value)}/>
				<Input value={prompt} onChange={({ target }) => setPrompt(target.value)}/>
				<Button isLoading={isLoading} onClick={() => queryDocument(prompt)} disabled={!prompt}>Query</Button>
				{
					reply && <Text>{reply}</Text>
				}
			</VStack>
		</Box>
	)
}

export default Home