import { combineReducers } from 'redux';

import clientsList from './clientsList';
import playlists from './playlists';
import filterTracks from './filterTracks';

export default combineReducers({
  clientsList,
  playlists,
  filterTracks
});
