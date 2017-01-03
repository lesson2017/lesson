package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : switch语句
 */

public class Demo2 {
    public static void main(String[] args){
        String today = "日";
        switch (today)
        {
            case "日":
                System.out.println("主席套餐");
                break;
            case "一":
            case "三":
            case "五":
                System.out.println("吃包子");
                break;
            case "二":
            case "四":
            case "六":
                System.out.println("吃油条");
                break;
        }
    }
}