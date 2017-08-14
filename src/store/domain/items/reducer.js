import { generate } from 'utils/temp-id';

import { ADD } from './constants';

const initialItemState = {};

function itemReducer(state = initialItemState, { type, payload }) {
  switch (type) {
    case ADD:
      return { id: generate(), ...payload.attributes };
    default:
      return state;
  }
}

const initialState = { byId: {} };

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ADD:
      const newItem = itemReducer(null, action);

      return {
        ...state,
        byId: { ...state.byId, [newItem.id]: newItem },
      };
    default:
      return state;
  }
}
