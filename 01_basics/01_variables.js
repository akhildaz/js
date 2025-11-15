const accountId = 1235
let accountEmail = "akhil@google.com"
var accountPassword = "5321"
accountCity = "Mumbai"
let accountState;

// accountId = 7; variables declared with const cant be modified once declared

accountEmail = "karan@amazon.com"
accountPassword = "75321"
accountCity = "Jaipur"

// prefer not to use var, because of the issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
