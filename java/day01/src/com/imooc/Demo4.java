package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : 循环将 1 到 10 之间的整数相加，如果累加值大于 20，则跳出循环，并输出当前的累加值。
 */
public class Demo4 {
    public static void main(String[] args){
        int sum = 0;
        for(int i=1;i<=10;i++)
        {
            sum += i;
            if(sum>20)
            {
                System.out.println(sum);
                break;
            }
        }
    }
}
