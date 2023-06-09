import { tours } from '@/data/tours';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(tours);
  } else if (req.method === 'POST') {
    const { tour } = req.body;
    const newTour = {
      id: Date.now(),
      ...tour,
    };
    tours.push(newTour);
    res.status(201).json(newTour);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
