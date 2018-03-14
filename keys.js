console.log('this is loaded');

exports.localdev = {
  username: process.env.DEV_USERNAME,
  password: process.env.DEV_PASSWORD,
  database: process.env.DEV_DATABASE,
  host:     process.env.DEV_LOCALHOST,
  dialect:  process.env.DEV_DIALECT,
  port:     process.env.DEV_PORT
};