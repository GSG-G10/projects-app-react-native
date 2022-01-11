type State = {
  accessToken: string;
  email: string;
  photoURL: string;
};
type action = {
  type: string;
  payload: State;
};

export const authReducer = (state: any = null, action: action) => {
  switch (action.type) {
    case "CREATE_AUTH":
      return action.payload;
    case "CLEAR_AUTH": 
    return null
    default:
      return state;
  }
};
