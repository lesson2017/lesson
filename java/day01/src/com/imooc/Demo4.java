package com.imooc;

/**
 * @author : by Ghsot
 * @date : 2016/12/30
 * @plan : 1/30
 * @description : ѭ���� 1 �� 10 ֮���������ӣ�����ۼ�ֵ���� 20��������ѭ�����������ǰ���ۼ�ֵ��
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
