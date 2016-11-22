// desks reducer
export default function desks(state = {}, action) {
  switch (action.type) {
    case 'DESKS_LIST_SAVE':
      return action.desks;

    case 'DESKS_ADD_SAVE':
      const desk = action.desk;
      desk.id = desk.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, desk];

    case 'DESKS_EDIT_SAVE':
      return state.map(desk =>
        Number(desk.id) === Number(action.desk.id) ? {...action.desk} : desk
      );
      break;

    // initial state
    default:
      return state;
  }
}
