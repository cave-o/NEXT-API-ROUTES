//import { NextApiRequest, NextApiResponse } from 'next';
//
//export default function handler(req:NextApiRequest, res:NextApiResponse) {
//
//    const { params }= req.query
//console.log(params)
//res.status(200).json(params)
//}

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query;
  const [endpoint, ...restParams] = params as string[];

  if (endpoint === 'tours') {
    // Handle tours API logic based on restParams
    // Example: if (restParams[0] === 'reviews') handle reviews for a specific tour
    // Example: if (restParams[0] === 'bookings') handle bookings for a specific tour

    res.status(200).json({ message: `Handling tours API logic for ${restParams}` });
  } else if (endpoint === 'reviews') {
    // Handle reviews API logic based on restParams
    // Example: if (restParams[0] === 'tours') handle reviews for a specific tour
    // Example: if (restParams[0] === 'users') handle reviews for a specific user

    res.status(200).json({ message: `Handling reviews API logic for ${restParams}` });
  } else {
    res.status(404).json({ message: 'Endpoint not found' });
  }
}
