//module.exports.actionName = function(req , res)
const Post = require('../models/post');

module.exports.home = function(req , res){
//    return res.end('<h1>Express is up on codeial!</h1>')
//    console.log(req.cookies)
// Post.find({}, function(err,post){
//       return res.render('home',{
//             title: "Codeial | home",
//             post: post

//      });

//    });

//populate the user of each post
   Post.find({}).populate('user').exec(function(err,post){
      return res.render('home',{
            title: "Codeial | home",
            post: post

     });
   });
}

// console.log(req.cookies);
// req.cookies('user_id',25);