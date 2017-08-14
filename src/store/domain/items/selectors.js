export const selectState = state => state.domain.items;

export const selectAll = state => Object.values(selectState(state).byId);
