export default class Trade {
  constructor(id, type, traderid, amount, counterparty) {
    this.id = id;
    this.type = type;
    this.traderid = traderid;
    this.amount = amount;
    this.counterparty = counterparty;
  }
}
