const getAllTools = (req, res) => {
  res.send('tools found');
};

const saveATool = (req, res) => {
  res.send('tools added');
};

module.exports = {
  getAllTools,
  saveATool,
}