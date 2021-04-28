// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return { type: "ADD_QUOTE", payload: quote };
};

export const upvoteQuote = (quote) => {
  return { type: "UPVOTE_QUOTE", payload: quote };
};

export const downvoteQuote = (quote) => {
  return { type: "DOWNVOTE_QUOTE", payload: quote };
};

export const removeQuote = (quote) => {
  return { type: "REMOVE_QUOTE", payload: quote };
};
