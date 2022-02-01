// import store from './customStore';
// store.state = 1;
// console.log(store.state)


import store from "./store";

import { bugAdded, bugRemoved, bugResolved } from "./actions";

// Subscribe store when state change refresh the store
const unsubscribe = store.subscribe(()=> {
  console.log('Store Changed', store.getState())
})


// Add bug
store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
store.dispatch(bugAdded('Bug3'))
store.dispatch(bugResolved(1))
store.dispatch(bugResolved(2))
store.dispatch(bugRemoved())

// console.log(store.getState())