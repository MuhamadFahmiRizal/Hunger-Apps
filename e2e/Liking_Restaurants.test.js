/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.dontSeeElement('#main-resto-list');
  I.see('Tidak ada favorite restaurant yang ditampilkan', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item-not-found',
  );

  I.amOnPage('/#');

  I.waitForElement('.resto-item-name', 10);
  I.seeElement('.resto-item-name');

  const firstRestaurant = locate('.resto-item-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto-item-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.resto-item-name');
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item-not-found',
  );

  I.amOnPage('/#');

  I.waitForElement('.resto-item-name', 10);
  I.seeElement('.resto-item-name');

  const firstRestaurant = locate('.resto-item-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.resto-item', 10);
  I.seeElement('.resto-item');

  const likedRestaurantName = await I.grabTextFrom('.resto-item-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.resto-item-name');

  const firstRestaurantLiked = locate('.resto-item-name').first();
  I.click(firstRestaurantLiked);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.waitForElement('.restaurant-item-not-found', 10);
  I.see(
    'Tidak ada favorite restaurant yang ditampilkan',
    '.restaurant-item-not-found',
  );
});
