const BASE_URL = '/api';

export const tourService = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};

async function getAllTours() {
  try {
    const res = await fetch(`${BASE_URL}/tours`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    console.error('Had issues getting tours from DB');
    throw err; // Rethrow the error to handle it elsewhere
  }
}

async function getTourById(id: any) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    console.error(`Had issues getting tour with ID ${id} from DB`);
    throw err;
  }
}

async function createTour(tourData: any) {
  try {
    const res = await fetch(`${BASE_URL}/tours`, {
      method: 'POST',
      body: JSON.stringify(tourData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    console.error('Had issues creating tour in DB');
    throw err;
  }
}

async function updateTour(id: any, tourData: any) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tourData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    console.error(`Had issues updating tour with ID ${id} in DB`);
    throw err;
  }
}

async function deleteTour(id: any) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    console.error(`Had issues deleting tour with ID ${id} from DB`);
    throw err;
  }
}
