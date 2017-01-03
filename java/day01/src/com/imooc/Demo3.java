package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : switch语句
 */

public class Demo3 {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0; // 保存 1-50 之间偶数的和
        int num = 2; // 代表 1-50 之间的偶数
        do {
            //实现累加求和
            i++;
            if(i % 2 == 0)
            {
                sum += i;
            }
            num = num + 2; // 每执行一次将数值加2，以进行下次循环条件判断
            System.out.println(num);
        } while ( i < 50 ); // 满足数值在 1-50 之间时重复执行循环
        System.out.println(sum);
    }
}
