import { ADD } from './constants';

export function add(attributes) {
  return { type: ADD, payload: { attributes } };
}
