/**
 * @author : by Ghost
 * @date : 2017/1/22
 * @description : Buffer�����ĸ��ƻ�������
 * */
var buf_a = Buffer("��ϲ�����");
var buf_b = Buffer(128);
console.log(buf_a);
console.log(buf_b);
console.log(buf_b.fill(0));
console.log(buf_a.copy(buf_b,10));
