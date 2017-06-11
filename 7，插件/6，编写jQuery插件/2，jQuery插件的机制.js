/**
 * jQuery 提供了两个用于扩展 jQuery 功能的方法，即 jQuery.fn.extend() 方法和 jQuery.extend() 方法。
 * 前者用于扩展 README.md 中提到的 3 种类型的插件中的第一种，后者用于扩展后两种插件。
 */

// jQuery.extend() 方法除了可以用于扩展 jQuery 对象之外，还可以用于扩展已有的 Object 对象。

var settings = {name: "foo", limit: 5, validate: true};
var options = {name: "bar", validate: false};
// 用一个或多个其他对象来扩展一个对象，然后返回被扩展的对象
var newOptions = jQuery.extend({}, settings, options);
// 结果为 newOptions = {name: "bar", limit: 5, validate: false};

// jQuery.extend() 方法常被用于设置插件方法的一系列默认参数，如下：
// 此时，对方法的调用依旧保持一致，只不过要传入的是一个映射而不是一个参数列表。
function foo(options) {
    // 默认参数
    var defaults = {name: "foo", length: 5, datatype: "xml"};
    // 将默认参数与实际参数合并，可以很方便地用传入的参数来覆盖默认值
    options = jQuery.extend({}, defaults, options);
}
