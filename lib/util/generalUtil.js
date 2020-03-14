exports.isEmpty = function (str) {
    return str == null || "" == this.trim(str.toString());
};

exports.isNotEmpty = function (str) {
    return !this.isEmpty(str);
};

exports.trim = function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
};