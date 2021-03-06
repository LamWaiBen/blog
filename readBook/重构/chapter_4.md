# 构筑测试体系
编写优良的测试程序, 可以有保障地使重构正确进行.

## 自测试代码的价值
程序员开发程序期间, 其实只有少数时间在编码, 少数时间花在设计, 大多数时间花在调试/找BUG中.  
确保所有测试都完全自动化, 让它们自己检查自己的测试结果.  
测试驱动开发(TDD): 先编写一个测试, 编写代码是测试通过, 然后进行重构以保证代码整洁, "测试-编码-重构"的开发方式.

## 如何编写测试
- 使用Mocha测试框架, 主要要素有: describe, it, assert.equal
- 当有多个测试夹具(it)的时候, 可以使用beforeEach函数做每次测试之前的初始操作
- 一个it语句中最好只验证一个语句
- 考虑可能出错的边界条件, 测试中要囊括这些边界(尽管是有边界效应的).
- 每当收到bug报告, 应该先写一个单元测试来暴露这个bug.