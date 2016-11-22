import Utils from "../common/utils";
import Trader from "./objects/trader"
import ApiDesks from "./desks";
// API Traders static class
export default class ApiTraders {
  // get a list of traders
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy traders list
        let traders = [];
        for (let x = 1; x <= 15; x++) {
          //mapping trader to a desk id.
          let deskid = x % 5 + 1;

          traders.push(
            new Trader(
              x,
              'Trader ' + x,
              deskid,
              Utils.getRandomIntInclusive(5, 20) * 100));
        }
        resolve(traders);
      }, 1000);
    });
  }

  // add/edit a trader
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }
}
