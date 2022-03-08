/**
 * Toteuta 2. osan ratkaisu tänne.
 *
 * Kokeile ratkaisusi toimintaa komennolla:
 *
 *   node users-and-posts-file.js
 *
 * Jos haluat suorittaa GitHub classroom -palvelun testit itse paikallisesti,
 * voit tehdä sen ajamalla seuraavat komennot:
 *
 * npm install --prefix .test
 * npm test -t users-and-posts-file.test.js --prefix .test
 *
 * Ensimmäinen komento asentaa .test-hakemistossa olevan npm-projektin
 * riippuvuudet, eli Jest-testaustyökalun. Toinen komento suorittaa
 * tätä skriptiä varten kirjoitetut testit.
 */
const fs = require('fs');

const users = require('./users.json');
const posts = require('./posts.json');

let usersWithPosts = users.map(user => {
    let ownPosts = posts.filter(post => post.userId === user.id);
    return { ...user, posts: ownPosts };
});

let jsonString = JSON.stringify(usersWithPosts, null, 4);
fs.writeFileSync('output.json', jsonString);