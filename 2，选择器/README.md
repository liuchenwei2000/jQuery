## jQuery 选择器 ##

CSS 选择器用于找到对应的 HTML 元素，常用的 CSS 选择器如下：

选择器|描述|语法|示例
-------|----------|----------|----------
标签选择|以文档元素作为选择符| E { CSS 规则 }| td { width: 120px;}
ID 选择|以文档元素的 ID 作为选择符| #ID { CSS 规则 }| #note { width: 120px;}
类选择|以文档元素的 class 作为选择符| .className { CSS 规则 }| div.note { width: 120px;} .hl {color:red;}
后代选择|以元素的任意后代元素作为选择符| E F{ CSS 规则 }| #links a { color: red;}

jQuery 选择器完全继承了 CSS 的风格。利用 jQuery 选择器，可以非常便捷和快速地找出特定的 DOM 元素，然后为它们添加相应的行为，而无需担心浏览器是否支持这一选择器。
学会使用选择器是学习 jQuery 的基础，jQuery 的行为规则都必须在获取到元素后才能生效。
