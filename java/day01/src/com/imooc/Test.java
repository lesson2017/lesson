package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : 第一个包里面的程序
 */

public class Test {
    public static void main(String[] args)
    {
        final char SEX_1 = '男';
        final char SEX_2 = '女';
        System.out.println(SEX_1);
        System.out.println(SEX_2);

        int one = 10 ;
        int two = 20 ;
        int three = 0 ;

        three = one + two; //10+20
        System.out.println(three);
        three += one; //40
        System.out.println(three);
        three -= one;
        System.out.println(three);
        three *= one;
        System.out.println(three);
        three /= one;
        System.out.println(three);
        three %= one;
        System.out.println(three);

        boolean a = true; // a同意
        boolean b = false; // b反对
        boolean c = false; // c反对
        boolean d = true; // d同意
        System.out.println((a && b) + "未通过");
        System.out.println((a || d) + "通过");
        System.out.println((!a) + "未通过");
        System.out.println((c ^ d) + "通过");
    }
}