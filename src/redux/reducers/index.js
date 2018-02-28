const defaultState = {
  questions: [],
  name: '',
  pageId: 1,
  score: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, name: action.payload };
    case 'PAGE':
      return { ...state, pageId: action.payload };
    case 'SCORE':
      return { ...state, score: action.payload };
    default: return state;
  }
};

export default reducer;
