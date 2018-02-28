export const dispatchSaveAction = note => ({
  type: 'LOGIN',
  payload: note,
});

export const dispatchPageAction = pageNum => ({
  type: 'PAGE',
  payload: pageNum,
});

export const dispatchScoreAction = score => ({
  type: 'SCORE',
  payload: score,
});

