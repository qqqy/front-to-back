module.exports = {
  all(req , res){
    if(req.query.key){
      this.query(req, res);
      return null;
    }
    return res.status(200).send("All is now finished!")
  },
  query(req , res){
    return res.status(200).send("Query is now finished!")
  },
  param(req , res){
    return res.status(200).send("Param is now finished!")
  }
}