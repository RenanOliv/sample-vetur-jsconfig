export default {
  /**
   * @method Returns a user
   * @param {Number} userID - The id of the user
   */
  get(userID) {
    return new Promise((resolve, reject) => {
      setInterval(_ => resolve(), 1000);
    });
  }
};
