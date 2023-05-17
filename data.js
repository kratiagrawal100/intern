const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Owner=new Schema({
    
        id:String,
        avatar_url:String,
        html_url:String,
        type:String,
        site_admin:String
    

});
const Reposchema=new Schema({
    id:Number,
    name:String,
    html_url:String,
    description:String,
    created_at:{
        type:Date,
        default:Date.now(),
    },
    open_issues:Number,
    watchers:Number,
    owner:Owner
});
module.exports=Repo=mongoose.model("repo",Reposchema);