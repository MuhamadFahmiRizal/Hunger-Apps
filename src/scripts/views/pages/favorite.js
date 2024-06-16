import FavoriteRestaurantIdb from '../../data/favorite-restoidb';
import { createRestaurantItemTemplate } from '../templates/template';

const Favorite = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto-container">
        <section class="content">
            <h2 tabindex="0" class="explore-restaurant-label">
              Favorite
            </h2>
            <h2 class="restaurant-item-not-found"></h2>
            <div id="main-resto-list" class="list-resto"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#main-resto-list');
    const empty = document.querySelector('.restaurant-item-not-found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
