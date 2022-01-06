type action = {
  type: string;
  payload: Array<{}>;
};

export const projectsReducer = (state: Array<{}> = [], action: action) => {
  switch (action.type) {
    case "STORE_DATA":
      return action.payload;
    default:
      return state;
  }
};
