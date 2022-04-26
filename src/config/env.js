const environment = String(process.env.NODE_ENV) || 'production';

const env = {
  env: environment,
  production: environment === 'production',

  baseUrl: process.env.NEXT_PUBLIC_BASEURL,
  apiBaseUrl: process.env.NEXT_PUBLIC_APIBASEURL,

};

export default env;
