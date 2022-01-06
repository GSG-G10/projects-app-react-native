type State = {
  accessToken: string;
  email: string;
};
type action = {
  type: string;
  payload: State;
};

export const authReducer = (state: any = null, action: action) => {
  switch (action.type) {
    case "CREATE_AUTH":
      return action.payload;
    default:
      return state;
  }
};
