import axios from "axios";

const webhook = async () => {
  return axios.get(process.env.GCP_SERVER_CATEGORIES_FUNCTION);
};

const lifecycle = {
  afterCreate: async () => {
    await webhook();
  },
  afterUpdate: async () => {
    await webhook();
  },
  afterDelete: async () => {
    await webhook();
  },
};

export default lifecycle;
