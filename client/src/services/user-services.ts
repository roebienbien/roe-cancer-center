import { api } from '../lib/axios';

export const userApi = {
  async getUsers() {
    const res = await api.get('/users');
    return res.data.data;
  },

  async deleteUser(id: number) {
    const res = await api.delete(`/users/${id}`);
    return res.data.data;
  },
};

export default userApi;
