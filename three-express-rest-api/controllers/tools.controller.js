const getAllTools = (req, res, next) => {
  const {ip, query, params, body, headers} = req;
  console.log(ip, query, params, body, headers);
  res.send("got it");
};

const saveATool = (req, res) => {
  res.send('tools added');
};

module.exports = {
  getAllTools,
  saveATool,
}