import { STORAGE_KEYS } from '../utils/constants';

const DUMMY_RESP = {
  dob: null,
  email: 'kitchen@gmail.com',
  first_name: 'Kitchen',
  id: 'a3614ae5-adca-4be3-8cd3-fae4e53cba8a',
  last_name: 'Staff',
  role: 'KITCHEN_STAFF',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYTM2MTRhZTUtYWRjYS00YmUzLThjZDMtZmFlNGU1M2NiYThhIiwiYWN0aXZlIjp0cnVlLCJ1c2VybmFtZSI6bnVsbCwiZW1haWwiOiJraXRjaGVuQGdtYWlsLmNvbSIsImVtYWlsX2NvbmZpcm1lZCI6ZmFsc2UsIm9ubGluZSI6ZmFsc2UsInJvbGUiOiJLSVRDSEVOX1NUQUZGIiwiZmlyc3RfbmFtZSI6IktpdGNoZW4iLCJsYXN0X25hbWUiOiJTdGFmZiIsIm90aGVyX25hbWUiOm51bGwsInBob25lX251bWJlciI6IjA5MTc5MjEyMDQ1IiwidXNlcl9nZW5kZXIiOiJVbnNwZWNpZmllZCIsImRvYiI6bnVsbCwiYmFsYW5jZSI6IjAiLCJsYXQiOm51bGwsImxuZyI6bnVsbCwibG9naXN0aWNzX2NvbXBhbnlfaWQiOm51bGwsImNyZWF0ZWRfYXQiOiIyMDIxLTA3LTE3VDA3OjM1OjIzLjg0NFoiLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNy0xN1QwNzozNToyMy44NDRaIiwicHJvZmlsZV9pbWFnZSI6bnVsbCwib3dlIjoiMCIsInllYXIiOmZhbHNlLCJiYW5pX2N1c3RvbWVyX3JlZiI6bnVsbCwiYmFuaV9hY2NvdW50X251bWJlciI6bnVsbCwiYmFuaV9hY2NvdW50X25hbWUiOm51bGwsImNva2l0Y2hlbl9pZCI6Ijg1YzdkMTczLTU2ZWQtNDRjOC04MzM1LWVmMGVlY2FiZjQ1NCIsImNva2l0Y2hlbl9zdGFmZl9udW1iZXIiOm51bGwsImJhbmlfYWNjb3VudF9udW1iZXJfcHJvdmlkdXMiOm51bGwsImZyZWVfZGVsaXZlcmllcyI6MCwicmlkZXJfYmxhY2tsaXN0IjpmYWxzZSwicmlkZXJfYXZlcmFnZV9kZWxpdmVyeV90aW1lIjpudWxsLCJ0aGVwZWVyX3JlZmVyZW5jZSI6bnVsbCwiYmFuaV9hY2NvdW50X251bWJlcl9ndCI6bnVsbCwiYmFuaV9hY2NvdW50X251bWJlcl9mY21iIjpudWxsLCJiYW5pX2FjY291bnRfbnVtYmVyX2hlcml0YWdlIjpudWxsLCJpc19kZWxldGVkIjpmYWxzZSwiaXNfaW5fYmluIjpmYWxzZSwicGVybWlzc2lvbnMiOm51bGwsImJhbmlfYWNjb3VudF9udW1iZXJfOXBzIjpudWxsLCJiYW5pX2FjY291bnRfbnVtYmVyX3N0YW5iaWMiOm51bGx9LCJpYXQiOjE2ODMwMjY1MzB9.gzhOxsqwlk-_z-XfoEiengtu3NgXsGi2gp0VIKVOaDM'
};

class AuthService {
  /** *********************************Login********************* */
  login = async (loginData: object) => {
    console.log({ loginData });
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, DUMMY_RESP.token);
    localStorage.setItem(STORAGE_KEYS.USER_ID, DUMMY_RESP.id);
    localStorage.setItem(STORAGE_KEYS.EMAIL, DUMMY_RESP.email);
    localStorage.setItem(STORAGE_KEYS.FIRST_NAME, DUMMY_RESP.first_name);
    localStorage.setItem(STORAGE_KEYS.LAST_NAME, DUMMY_RESP.last_name);
    localStorage.setItem(STORAGE_KEYS.ROLE, DUMMY_RESP.role);

    return true;
  };
}

export default new AuthService();
