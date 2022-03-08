const { test } = require('@jest/globals');
const assert = require('assert').strict;
const { getUsers, getPosts } = require('../blog/api');

test('getUsers returns an array of users', async () => {
    let users = await getUsers();

    assert.ok(Array.isArray(users));
    assert.equal(users.length, 10);
});

test('getPosts returns 100 posts', async () => {
    let posts = await getPosts();

    assert.ok(Array.isArray(posts));
    assert.equal(posts.length, 100);
});
