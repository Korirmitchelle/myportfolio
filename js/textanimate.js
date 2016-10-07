var animateText = function (target, message, index, interval) {
    if (index < message.length) {

        $(target).append(message[index++]);
        /* keep adding letters till last one*/
        setTimeout(function () {
            animateText(target, message, index, interval);
        }, interval);
    }
}


$(function () {
    animateText("#intromessage", "Hi,My name is Mitchelle. Welcome to my world!", 0, 100);
});
