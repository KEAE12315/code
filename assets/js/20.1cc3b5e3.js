(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{286:function(e,t,n){"use strict";n.r(t);var i=n(13),a=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"python中的数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python中的数据类型"}},[e._v("#")]),e._v(" Python中的数据类型")]),e._v(" "),t("ul",[t("li",[e._v("Numbers")]),e._v(" "),t("li",[e._v("String")]),e._v(" "),t("li",[e._v("List")]),e._v(" "),t("li",[e._v("Tuple")]),e._v(" "),t("li",[e._v("Set")]),e._v(" "),t("li",[e._v("Dictionary")])]),e._v(" "),t("p",[t("strong",[e._v("python中不可变数据类型的定义为")]),e._v(": 当该数据类型的对应变量的值发生了改变, 那么它对应的内存地址也会发生改变. 也就是说, 直接修改内存中的值, 并没有开辟新的内存. 反之就为可变类型.")]),e._v(" "),t("p",[e._v("不可变数据类型: numbers, string, tuple"),t("br"),e._v("\n可变数据类型: list, set, dictionary")]),e._v(" "),t("h2",{attrs:{id:"对变量进行分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对变量进行分析"}},[e._v("#")]),e._v(" 对变量进行分析")]),e._v(" "),t("p",[e._v("id(): 获取对象的内存地址."),t("br"),e._v("\ntype(): 当只有一个参数的时候, 返回对象的类型. 当有三个参数的时候返回一个类对象."),t("br"),e._v("\n==: 值比较."),t("br"),e._v("\nis: 比较两个对象的物理id, 相当于 id(a)==id(b).")]),e._v(" "),t("h2",{attrs:{id:"其它需要注意的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它需要注意的"}},[e._v("#")]),e._v(" 其它需要注意的")]),e._v(" "),t("p",[e._v("Python出于对性能的考虑, 但凡是不可变对象, 在同一个代码块中的对象, 只有是值相同的对象, 就不会重复创建, 而是直接引用已经存在的对象.")]),e._v(" "),t("p",[t("strong",[e._v("Integer object pool")]),e._v(": This pool holds numbers of PyIntObjects which has been allocated already but not initialized (no valid value or type). Even though there is only one integer object pool. This pool is divided into 2 parts, small integers and big integers. Big integers are exactly the case mentioned above, where PyIntObject is used as a container for the integer and even integers having the same value have their own PyIntObject.")]),e._v(" "),t("p",[t("strong",[e._v("String Interning in Python")]),e._v(": The string interning in Python is a mechanism of storing only one copy of a string value in the memory. If there are a few string variables whose values are the same, they will be interned by Python implicitly and refer to the same object in the memory.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>> x, y = 100, 40000\n>>> id(2 * x + y) == id(300 + x)\nTrue\n>>> 2 * x + y, 300 + x\n(40200, 400)\n")])])]),t("p",[e._v("The two expressions 2 * x + y and 300 + x don't have overlapping lifetimes. That means that Python can calculate the left hand side, take its id, and then free the integer before it calculates the right hand side. When CPython frees an integer it puts it on a list of freed integers and then re-uses it for a different integer the next time it needs one. So your ids match even when the result of the calculations are very different:")]),e._v(" "),t("blockquote",[t("p",[e._v("参考资料")]),e._v(" "),t("ul",[t("li",[e._v("https://zhuanlan.zhihu.com/p/68577036及评论")]),e._v(" "),t("li",[e._v("https://stackoverflow.com/questions/6101379/what-happens-behind-the-scenes-when-python-adds-small-ints")]),e._v(" "),t("li",[t("strong",[e._v("https://davejingtian.org/2014/12/11/python-internals-integer-object-pool-pyintobject/")])]),e._v(" "),t("li",[e._v("https://medium.com/techtofreedom/string-interning-in-python-a-hidden-gem-that-makes-your-code-faster-9be71c7a5f3e")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);