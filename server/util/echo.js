/**
 * Created by hejie2.0
 * Coding love on 2017/4/9.
 */
function echo () {

    this.success = function (data) {
        return {
            code : 1,
            data: data,
            msg : null
        }
    };
    this.error = function (data, msg) {
        return {
            code: 0,
            data: data,
            msg: msg
        }
    };
    this.info = function (code, data, msg) {
        return {
            code: code,
            data: data,
            msg: msg
        }
    }
}
module.exports = new echo();