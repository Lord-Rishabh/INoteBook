
// we didn't add paranthesis because then fucntion will start running now.
//module.exports is same as exports.
exports.getTarik = getDate;
module.exports.getDay = function () {

    const today = new Date();       
    const option = {
        weekday: "long",
    }
    const day = today.toLocaleDateString("en-UK" , option);
    return day;
};

function getDate() {

    const today = new Date();
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    const day = today.toLocaleDateString("en-UK" , option);
    return day;
}

