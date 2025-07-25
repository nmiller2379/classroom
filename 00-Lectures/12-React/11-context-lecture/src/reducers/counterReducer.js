// reducers/counterReducer.js

export const initialState = { count: 0 };

export default function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state
  }
}

