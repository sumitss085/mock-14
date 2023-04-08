
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate =(req,res,next)=>{
    const token = req.headers.authorization;
    
    if (token){
        
        jwt.verify(token, "masai", (err, decoded) => {
         
          if (decoded) {
            console.log(decoded);
            const userID = decoded.userID;
           req.body.userID = userID;

            next();
          } else {
            res.send({ msg: "login first" });
          }
        });
    }
    else{
        res.send({ msg: "login first" });
    }
}

module.exports = authenticate