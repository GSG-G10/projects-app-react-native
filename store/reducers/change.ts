export const changeReducer = (
  state: boolean = false,
  action: { type: string }
) => {
  if (action.type === "CHANGE") {
    return !state;
  }
  return state;
};
