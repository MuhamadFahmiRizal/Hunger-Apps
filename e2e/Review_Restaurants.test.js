/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'Review Testing e2e';

  I.waitForElement('.resto-item-content', 10);
  I.seeElement('.resto-item-content');

  I.click(locate('.resto-item-content').first());

  I.seeElement('.form-review form');
  I.fillField('inputName', 'Fahmi');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
