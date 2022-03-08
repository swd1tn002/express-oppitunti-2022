/**
 * Toteuta 1. osan ratkaisu tänne.
 *
 * Kokeile ratkaisusi toimintaa komennolla:
 *
 *   node users-and-posts.js
 *
 * Jos haluat suorittaa GitHub classroom -palvelun testit itse paikallisesti,
 * voit tehdä sen ajamalla seuraavat komennot:
 *
 * npm install --prefix .test
 * npm test -t users-and-posts.test.js --prefix .test
 *
 * Ensimmäinen komento asentaa .test-hakemistossa olevan npm-projektin
 * riippuvuudet, eli Jest-testaustyökalun. Toinen komento suorittaa
 * tätä skriptiä varten kirjoitetut testit.
 */

const users = require('./users.json');
const posts = require('./posts.json');

users.forEach(user => {
    console.log(user.name);

    posts
        .filter(post => post.userId === user.id)
        .forEach(post => console.log(` - ${post.title}`));
});