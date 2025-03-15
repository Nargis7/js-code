const accountId = 14453
let accountEmail = "nargis@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;

// accountId = 2 not allowed
accountEmail = "hc@.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var coz of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


