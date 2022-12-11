const express = require("express");
const { authenticate } = require("passport");
const router = express.Router();
const passport = require("passport");

const usersController = require("../controllers/users_conteoller");

router.get("/profile/:id", passport.checkAuthentication, usersController.profile);
router.post("/update/:id", passport.checkAuthentication, usersController.update);

router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

router.post("/create", usersController.create);
// router.post('/create-session', usersController.createSession);

// use passport as a middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  usersController.createSession
);

router.get("/sign-out", usersController.destroySession);

// coding ninjas google authentication not working for this way
// router.get('/auth/google', passport.Authenticator('google', {scope: ['profile','email']}));
// router.get('/auth/google/callback', passport.authenticate('google',{ failureRedirect: "/users/sign-in"}), usersController.createSession);

module.exports = router;
