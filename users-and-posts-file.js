const fs = require('fs');

const { getUsers, getPosts } = require('./blog/api');

async function main() {
    let [users, posts] = await Promise.all([getUsers(), getPosts()]);

    let usersWithPosts = users.map(user => {
        let ownPosts = posts.filter(post => post.userId === user.id);
        return { ...user, posts: ownPosts };
    });

    let jsonString = JSON.stringify(usersWithPosts, null, 4);
    fs.writeFileSync('output.json', jsonString);
    console.log(jsonString);
}

main();
