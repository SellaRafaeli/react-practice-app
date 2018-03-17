export default {
// fetching data from "server"
  getFriendsList: function () {
      return fetch('/data/friends.json');
    }
}