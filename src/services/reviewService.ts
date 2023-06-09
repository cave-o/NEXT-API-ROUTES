const BASE_URL = '/api';

interface Review {

  title: string;
  rating: number;
  stars: number;
  content: string;
  name: string;
  description: string;
  imgUrl: string;
  id: number;
  // Add other properties as needed
}

export const reviewService = {
  query,
  add,
  update,
  remove,
};

async function query(): Promise<Review[]> {
  try {
    const res = await fetch(`${BASE_URL}/review`, { method: 'GET' });
    if (!res.ok) {
      throw new Error('Failed to fetch reviews from DB');
    }
    const reviews: Review[] = await res.json();
    console.log('reviews:', reviews);
    return reviews;
  } catch (err) {
    console.error('Error querying reviews:', err);
    return [];
  }
}

async function add(review: Review): Promise<Review> {
  try {
    const res = await fetch(`${BASE_URL}/review`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      throw new Error('Failed to add review to DB');
    }
    const addedReview: Review = await res.json();
    return addedReview;
  } catch (err) {
    console.error('Error adding review:', err);
    throw err; // Throw the error to indicate the failure
  }
}

async function update(review: Review): Promise<Review> {
  try {
    const res = await fetch(`${BASE_URL}/review`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      throw new Error('Failed to update review in DB');
    }
    const updatedReview: Review = await res.json();
    return updatedReview;
  } catch (err) {
    console.error('Error updating review:', err);
    throw err; // Throw the error to indicate the failure
  }
}

async function remove(reviewId: string): Promise<void> {
  try {
    const res = await fetch(`${BASE_URL}/review?reviewId=${reviewId}`, { method: 'DELETE' });
    if (!res.ok) {
      throw new Error('Failed to remove review from DB');
    }
  } catch (err) {
    console.error('Error removing review:', err);
    throw err; // Throw the error to indicate the failure
  }
}

