//node module working syntax
var PI = 3.142;
function add(a,b) {
    return a+b;
}
function sub (a,b) {
    return a-b;
}
// must export for using in other places
module.exports = { add, PI };