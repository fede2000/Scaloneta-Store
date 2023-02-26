import { Products } from '../../data';

const INITIAL_STATE = {
  recommended: Array(4)
    .fill(0)
    .reduce((acc, _item) => {
      const IDs = acc.map(value => value.id);
      let newRecommended;
      do {
        newRecommended = {
          ...Products[Math.floor(Math.random() * Products.length)],
        };
      } while (IDs.includes(newRecommended.id));

      return [...acc, newRecommended];
    }, []),
};

const recommendedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recommendedReducer;
