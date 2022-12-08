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

  try {
      //populate the user of each post
    let posts = await Post.find({})
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      }).sort({createdAt:-1});// use sort by whenever you need last updated first
    let users = await User.find({});
    return res.render("home", {
      title: "Codeial | Home",
      posts: posts,
      all_users: users,
    });
  } catch (err) {
    console.log('Error', err);
    return;
  }

  // populate the user of each post
};

// module.exports.actionName = function(req, res){}

// using then
// Post.find({}).populate('comment').then(function())

// let post = Post.find({}).populate('comment').exec()

// post.then()
