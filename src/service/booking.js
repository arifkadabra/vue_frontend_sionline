import authHeader from './auth.header';
import api from './api';

class BookingService {
  data() {
    return api.get('getBooking', { headers: authHeader() });
  }
}

export default new BookingService();
