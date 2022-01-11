export const setProjects = (data: Array<{}>) => ({
  type: "STORE_DATA",
  payload: data,
});

export const createAuth = (data: { email: string; displayName : string; photoURL: string; }) => {
  return {
    type: "CREATE_AUTH",
    payload: data,
  };
};
