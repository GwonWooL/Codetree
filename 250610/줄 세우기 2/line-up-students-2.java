import java.util.Scanner;
import java.util.Arrays;
class Student implements Comparable<Student> {
    int height; int weight; int num;
    public Student(int height, int weight, int num) {
        this.height = height;
        this.weight = weight;
        this.num = num;
    }
    public int compareTo(Student student) {
        if(this.height==student.height) {
            return student.weight - this.weight;
        }
        return this.height - student.height;
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Student str[] = new Student[n];
        for(int i = 0; i<n; i++) {
            int a = sc.nextInt(); int b = sc.nextInt();
            str[i] = new Student(a, b, i+1);
        }
        Arrays.sort(str);
        for(int i = 0; i<n; i++) {
            System.out.println(str[i].height+" "+str[i].weight+" "+ str[i].num);
        }
    }
}