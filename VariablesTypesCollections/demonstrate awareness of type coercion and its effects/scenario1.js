function processScore(obj, passScore) {
    if (String(obj.score) > -1) {
        if (obj.score > passScore) {
            obj.pass = true;
        }
        else {
            obj.pass = false;
        }
    }
};