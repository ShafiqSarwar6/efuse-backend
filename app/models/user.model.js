module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
            username: String,
        },
        { timestamps: true }
    );

    const User = mongoose.model("user", schema);
    return User;
};