var m = require('./math');

function circle(r) {
    return m.mulitipe(m.square(r),m.PI);
}

module.exports = {
    s_cricle:circle
}