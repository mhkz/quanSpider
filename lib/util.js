class Base {
    constructor (){
        this.data = null;
        this.status = null;
    }
}

/**
 * @class SuccessModel
 * @param message
 * @param data
 */
class SuccessModel extends Base {
    constructor (status, data){
        super();
        this.status = status;
        this.data = data;
    }
}

class ErrorModel extends Base {
    constructor (status, data) {
        super();
        this.status = status;
        this.data = data;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}