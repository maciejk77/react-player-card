import GET_PLAYER from '../actions/index';

export default function(state = null, action) {
  //console.log('ACTION RECEIVED: ', action);
  // payload: data.player, data.stats
  switch(action.type) {
    case GET_PLAYER: 
      return action.payload.data;
  }
  return state;
}