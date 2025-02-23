import mutations from './mutations';
import { DataService } from '@/config/dataService/dataService';
import { notification } from 'ant-design-vue';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Submited',
  });
};

const addNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Deleted',
  });
};

const deleteNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen updated',
  });
};

const updateNotificationError = (err) => {
  notification.error({
    message: err,
  });
};

const state = () => ({
  data: [],
  url: null,
  fileLoading: false,
  loading: false,
  error: null,
});

const actions = {
  async axiosCrudSubmitData({ commit }, data) {
    try {
      await commit('axiosAddBeginBegin');
      const response = await DataService.post('/create', data);
      await commit('axiosAddBeginSuccess', response.data.data);
      addNotificationSuccess();
    } catch (err) {
      await commit('axiosAddBeginErr', err);
      console.log(err);
      addNotificationError(err.message);
    }
  },

  async axiosCrudGetData({ commit }) {
    try {
      await commit('axiosReadBegin');
      const query = await DataService.get('/view-all');
      await commit('axiosReadSuccess', query.data.data);
    } catch (err) {
      console.log(err);
      await commit('axiosReadErr', err);
    }
  },

  async axiosDataSearch({ commit }, searchItem) {
    try {
      await commit('axiosReadBegin');
      if (searchItem != '') {
        const query = await DataService.get(`/search/${searchItem}`);
        await commit('axiosReadSuccess', query.data.data);
      } else {
        try {
          const query = await DataService.get('/view-all');
          await commit('axiosReadSuccess', query.data.data);
        } catch (err) {
          console.log(err);
          await commit('axiosReadErr', err);
        }
      }
    } catch (err) {
      console.log(err);
      await commit('axiosReadErr', err);
    }
  },

  async axiosFileClear({ commit }) {
    try {
      await commit('axiosUploadBegin');
      commit('axiosUploadSuccess', null);
    } catch (err) {
      await commit('axiosUploadErr', err);
    }
  },

  async axiosFileUploader({ commit }, imageAsFile) {
    let data = new FormData();
    data.set('image', imageAsFile);
    try {
      await commit('axiosUploadBegin');
      const query = await DataService.post('/image-upload', data, { 'Content-Type': 'multipart/form-data' });
      console.log(query.data);
      commit('axiosUploadSuccess', `img/basics/${query.data}`);
    } catch (err) {
      await commit('axiosUploadErr', err);
    }
  },

  async axiosSingleDataGet({ commit }, id) {
    try {
      await commit('axiosSingleDataBegin');
      const query = await DataService.get(`/view/${id}`);
      commit('axiosSingleDataSuccess', query.data.data);
      commit('axiosUploadSuccess', query.data.data.image);
    } catch (err) {
      await commit('axiosSingleDataErr', err);
    }
  },

  async axiosDataDelete({ commit }, { id, getData }) {
    try {
      await commit('axiosDeleteBegin');
      await DataService.get(`/delete/${id}`);
      await commit('axiosDeleteSuccess');
      await getData();
      deleteNotificationSuccess();
    } catch (err) {
      await commit('axiosDeleteErr', err);
      console.log(err);
      deleteNotificationError(err);
    }
  },

  async axiosDataUpdate({ commit }, { id, data }) {
    try {
      await commit('axiosUpdateBegin');
      await DataService.post(`/update/${id}`, data);
      commit('axiosUpdateSuccess');

      updateNotificationSuccess();
    } catch (err) {
      await commit('axiosUpdateErr', err);
      updateNotificationError(err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
