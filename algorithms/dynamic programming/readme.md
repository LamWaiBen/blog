# 动态规划


# 特性

## 最优子结构
    最优子结构: 大问题的最优解可以由小问题的最优解退出 

## 无后效性
    无后效性: "未来与过去无关", 某个阶段的状态之后的发展过程不受这个阶段以前的各个状态影响

## 状态转移方程
    状态转移方程: 描述当前状态与过去状态之间的关系的方程

## 重叠子问题
    使用缓存, 消除重叠子问题, 可以提供效率


# 设计步骤

## 循序渐进
递归的暴力解法 -> 带缓存的递归解法 -> 非递归的动态规划解法

## 步骤:
1. 根据问题的特性, 找到变化规律(本质)
2. 根据变化规律, 设计状态转移方程
3. 设置base case
4. 根据状态转移方程中变量的关系, 设计代码
    1. 根据状态转移方程和base case, 确定dp数组的遍历方向(如何朝最终值遍历)

# 相关题目
1. [最长上升子序列](../LIS.js)
2. [最长回文子串](../../leetcode/5.longest-palindromic-substring.js)
3. [正则表达式匹配](../../leetcode/10.regular-expression-matching.js)
4. [最长合法符号](../../leetcode/32.longest-valid-parentheses.js)
5. [路径题]
    - [最多有多少种不同的路线] (../../leetcode/62.unique-paths.js)
    - [有障碍物时最多有多少种不同的路线] (../../leetcode/63.unique-paths-ii.js)
    - [耗时最少路线] (../../leetcode/64.minimum-path-sum.js)

# 参考
[动态规划套路详解](https://zhuanlan.zhihu.com/p/78220312)
[动态规划答疑](https://mp.weixin.qq.com/s/qvlfyKBiXVX7CCwWFR-XKg)