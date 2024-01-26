const accountId = 1232
let accountEmail = "Gaurav.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

// accountId = 2 //not allowed
// Prefer not to use var
// because of issue in block scope and functional scope

console.log(accountEmail);
accountEmail = "kalbhut@gmail.com"
accountPassword = "67890"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

