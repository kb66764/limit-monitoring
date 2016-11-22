// traders reducer
export default function traders(state = {}, action) {
  switch (action.type) {
    case 'TRADERS_LIST_SAVE':
      return action.traders;

    case 'TRADERS_ADD_SAVE':
      const trader = action.trader;
      trader.id = trader.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, trader];

    case 'TRADERS_EDIT_SAVE':
      return state.map(trader =>
        Number(trader.id) === Number(action.trader.id) ? {...action.trader} : trader
      );
      break;

    // initial state
    default:
      return state;
  }
}
