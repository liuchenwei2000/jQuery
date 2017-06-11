$(document).ready(function () {

    $("#adult_sub").click(function () {
        var oldValue = parseInt($("#adult_number").val());
        var newValue = oldValue - 1;
        if (!isInRange(newValue, 1, 35)) {
            log("成人数需在1-35之间");
            return;
        }
        var childNumber = parseInt($("#child_number").val());
        if (!isInRange(childNumber + newValue, 1, 35)) {
            log("总人数不可大于35");
            return;
        }
        $("#adult_number").val(newValue);
        $("#adult_number").change();
    });

    $("#adult_add").click(function () {
        var oldValue = parseInt($("#adult_number").val());
        var newValue = oldValue + 1;
        if (!isInRange(newValue, 1, 35)) {
            log("成人数需在1-35之间");
            return;
        }
        var childNumber = parseInt($("#child_number").val());
        if (!isInRange(childNumber + newValue, 1, 35)) {
            log("总人数不可大于35");
            return;
        }
        $("#adult_number").val(newValue);
        $("#adult_number").change();
    });

    $("#child_sub").click(function () {
        var oldValue = parseInt($("#child_number").val());
        var newValue = oldValue - 1;
        if (!isInRange(newValue, 0, 35)) {
            log("儿童数需在0-35之间");
            return;
        }
        var adultNumber = parseInt($("#adult_number").val());
        if (!isInRange(adultNumber + newValue, 1, 35)) {
            log("总人数不可大于35");
            return;
        }
        $("#child_number").val(newValue);
        $("#child_number").change();
    });

    $("#child_add").click(function () {
        var oldValue = parseInt($("#child_number").val());
        var newValue = oldValue + 1;
        if (!isInRange(newValue, 0, 35)) {
            log("儿童数需在0-35之间");
            return;
        }
        var adultNumber = parseInt($("#adult_number").val());
        if (!isInRange(adultNumber + newValue, 1, 35)) {
            log("总人数不可大于35");
            return;
        }
        $("#child_number").val(newValue);
        $("#child_number").change();
    });

    $("#adult_number").change(onSpinnerChanged);
    $("#child_number").change(onSpinnerChanged);

    function onSpinnerChanged() {
        var adultNumber = parseInt($("#adult_number").val());
        var childNumber = parseInt($("#child_number").val());
        var totalNumber = adultNumber + childNumber;
        $("#total_number").text(totalNumber);
    }

    function isInRange(value, min, max) {
        return value >= min && value <= max;
    }

    function log(message){
        // $("#hint").text(message);
        alert(message);
    }
});