/**
 * 这是一个封装全局函数的插件，这类插件很简单，只是普通的函数。
 * 本例新增两个函数，用于去除左侧和右侧的空格。
 */

;(function ($) {
    $.extend({
        ltrim: function (value) {// 去除左侧空格
            return (value || "").replace(/^\s+/g, "");
        },
        rtrim: function (value) {// 去除右侧空格
            return (value || "").replace(/\s+$/g, "");
        }
    });
})(jQuery);
