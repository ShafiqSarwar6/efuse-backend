const db = require("../models");
const Post = db.posts;

// Create and Save a new Post
exports.create = (req, res) => {

    // Validate request
    if (!req.body.user || !req.body.title || !req.body.content) {
        res.status(400).send({ message: "Post data can not be empty! " });
        return;
    }

    // Create a Post
    const post = new Post({
        user: req.body.user,
        title: req.body.title,
        content: req.body.content,
    });

    // Save Post in the database
    post
        .save(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};

// Find a Post with an id
exports.find = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Post with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Post with id=" + id });
        });
};

// Update a Post by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Post with id=${id}. Maybe Post was not found!`
                });
            } else res.send({ message: "Post was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + id
            });
        });
};

// Delete a Post with the id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
                });
            } else {
                res.send({
                    message: "Post was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Post with id=" + id
            });
        });
};