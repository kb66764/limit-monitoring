// API Users static class
export default class ApiLogin {

  // login
  static userLogin() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }
}
