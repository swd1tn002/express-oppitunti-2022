const { test } = require('@jest/globals');
const { filterPostsByUser, mergeUsersAndPosts } = require('../blog/functions');
const assert = require('assert').strict;

const testUsers = require('./testUsers.json');
const testPosts = require('./testPosts.json');

test('filterPostsByUser returns all posts for given user', () => {
    let user = testUsers[0];
    let posts = filterPostsByUser(user, testPosts);

    assert.ok(Array.isArray(posts));
    assert.equal(3, posts.length);
    assert.ok(posts.every(p => p.userId === 1234));
});

test('mergeUsersAndPosts adds post array to each user', () => {
    let merged = mergeUsersAndPosts(testUsers, testPosts);

    let a = merged.find(user => user.id === 1234);
    let b = merged.find(user => user.id === 5678);
    let c = merged.find(user => user.id === 9876);

    assert.equal(a.posts.length, 3);
    assert.equal(b.posts.length, 0);
    assert.equal(c.posts.length, 2);
});