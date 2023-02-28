const { default: db } = require("../utils/dbConnect");

let tools = [
  {id: 1, name: 'Abul'},
  {id: 2, name: 'Babul'},
  {id: 3, name: 'Cabul'}
]

const getAllTools = (req, res, next) => {
  const {limit, page} = req.query;
  console.log(limit, page);
  res.json(tools.slice(0, limit));
};

const saveATool = async (req, res) => {
  try {
   const db = db();
   const tool = req.body;

   const result = await db.collection("tools").insertOne(tool);
   console.log(result);
  } catch (error) {
    
  }
};

const getToolDetails = (req, res) => {
  const {id} = req.params;
  console.log(id);
  // const filter = {_id: id};
  const foundTool = tools.find(tool => tool.id === Number(id));
  res.status(200).send({
    success: true,
    message: 'Success',
    data: foundTool
  });
  // res.status(500).send({
  //   success: false,
  //   error: 'Internal server error'
  // });
};

const updateTool = (req, res) => {
  // const newData = req.body;
  const {id} = req.params;
  const filter = {_id: id};

  const newData = tools.find(tool => tool.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;

  res.send(newData);

}

const deleteTool = (req, res) => {
  const {id} = req.params;
  const filter = {_id: id};

  tools = tools.filter(tool => tool.id !== Number(id));

  res.send(tools);
}

module.exports = {
  getAllTools,
  saveATool,
  getToolDetails,
  updateTool,
  deleteTool,
}