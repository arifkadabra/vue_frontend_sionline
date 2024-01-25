import axios from 'axios';
import authHeader from './auth.header';
// import api from './api';

class BookingService {
    recommended() {
    // return 
    // api.get('getBooking', { headers: authHeader() });
    
    const data = axios.get(
        'https://shipping.api.samudera.id:8080/Schedule/findRecommendedSchedule',
        { headers: authHeader() }
    );

    return data;
  }

  next() {
    const data = axios.get(
        'https://shipping.api.samudera.id:8080/Schedule/findScheduleList',
        { headers: authHeader() }
    );
    return data;
  }
}


export default new BookingService();
