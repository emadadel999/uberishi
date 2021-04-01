export const getAuthState = () => {
  try {
    const serializedUserData = localStorage.getItem("authState");
    if (!serializedUserData) return undefined;
    return JSON.parse(serializedUserData);
  } catch (error) {
    console.error(error);
  }
};

export const setAuthState = (authState) => {
  try {
    const serializedUserData = JSON.stringify(authState);
    localStorage.setItem("authState", serializedUserData);
  } catch (error) {
    console.error(error);
  }
};
