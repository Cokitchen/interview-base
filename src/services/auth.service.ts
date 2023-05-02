import { toast } from 'react-toastify';
import { STORAGE_KEYS } from '../utils/constants';
import { apiService } from './base.service';

const LOGIN_URL = 'auth/login';

class AuthService {
  /** *********************************Login********************* */
  login = async (data: object) => {
    try {
      const response = await apiService.post(LOGIN_URL, data, false);
      if (response.data) {
        const res = response.data;
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, res.token);
        localStorage.setItem(STORAGE_KEYS.USER_ID, res.id);
        localStorage.setItem(STORAGE_KEYS.EMAIL, res.email);
        localStorage.setItem(STORAGE_KEYS.FIRST_NAME, res.first_name);
        localStorage.setItem(STORAGE_KEYS.LAST_NAME, res.last_name);
        localStorage.setItem(STORAGE_KEYS.ROLE, res.role);
        localStorage.setItem(STORAGE_KEYS.COKITCHEN, res.cokitchen_id);
        localStorage.setItem(STORAGE_KEYS.STAFF_NUMBER, res?.cokitchen_staff_number);
        // TODO :: make any extra API call here

        return true;
      }
    } catch (err: any) {
      toast(err.response.status === 401 ? 'Incorrect Email Or Password' : err.message, {
        type: 'error'
      });
    }
  };
}

export default new AuthService();
