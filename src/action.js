import * as types from './constants';

export const calculate = key => {
  return {
    type: types.SET_EXPRESSION,
    payload: key,
  };
};

export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION,
  };
};

export const square = () => {
  return {
    type: types.SQUARE,
  };
};

export const evaluateExpression = () => {
  return {
    type: types.EVALUATE_EXPRESSION,
  };
};
