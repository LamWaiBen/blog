/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (35.19%)
 * Total Accepted:    347.1K
 * Total Submissions: 983.8K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // let i = 0
    // if(m === 0){
    //     while (n--) {
    //         nums1[n] = nums2[n]
    //     }
    //     return
    // }

    // while (m > 0 && n > 0) {
    //     console.log(m, n, nums1, nums2)
    //     if(nums2[n - 1] <= nums1[m - 1]){
    //         let t = nums1[m + n - 1]
    //         nums1[m + n - 1] = nums1[m - 1]
    //         nums1[m - 1] = t
    //         m--
            
    //         if (m === 0 || nums2[n - 1] >= nums1[m - 1]){
    //             nums1[m + n - 1] = nums2[n - 1]
    //             n--
    //         }else{

    //         }

    //     }else{
    //         nums1[m + n - 1] = nums2[--n]
    //     }
    // }

    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    
    while ((i >= 0 && j >=0 )) {
        if((nums1[i] > nums2[j])){
            nums1[k--] = nums1[i--]
        }else{
            nums1[k--] = nums2[j--]
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }

};

