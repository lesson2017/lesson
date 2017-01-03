package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description :
 * 1、打印一个3*8的长方形
 * 2、打印一个直角三角形
 * 3、打印一个数字的位数
 */
public class Demo6 {
    public static void main(String[] args)
    {
        for(int i=0;i<3;i++)
        {
            String star = "";
            for(int j=0;j<8;j++)
            {
                star += "*";
            }
            System.out.println(star);

        }
        Demo6_2();
        Demo6_3(); //打印一个三角形
        Demo6_4();  //打印数字位数
        Demo6_5();
    }

    public static void Demo6_2()
    {
        System.out.println("-------------------我是美丽的分割线--------------------");
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<8;j++)
            {
                System.out.print('*');
            }
            System.out.println();   //每次一行执行完毕后进行换行
        }
    }

    public static void Demo6_3()
    {
        System.out.println("-------------------我是美丽的分割线--------------------");
        for(int i=1;i<=3;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print('*');
            }
            System.out.println();   //每次一行执行完毕后进行换行
        }
    }

    public static void Demo6_4()
    {
        System.out.println("-------------------我是美丽的分割线--------------------");
        int num = 999;
        int count = 0;
        while(num>0)
        {
            num = num/10;
            count++;
        }
        System.out.println("它是个"+ count +"位的数！");
    }

    public static void Demo6_5()
    {
        System.out.println("-------------------我是美丽的分割线--------------------");
        // 变量保存成绩
        int score = 53;

        // 变量保存加分次数
        int count = 0;

        //打印输出加分前成绩
        System.out.println(score);

        // 只要成绩小于60，就循环执行加分操作，每次加一分，直到加够60为止，并统计加分次数
        while (score < 60)
        {
            score++;
            count++;
        }

        //打印输出加分后成绩，以及加分次数
        System.out.println(score);
        System.out.println(count);
    }
}
