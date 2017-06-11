
$(document).ready(function () {

    $("#adult_number").makeSpinner({
        min: 1,
        max: 35,
        defaultValue: 1,
        name: "adult",
        alertPreffix: "成人数",
        validation: function (newValue) {
            var childNumber = parseInt($("#child_number").val());
            if (!$.isInRange(childNumber + newValue, 1, 35)) {
                $.log("总人数不可大于35");
                return false;
            }
            return true;
        }
    });

    $("#child_number").makeSpinner({
        min: 0,
        max: 35,
        defaultValue: 0,
        name: "child",
        alertPreffix: "儿童数",
        validation: function (newValue) {
            var adultNumber = parseInt($("#adult_number").val());
            if (!$.isInRange(adultNumber + newValue, 1, 35)) {
                $.log("总人数不可大于35");
                return false;
            }
        return true;
    }
    });

    $("#adult_number").change(onSpinnerChanged);
    $("#child_number").change(onSpinnerChanged);

    function onSpinnerChanged() {
        var adultNumber = parseInt($("#adult_number").val());
        var childNumber = parseInt($("#child_number").val());
        var totalNumber = adultNumber + childNumber;
        $("#total_number").text(totalNumber);
    }
});