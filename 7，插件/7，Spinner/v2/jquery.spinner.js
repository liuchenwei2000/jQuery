/**
 * Created by liuchenwei on 2017/6/6.
 */
$.extend({
    log: function (message) {
        alert(message);
    },
    isInRange: function (value, min, max) {
        return value >= min && value <= max;
    }
});

(function ($) {
    $.fn.spinner = function (options) {
        var defaults = {
            min: 0,
            max: 10,
            defaultValue: 1,
            name: "spinner",
            alertPreffix: "alert",
            validation: function (newValue) {
                return true;
            }
        };
        var settings = $.extend({}, defaults, options);

        var $textField = this;

        $textField.attr("disabled", "disabled");
        $textField.val(settings.defaultValue);
        $textField.before("<button id='" + settings.name + "_sub'>-</button>");
        $textField.after("<button id='" + settings.name + "_add'>+</button>");

        $("#" + settings.name + "_sub").click(onSpinnerClick("-"));
        $("#" + settings.name + "_add").click(onSpinnerClick("+"));

        function onSpinnerClick(type) {
            return function () {
                var oldValue = parseInt($textField.val());
                var newValue = ("+" == type) ? oldValue + 1 : oldValue - 1;
                if (!$.isInRange(newValue, settings.min, settings.max)) {
                    $.log(settings.alertPreffix + "需在" + settings.min + "-" + settings.max + "之间");
                    return;
                }
                if (settings.validation(newValue)) {
                    $textField.val(newValue);
                    $textField.change();
                }
            };
        }
    };
})(jQuery);
