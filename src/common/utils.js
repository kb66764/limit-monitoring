export default class Utils {

  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getTradedAmount(trades, traderid) {
    let amount = 0;
    if (trades.length > 0) {
      amount = trades.filter(t=> t.traderid == traderid).reduce((sum, obj) => {return sum + obj.amount}, 0);
    }

    return amount;
  }
}
