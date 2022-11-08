const tools = [
  {id: 1, name: 'Abul'},
  {id: 2, name: 'Babul'},
  {id: 3, name: 'Cabul'}
]

const getAllTools = (req, res, next) => {
  const {limit, page} = req.query;
  console.log(limit, page);
  res.json(tools.slice(0, limit));
};

const saveATool = (req, res) => {
  console.log(req.body);
  tools.push(req.body);
  res.send(tools);
};

const getToolDetails = (req, res) => {
  const {id} = req.params;
  console.log(id);
  // const filter = {_id: id};
  const foundTool = tools.find(tool => tool.id === Number(id));
  res.send(foundTool)
};

module.exports = {
  getAllTools,
  saveATool,
  getToolDetails,
}