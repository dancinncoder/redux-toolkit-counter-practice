//Action Value
const ADD_NUMBER = "ADD_NUMBER";
const SUBTRACT_NUMBER = "SUBTRACT_NUMBER";

//Action Creators
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const subtractNumber = (payload) => {
  return {
    type: SUBTRACT_NUMBER,
    payload,
  };
};

//InitialState
const initialState = {
  number: 0,
};

//Reducers
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { number: state.number + action.payload };
    case SUBTRACT_NUMBER:
      return { number: state.number - action.payload };
    default:
      return state;
  }
};

export default counter;
