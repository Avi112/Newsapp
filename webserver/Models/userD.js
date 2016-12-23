var mongoose= require("mongoose");

var UserDetails=mongoose.Schema({
  username:{type:String},
  password:{type:String}
});

var User= mongoose.model("User",UserDetails);

module.exports=User;
