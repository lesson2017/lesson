package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : 求 1 到 10 之间的所有偶数的和。知识点continue语句
 */

public class Demo5 {
    public static void main(String[] args)
    {
        int sum = 0;
        for(int i=1; i<=10; i++)
        {
            if(i % 2 == 0)
            {
                sum += i;
                System.out.println(i);
                continue;
            }
        }
        System.out.println(sum);
    }
}
