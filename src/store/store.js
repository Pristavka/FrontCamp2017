/*Flux/Redux implementation*/
export const createStore = (reducer, preloadedState) => {
  let state = preloadedState;
  let listeners = [];
  function getState(){
    return Object.assign({}, state);
  }
  function dispatch(action){
    state = reducer(state, action);
    listeners.forEach(listener => listener(action.sources));
    return action;
  }
  function subscribe(listener){
    listeners.push(listener);
    return function unsubscribe(){
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }
  return { getState, dispatch, subscribe };
};
