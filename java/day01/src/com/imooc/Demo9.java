package com.imooc;

import java.util.Arrays;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description :
 * 1、数组操作 - 变量数组
 * 2、任务要求：
        1、 定义一个整型数组，并赋初值 61, 23, 4, 74, 13, 148, 20
        2、 定义变量分别保存最大值、最小值、累加值和平均值，并假设数组中的第一个元素既为最大值又为最小值
        3、 使用 for 循环遍历数组中的元素，分别与假定的最大值和最小值比较。如果比假定的最大值要大，则替换当前的最大值；如果比假定的最小值要小，则替换当前的最小值
        4、 循环执行过程中对数组中的元素进行累加求和
        5、 循环结束根据累加值计算平均值，并打印输出相关内容

    3、foreach遍历数组语法for(数据类型 自定义元素变量:数组对象){
        do something;
    };

    4、二维数组
 */
public class Demo9 {
    public static void main(String[] args) {
        // 定义一个长度为 3 的字符串数组，并赋值初始值
        String[] hobbys = { "sports", "game", "movie" };
        System.out.println("循环输出数组中元素的值：");
        for (int i = 0; i < hobbys.length; i++) {
            System.out.println(hobbys[i]);
        }
        Demo9_2();
        Demo9_3();
        Demo9_4();
    }

    //数组操作
    public static void Demo9_2() {
        int[] nums = new int[] {61, 23, 4, 74, 13, 148, 20}; //定义数组并初始化
        int max = nums[0]; //存储最大值,假定数组第一个元素为最大值
        int min = nums[0]; //存储最小值,假定数组第一个元素为最小值
        int sum = 0; //存储累加值
        double avg = 0; //存储平均值

        //遍历数组
        for (int i = 0; i < nums.length; i++) {
            //求最大值
            if(nums[i] > max)
            {
                max = nums[i];
            }

            //求最小值
            if(nums[i] < min)
            {
                min = nums[i];
            }

            //求累加值
            sum += nums[i];

            //求平均值
            avg = sum / nums.length;
        }

        System.out.println("最大值："+max);
        System.out.println("最小值："+min);
        System.out.println("累加值："+sum);
        System.out.println("平均值："+avg);
    }

    public static void Demo9_3() {
        // 定义一个整型数组，保存成绩信息
        int[] scores = { 89, 72, 64, 58, 93 };

        // 对Arrays类对数组进行排序
        Arrays.sort(scores);

        // 使用foreach遍历输出数组中的元素
        for (int score:scores) {
            System.out.println(score);
        }
    }

    public static void Demo9_4() {
        //定义二维数组
        int[][] num = {{1,2,3},{4,5,6}};

        //遍历输出
        for (int i = 0; i < num.length; i++) {
            for (int j = 0; j < num[i].length ; j++) {
                System.out.print(num[i][j]+" ");
            }
            System.out.println();
        }
    }
}
