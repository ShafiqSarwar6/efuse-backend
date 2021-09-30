module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve a single User with id
  router.get("/:id", users.find);

  // Update a User with id
  router.patch("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Retrieve a Posts created by User with id
  router.get("/:id/posts", users.posts);


  app.use('/api/user', router);
  
};