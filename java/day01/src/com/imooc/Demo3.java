package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : switch���
 */

public class Demo3 {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0; // ���� 1-50 ֮��ż���ĺ�
        int num = 2; // ���� 1-50 ֮���ż��
        do {
            //ʵ���ۼ����
            i++;
            if(i % 2 == 0)
            {
                sum += i;
            }
            num = num + 2; // ÿִ��һ�ν���ֵ��2���Խ����´�ѭ�������ж�
            System.out.println(num);
        } while ( i < 50 ); // ������ֵ�� 1-50 ֮��ʱ�ظ�ִ��ѭ��
        System.out.println(sum);
    }
}
