// apiService.js
import axios from 'axios';

const apiService = {
  getAboutUsData: async () => {
    return await axios.get('https://bdlearningpoint.com/backend/public/api/frontend/about-us');
  },
  getContactData: async () => {
    return await axios.get('https://bdlearningpoint.com/backend/public/api/frontend/contact-us');
  },
};

export default apiService;