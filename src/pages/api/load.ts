// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GitbookLoader } from 'langchain/document_loaders/web/gitbook'
import type { NextApiRequest, NextApiResponse } from 'next'

const loadDocuments = async (documentUrl: string) => {
	const gitbookLoader = new GitbookLoader(documentUrl, { shouldLoadAllPaths: true })
	const docs = await gitbookLoader.load()
	return docs
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if(req.method == 'POST'){
		try {
			const { url } = await req.body
			const docs = await loadDocuments(url)
			res.status(200).json({ message: "Successfully Created DB" })
		}
		catch (err){
			res.status(400).json({ err })
		}
	}
}

export default handler 