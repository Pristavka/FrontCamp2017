export const createStore = (reducer, preloadedState, enhancer) => {
  let state = preloadedState;
  let listeners = [];

  function getState(){
    return state;
  }

  function dispatch(action){
    state = reducer(state, action);
    console.log(state);
    listeners.forEach(listener => listener());
    return action
  }

  function subscribe(listener){
    listeners.push(listener);
    return unsubscribe = () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}