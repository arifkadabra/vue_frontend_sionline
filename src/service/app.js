import authHeader from './auth.header';
import api from './api';

class AppService {
  me() {
    return api.get('me', { headers: authHeader() });
  }

  data() {
    return api.get('getData', { headers: authHeader() });
  }
  
  vessel() {
    return api.get('vessel', { headers: authHeader() });
  }

  voyage(vessel) {
    return api.get('voyage/'+vessel, { headers: authHeader() });
  }

  container(vessel,voyage,si_number) {
    return api.post('container',{vessel,voyage,si_number}, { headers: authHeader() });
  }

  saveSI(params) {
    return api.post('save', params, { headers: authHeader() });
  }

  updateSI(params) {
    return api.post('update', params, { headers: authHeader() });
  }

}

export default new AppService();
