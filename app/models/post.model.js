module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users"
            },
            title: String,
            content: String,
        },
        { timestamps: true }
    );

    const Post = mongoose.model("post", schema);

    return Post;
};