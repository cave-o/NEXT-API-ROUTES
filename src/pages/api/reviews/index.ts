import { reviews } from '@/data/reviews';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(reviews);
  } else if (req.method === 'POST') {
    const { review } = req.body;
    const newReview = {
      id: Date.now(),
      ...review,
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
