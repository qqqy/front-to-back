function basicFunction(req, res){
  res.status(200).send("Basic Completed!")
}

function queryFunction(req, res){
  if(req.query.key){
    res.status(200).send("Query Completed!")
  } else {
    res.status(200).send("Query function hit: query missing or incorrectly formatted.")
  }
}

function paramFunction(req, res){
  if(req.params.key){
    res.status(200).send("Param Completed!")
  } else {
    res.status(200).send("Param function hit: param missing or incorrectly formatted.")
  }
}

function test(){
  console.log("Server Connected!")
}

function sort(req, res){
  if(req.params.key){
    if(req.query.key){
      queryFunction(req , res);
    } else {
      paramFunction(req , res);
    }
  } else {
    basicFunction(req , res);
  }
}

module.exports = {
  basicFunction,
  queryFunction,
  paramFunction,
  sort,
  test
}