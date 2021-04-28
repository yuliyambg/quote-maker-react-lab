export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.payload];
    case "UPVOTE_QUOTE":
      return state.map((q) => {
        if (q.id == action.payload.id) {
          return { ...q, votes: q.votes + 1 };
        } else {
          return q;
        }
      });
    case "DOWNVOTE_QUOTE":
      return state.map((q) => {
        if (q.id == action.payload.id) {
          return { ...q, votes: q.votes - 1 };
        } else {
          return q;
        }
      });
    case "REMOVE_QUOTE":
      return state.filter((q) => q.id != action.payload.id);
    default:
      return state;
  }
};
