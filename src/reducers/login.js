export default function login(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      console.log("USER_LOGIN " +action.role);
      return {role : action.role,
        traderid: action.traderid,
      };

    // initial state
    default:
      return state;
  }
}
