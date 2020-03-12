export const SET_EXPRESSION = 'SET_EXPRESSION';
export const CLEAR_EXPRESSION = 'CLEAR_EXPRESSION';
export const EVALUATE_EXPRESSION = 'EVALUATE_EXPRESSION';
export const DELETE_LAST_EXPRESSION_ENTRY = 'DELETE_LAST_EXPRESSION_ENTRY';
export const SQUARE = 'SQUARE';
export const SQUARE_ROOT = 'SQUARE_ROOT';

export const button = [
  ['7', '4', '1', 'c'],
  ['8', '5', '2', '0'],
  ['9', '6', '3', '.'],
  ['/', '*', '+', '-', '='],
];
export const calculate = expression => {
  const matched = new RegExp(
    '([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*',
  ).exec(expression);

  if (!matched) {
    return 0;
  }

  if (/^[*+\/]/.test(expression)) {
    return () => {
      throw new Error('Cannot start the expression with invalid operators');
    };
  }

  return new Function(`return ${matched[0]}`)();
};
