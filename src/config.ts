const ENV = import.meta.env;

const config = {
  api: {
    baseUrl: ENV.VITE_APP_API_URL,
    downloadUrl: `${ENV.VITE_APP_API_URL}/references/download`,
  },
  language: {
    key: 'language',
    initial: 'uz',
    list: ['uz', 'en', 'ru'],
  },
  list: {
    perPage: 10,
  },
};

export default config;
