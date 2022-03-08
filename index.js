// https://www.npmjs.com/package/express
const express = require('express');
const app = express();
const { getUsers, getPosts } = require('./blog/api');
const { filterPostsByUser } = require('./blog/functions');

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/users', async (req, res) => {
    let id = Number(req.query.id);

    let users = await getUsers();

    if (id) {
        res.json(users.find(user => user.id === id) ?? null);
    } else {
        res.json(users);
    }
});

app.get('/users/:id(\\d+)/posts', async (req, res) => {
    let id = Number(req.params.id);

    let [allUsers, allPosts] = await Promise.all([getUsers(), getPosts()]);
    let user = allUsers.find(u => u.id === id);

    if (user) {
        let posts = filterPostsByUser(user, allPosts);
        res.json(posts);
    } else {
        res.json([]);
    }
});

app.listen(3000, () => { console.log('Server running'); }); // kuunneltava portti
