import clients from '../clients.json';
const initialState = clients[0];

export default function playlists(state = initialState, action) {
    if (action.type === 'SET_ACTIVE') {
        return action.payload;
    }
  if (action.type === 'ADD_PLAYLIST') {
    return state;
  } else if (action.type === 'DELETE_PLAYLIST') {
    return state;
  }
  return state;
}
