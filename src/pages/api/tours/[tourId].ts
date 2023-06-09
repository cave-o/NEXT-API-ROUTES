import { tours } from '@/data/tours';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { tourId } = req.query;
    const tour = tours.find((t) => t.id === parseInt(tourId as string));

    if (tour) {
      res.status(200).json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } else if (req.method === 'DELETE') {
    const { tourId } = req.query;
    const tourIndex = tours.findIndex((t) => t.id === parseInt(tourId as string));

    if (tourIndex !== -1) {
      const deletedTour = tours.splice(tourIndex, 1)[0];
      res.status(200).json(deletedTour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
