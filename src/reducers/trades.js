// trades reducer
export default function trades(state = {}, action) {
  switch (action.type) {
    case 'TRADES_LIST_SAVE':
      return action.trades;

    case 'TRADES_ADD_SAVE':
      const trade = action.trade;
      trade.id = trade.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, trade];

    case 'TRADES_EDIT_SAVE':
      return state.map(trade =>
        Number(trade.id) === Number(action.trade.id) ? {...action.trade} : trade
      );
      break;

    // initial state
    default:
      return state;
  }
}
