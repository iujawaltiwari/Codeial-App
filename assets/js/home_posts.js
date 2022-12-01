{
// Method to submit the form data for post using AJAYX
  let createPost = function(){
    let newPostForm = $('#new-post-form');

    newPostForm.submit(function(e){
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: '/post/create',
            data: newPostForm.serialize(),
            dataType: "dataType",
            success: function (data) {
                console.log(data);
            }, error: function(error){
                console.log(error.responseText);
            } 
        });
    });
  }

// method to create a post in DOM

  createPost();
}