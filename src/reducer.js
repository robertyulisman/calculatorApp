import * as types from './constants';

let initialState = {
  expression: '',
  total: 0,
  jumlah: 0,
  equal: false,
};

function setExpression({expression, total}, action) {
  if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    expression = expression.slice(0, expression.length - 1);
  }

  switch (action.type) {
    case types.SET_EXPRESSION:
      if (['+', '/', '*', '%'].includes(action.payload) && !expression) {
        return `${total}${action.payload}`;
      }
      return `${!expression && total ? total : ''}${expression +
        action.payload}`;
    default:
      return expression;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION:
      let expression = setExpression(state, action);

      return {
        ...state,
        expression,
        total: types.calculate(expression) || state.total,
        equal: true,
      };

    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: '',
        total:
          types.calculate(state.expression) || state.expression || state.total,
        jumlah: state.total,
        equal: false,
      };
    case types.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: 0,
        jumlah: 0,
      };
    case types.SQUARE:
      return {
        ...state,
        expression: '',
        total: state.expression * state.expression,
      };
    default:
      return state;
  }
};
