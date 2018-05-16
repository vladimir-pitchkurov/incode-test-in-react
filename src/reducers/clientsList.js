import clients from '../clients.json';

const initialState = clients;

export default function clientsList(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
