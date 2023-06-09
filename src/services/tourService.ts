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
    console.log('err:', err);
    console.dir('Had issues getting tours from DB');
  }
}

async function getTourById(id) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('err:', err);
    console.dir(`Had issues getting tour with ID ${id} from DB`);
  }
}

async function createTour(tourData) {
  try {
    const res = await fetch(`${BASE_URL}/tours`, {
      method: 'POST',
      body: JSON.stringify(tourData),
    });
    const data = await res.json();
    return data;
  } catch {
    console.dir('Had issues creating tour in DB');
  }
}

async function updateTour(id, tourData) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`, {
      method: 'PUT',
      body: JSON.stringify(tourData),
    });
    const data = await res.json();
    return data;
  } catch {
    console.dir(`Had issues updating tour with ID ${id} in DB`);
  }
}

async function deleteTour(id) {
  try {
    const res = await fetch(`${BASE_URL}/tours/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    return data;
  } catch {
    console.dir(`Had issues deleting tour with ID ${id} from DB`);
  }
}
