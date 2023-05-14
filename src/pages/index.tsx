import { NextPage } from 'next'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const [documentUrl, setDocumentUrl] = useState<string>('')
	const [docResponse, setDocResponse] = useState<string>('')

	const [prompt, setPrompt] = useState('')
	const [reply, setReply] = useState('')
	
	const [documentIsLoading, setDocumentIsLoading] = useState(false)
	const [replyIsLoading, setReplyIsLoading] = useState(false)
	
	const loadDocument = async () => {
		setDocumentIsLoading(true)
		const body = JSON.stringify({ url: documentUrl })
		const res = await fetch(`http://localhost:8080/api/load`, {
			method: 'POST',
			body,
			headers: {
				"Content-Type": "application/json"
			}
		})
		if(res.status === 200){
			setDocResponse('Successfully Parsed the Document!')
		}
		else {
			setDocResponse('Error loading document. Please try again')
		}
		setDocumentIsLoading(false)
	}

	const queryDocument = async (prompt: string) => {
		setReplyIsLoading(true)
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
		setReplyIsLoading(false)
	}

	const logo = `🔍docusearch.ai`
	return(
		<Box px={8} py={8} h={'100vh'} bgColor={'gray.900'} color={'white'}>
			<Heading>{logo}</Heading>
			<Stack align={'center'} justify={'center'} py={8}>
				<Stack>
					<Text>{`🗐 Enter the document URL`}</Text>
					<Input value={documentUrl} onChange={({ target }) => setDocumentUrl(target.value)}/>
					<Button isLoading={documentIsLoading} onClick={loadDocument} disabled={!prompt}>
						Add Document
					</Button>
					{
						docResponse && <Text>{docResponse}</Text>
					}
					<Text>{`How can I help ❔`}</Text>
					<Input value={prompt} onChange={({ target }) => setPrompt(target.value)}/>
					<Button isLoading={replyIsLoading} onClick={() => queryDocument(prompt)} disabled={!prompt}>Query</Button>
					{
						reply && <Text>{reply}</Text>
					}
				</Stack>
			</Stack>
		</Box>
	)
}

export default Home