const nodeMailer = require('../config/nodemailer');


//this is another way of exporting a method
exports.newComment = (comment) => {
    console.log('Inside the newComment mailer');

    nodeMailer.transporter.sendMail({

       from: 'ujawal0011@gmail.com',
       to: comment.user.email,
       subject: 'Your Comment Published!',
       html: '<h1>Yup, your comment is now published!</h1>'

    }, (err,info) => {
         if(err){
            console.log('Error in sending mail',err);
            return;
         }
         console.log('Message Send', info);
         return;
    });
}