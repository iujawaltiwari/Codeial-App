{
    // method to submit the form data for new post using AJAX
    let createPost = function(){
      let newPostForm = $('#new-post-form');

      newPostForm.submit(function(e){
          e.preventDefault();

          $.ajax({
              type: 'post',
              url: '/posts/create',
              data: newPostForm.serialize(),
              success: function(data){
                  let newPost = newPostDom(data.data.post);
                  $('#posts-list-container>ul').prepend(newPost);
                  deletePost($(' .delete-post-button', newPost));

                  // call the create comment class
                  new PostComments(data.data.post._id);

                  // CHANGE :: enable the functionality of the toggle like button on the new post
                  new ToggleLike($(' .toggle-like-button', newPost));

                  new Noty({
                      theme: 'relax',
                      text: "Post published!",
                      type: 'success',
                      layout: 'topRight',
                      timeout: 1500
                      
                  }).show();

              }, error: function(error){
                  console.log(error.responseText);
              }
          });
      });
  }


  // method to create a post in DOM
  let newPostDom = function(post){
      return $(`<li id="post-${post._id}">
                  <p>
                      
                      <small>
                          <a class="delete-post-button"  href="/posts/destroy/${ post._id }">X</a>
                      </small>
                     
                      ${ post.content }
                      <br>
                      <small>
                      ${ post.user.name }
                      </small>
                  </p>
                  <div class="post-comments">
                      
                          <form id="post-${ post._id }-comments-form" action="/comments/create" method="POST">
                              <input type="text" name="content" placeholder="Type Here to add comment..." required>
                              <input type="hidden" name="post" value="${ post._id }" >
                              <input type="submit" value="Add Comment">
                          </form>
             
              
                      <div class="post-comments-list">
                          <ul id="post-comments-${ post._id }">
                              
                          </ul>
                      </div>
                  </div>
                  
              </li>`)
  }
    
  //method to delete a post form DOM
//  let deletePost = function(deleteLink){
//     $(deleteLink).click(function(e){
//         e.preventDefault();
         
//         $.ajax({
//             type: 'get',
//             url: $(deleteLink).prop('href'),
//             success: function(data){
//                 $(`#post-${data.post_id}`).remove();
//             },error: function(error){
//                console.log(error.responseText);
//             }
//         });

//     });
//  }

   




//   createPost();
}