function string (type) {
    return typeof type === 'string'
}
function number (type) {
    return typeof type === 'number'
}
function any (type) {
    return true;
}
function shape (type) {
    return type
}
module.exports = {string, number, any, shape};