import Utils from "../common/utils";
import Desk from "./objects/desk"
// API desks static class
export default class ApiDesks {
  // get a list of desks
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy desks list
        let desks = [];
        for (let x = 1; x <= 5; x++) {
          desks.push(new Desk(
            x,
            'Desk ' + x,
            Utils.getRandomIntInclusive(5, 20)*1000));
        }
        resolve(desks);
      }, 1000);
    });
  }

  // add/edit a desk
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }
}
