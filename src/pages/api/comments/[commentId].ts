import { comments } from '@/data/comments';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req:NextApiRequest, res:NextApiResponse) {
if (req.method === 'GET') {
     const {commentId} = req.query
     const comment = comments.find(c => c.id === parseInt(commentId as string))
     res.status(200).json(comment)
} else if (req.method === 'DELETE') {
    const {commentId} = req.query
    const comment = comments.find(c => c.id === parseInt(commentId as string))
    const i = comments.findIndex(c => c.id === parseInt(commentId as string))
    comments.slice(i , 1)
    res.status(200).json(comment)
}
}