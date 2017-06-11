/**
 * 这是一个封装 jQuery 对象方法的插件，用于设置和获取颜色。
 */

;(function ($) {
    $.fn.extend({
        color: function (value) {// 如果调用方法时传递了 value 就用它来设置颜色，否则就是获取颜色
            if (value == undefined) {
                return this.css("color");
            } else {
                return this.css("color", value);
            }
        }
    });
})(jQuery);
