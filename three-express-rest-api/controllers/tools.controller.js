const getAllTools = (req, res, next) => {
  const {ip, query, params, body, headers} = req;
  console.log(ip, query, params, body, headers);
  res.download(__dirname + './tools.controller.js');
};

const saveATool = (req, res) => {
  res.send('tools added');
};

module.exports = {
  getAllTools,
  saveATool,
}