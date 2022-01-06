export const setProjects = (data: Array<{}>) => ({
  type: "STORE_DATA",
  payload: data,
});

export const createAuth = (data: { email: string; accessToken: string }) => {
  return {
    type: "CREATE_AUTH",
    payload: data,
  };
};
