// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GitbookLoader } from 'langchain/document_loaders/web/gitbook'
import type { NextApiRequest, NextApiResponse } from 'next'

const loadDocuments = async (documentUrl: string) => {
	const gitbookLoader = new GitbookLoader(documentUrl, { shouldLoadAllPaths: true })
	const docs = await gitbookLoader.load()
	console.log(docs)
}