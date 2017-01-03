package com.imooc;
import java.util.Scanner;   //导入Scanner(扫描仪；扫描器；光电子扫描装置)包

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description :
 * 1、导入Scanner类实现，用户输入三个班每班四个学生的成绩，并计算这个班的平均成绩
 */
public class Demo8 {
    public static void main(String[] args) {
        //声明变量
        int classNum = 3; //班级数
        int studentNum = 4; //学生数

        for (int i = 1; i <= classNum; i++) {
            int sum = 0; //学生总成绩
            double avg = 0; //班级平均成绩

            System.out.println("请输入第"+ i +"班学生的成绩：");
            for (int j = 1; j <= studentNum; j++) {
                System.out.println("请输入第"+ j +"个学生的成绩");
                Scanner input = new Scanner(System.in); //创建对象
                sum += input.nextInt(); //获取用户输入的学生成绩
            }
            //计算并输出平均值
            avg = sum / studentNum;
            System.out.println("第"+ i +"个班的平均成绩是"+ avg +"分");
        }

    }
}
