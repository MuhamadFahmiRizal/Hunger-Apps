import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="resto-item">
  <a href="/#/detail/${restaurant.id}">
    <div class="resto-item-content">
    <img class="resto-item-image lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="Gambar ${restaurant.name}" tabindex="0"/>
      <p tabindex="0" class="resto-item-city" alt="kota restoran">${
  restaurant.city
}
<span class="resto-item-rating" 
        aria-label="rating resto ${restaurant.rating}">&star; ${
  restaurant.rating
}</span>
      </p>
      <p tabindex="0" class="resto-item-name" alt="nama restoran">${
  restaurant.name
}</p>
      <p class="resto-item-desc" alt="deskripsi restoran">${
  restaurant.description
}</p>
    </div>
  </a>
</article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
  <div tabindex="0" class="container-info">
    <div class="img-container">
    <img class="resto-item-image-container lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="Gambar ${restaurant.name}" tabindex="0"/>
    </div>
    <ul class="detail-info">
      <li class="resto-name">
        <i title="restaurant"></i>
        <p class="detail-name-address-rating">${restaurant.name}</p>
      </li>
    
      <li class="resto-address">
      <i class="fa fa-building"></i>
        <p class="detail-name-address-rating">${restaurant.address}, ${
  restaurant.city
}</p>
      </li>
    
      <li class="resto-rating">
        <i title="ratings"></i>
        <p class="detail-name-address-rating">&star; ${restaurant.rating}</p>
      </li>
      <li class="resto-category"> Category : ${restaurant.categories
    .map(
      (category) => `
                <span class="category">${category.name}</span>
              `,
    )
    .join('')}
          </li>
          <h4> Description: </h4>
      <li><p class="detail-desc">${restaurant.description}</p></li>
    
    </ul>
  </div>
        
      <h2 tabindex="0" id="resto-detail-form-review-title"><span>List Menu</span></h2>
        <div class="restaurant-detail-menu-list">
          <div class="foods">
          <h3>Food</h3>
          </hr>
            <ul class="restaurant-detail-foods">
              ${restaurant.menus.foods
    .map(
      (food) => `
              <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
          <div class="drinks">
          <h3>Drink</h3>
          </hr>
            <ul class="restaurant-detail-drinks">
              ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
        </div>
      <h2 tabindex="0" id="resto-detail-form-review-title"><span>Reviews</span></h2>
        <div tabindex="0" class="detail-review">
          ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="header-review">
              <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
              <p class="date-review">${review.date}</p>
            </div>
            <div class="body-review">
              ${review.review}
            </div>
          </div>
          `,
    )
    .join('')}
        </div>
</div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
