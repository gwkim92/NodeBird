export const initialState = {
  IsLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

export default (state = initialState, action) => {
    switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        IsLoggedIn: true,
        user: action.data,
      };
    };
    case "LOG_OUT": {
      return {
        ...state,
        IsLoggedIn: false,
        user: null,
      };
    }
    default:
      return state;
  }
};
