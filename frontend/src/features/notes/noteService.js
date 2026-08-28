import axios from 'axios';

const API_URL = '/api/tickets/';

const getNotes = async (ticketId, token) => {
  console.log(ticketId)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + ticketId + '/notes', config);
  // console.log(response)
  return response.data;
};

const noteService = {
  getNotes,
};

export default noteService;
