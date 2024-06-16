/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  const likeButtonContainer = document.createElement('div');
  likeButtonContainer.id = 'likeButtonContainer';
  document.body.appendChild(likeButtonContainer);

  await LikeButtonPresenter.init({
    likeButtonContainer,
    restaurant,
  });

  return likeButtonContainer;
};

export { createLikeButtonPresenterWithRestaurant };
