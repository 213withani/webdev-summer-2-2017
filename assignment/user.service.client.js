(function() {
    angular
        .module("WampApp")
        .factory("userService",userService);

    function userService() {
        var users = [
            { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
            { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
        ]; 
    
        var api = {
            "findUserByUsernameAndPassword":findUserByUsernameAndPassword,
            "findUserById":findUserById
        };
        return api;

        function findUserById(userId) {
            for (var u in users) {
                //type coercion between number and string
                if (users[u]._id == userId) {
                    return users[u];
                }
            }
            return null;
        }
 
        function findUserByUsernameAndPassword(username,password) {
            for (var u in users) {
                var _user = users[u];

                if (_user.username === username && _user.password === password) {
                    alert(_user.username);
                    return _user;
                }
            }
            return null;
        }
    }
})();