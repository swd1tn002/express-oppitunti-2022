const { getUsers, getPosts } = require('./blog/api');

async function main() {
    let [users, posts] = await Promise.all([getUsers(), getPosts()]);

    users.forEach(user => {
        console.log(user.name);

        posts
            .filter(post => post.userId === user.id)
            .forEach(post => console.log(` - ${post.title}`));
    });
}

main();
