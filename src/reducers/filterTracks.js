const initialState = '';

export default function filterTracks(state = initialState, action) {
  if (action.type === 'FIND_CLI') {
    return action.payload;
  }
  return state;
}
