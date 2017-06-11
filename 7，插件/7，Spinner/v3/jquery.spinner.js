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

    var Spinner = function (element,options){
        this.$textField = element;
        this.settings = $.extend({}, defaults, options);
    };

    Spinner.prototype = {
        create:function(){
            var $textField = this.$textField;
            var settings = this.settings;

            $textField.attr("disabled", "disabled");
            $textField.val(this.settings.defaultValue);
            $textField.before("<button id='" + this.settings.name + "_sub'>-</button>");
            $textField.after("<button id='" + this.settings.name + "_add'>+</button>");

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
            return this;
        }
    };

    $.fn.makeSpinner = function (options) {
        var spinner = new Spinner(this,options);
        return spinner.create();
    };
})(jQuery);