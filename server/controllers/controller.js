// module.exports = {
//   basicFunc(req , res){
//     if(req.query.key){
//       this.query(req, res);
//       return null;
//     }
//     return res.status(200).send("Basic is now finished!")
//   },

//   queryFunc(req , res){
//     return res.status(200).send("Query is now finished!")
//   },

//   paramFunc(req , res){
//     return res.status(200).send("Param is now finished!")
//   }
// }

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
  sort
}