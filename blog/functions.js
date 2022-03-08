function filterPostsByUser(user, posts) {
    return posts.filter(post => post.userId === user.id);
}

function mergeUsersAndPosts(users, posts) {
    return users.map(user => {
        return { ...user, posts: filterPostsByUser(user, posts) };
    });
}

module.exports = { filterPostsByUser, mergeUsersAndPosts };