package com.imooc;
import java.util.Scanner;   //导入Scanner类

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description :
 * 1、导入Scanner类实现用户输入分数，如果不够60则进行增加每次加1，并记录增加了多少次
 */
public class Demo7 {
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in); //创建scanner对象
        System.out.println("请输入考试成绩信息："); //提示用户输入
        int score = input.nextInt(); //存储用户输入
        System.out.println("考试成绩："+score);
        int count = 0;
        while (score < 60){
            score++;
            count++;
        }
        System.out.println("加分后的成绩："+score);
        System.out.println("加分次数："+count);
    }
}
