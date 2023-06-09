import { reviews } from '@/data/reviews';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { reviewsId } = req.query;
  const review = reviews.find((r) => r.id === parseInt(reviewsId as string));

  if (!review) {
    res.status(404).json({ message: 'Review not found' });
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json(review);
  } else if (req.method === 'PUT') {
    const { updatedReview } = req.body;
    Object.assign(review, updatedReview);
    res.status(200).json(review);
  } else if (req.method === 'DELETE') {
    const index = reviews.findIndex((r) => r.id === parseInt(reviewsId as string));
    reviews.splice(index, 1);
    res.status(200).json(review);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
