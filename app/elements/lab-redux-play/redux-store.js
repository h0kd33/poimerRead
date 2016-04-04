/**
 * Created by johns on 2016/4/5.
 */
var store = Redux.createStore(function(state, action) {
  switch (action.type) {
    case 'agent':
      return { name: '007' };
    case 'name':
    default:
      return { name: 'James Bond' };
  }
});
