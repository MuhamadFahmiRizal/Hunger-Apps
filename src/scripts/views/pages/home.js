import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template';

const Home = {
  async render() {
    return `
      <main tabindex="0" id="mainContent" class="main-resto-container">
      <section class="content">
        <h2 tabindex="0" class="main-resto-label">
          Jelajahi Restaurant
        </h2>
        <div id="main-resto-list" class="list-resto"></div>
      </section>
    </main>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('.list-resto');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
