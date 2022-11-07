const getAllTools = (req, res, next) => {
  res.send('get all tools');
};

const saveATool = (req, res) => {
  res.send('tools added');
};

const getToolDetails = (req, res) => {
  res.send('tool details found')
};

module.exports = {
  getAllTools,
  saveATool,
  getToolDetails,
}