const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = async function (req, res) {
  // console.log(req.cookies);
  // res.cookie('user_id', 25);

  // Post.find({}, function(err, posts){
  //     return res.render('home', {
  //         title: "Codeial | Home",
  //         posts:  posts
  //     });
  // });

  try{
    // CHANGE :: populate the likes of each post and comment
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        },
        populate: {
            path: 'likes'
        }
    }).populate('comments')
    .populate('likes');


    let users = await User.find({});

    return res.render('home', {
        title: "Codeial | Home",
        posts:  posts,
        all_users: users
    });

}catch(err){
    console.log('Error', err);
    return;
}

}

// module.exports.actionName = function(req, res){}

// using then
// Post.find({}).populate('comment').then(function())

// let post = Post.find({}).populate('comment').exec()

// post.then()
