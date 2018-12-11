# node.js-Study

node.js   为撒换成node.js 来写接口   单线程 异步。

1.node调用函数
2.node 调用其他模块学习   这有点想面向对象里面的  类 跟对象的概念
---------User.js 文件跟Teacher.文件
3. 路由初步     
	什么是路由 ？
路由就是路径  ，在里面可以对url进行操作的。
----------Router.js跟/modules里面的 router.js文件 
4.文件的读取   同步读取 异步读取  异步必须要  闭包的写法过去 （跟iOS的block一样）
5.文件的写入  用法跟 读取差不多  这样的话 就可以用node.js 写脚本啦。然后写入文件  （可以直接写脚本抓取数据  在对应后台接口给 同步到数据库里面去）。
----------ctrl.js 结合 write.html跟one.html文件 

6.读取显示图片  
----------参照EditImg.js  设置 res.writeHeader设置为 image/jpeg 如果 res.write任何文字 就报错了 怎么解决呢？ 下一节  路由优化

7.路由改造
----------参照routerHtml.js  进入 routerHtml.js 里面先截取路径 ，在获取 文字跟图片同时返回给前端显示，这里闭包里面的写法还是可以。

8.异常处理
----------同步捕获，异步捕获 。  同步就是 try catch，异步这个地方 就在方法里面 本来是返回 data 异常的时候 返回一个错误的字符串。 另外一种 异步来 捕获 直接 用throw  来抛出去，跑过去 catch的erro 还有很多种情况用flag  参照 Throw.js

9.参数接收
----------get方式接收参  参照paramsGet.js
