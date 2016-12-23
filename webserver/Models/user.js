var mongoose= require("mongoose");

var NewsSchema=mongoose.Schema({
  author:{type:String},
  title:{type:String},
  description:{type:String},
  url:{type:String},
  urlToImage:{type:String},
  publishedAt:{type:String},
  Comments:{type:String}
});

var NewsStory= mongoose.model("NewsStory",NewsSchema);

module.exports=NewsStory;
