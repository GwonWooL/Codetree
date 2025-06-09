import java.util.Scanner;
import java.util.Arrays;
class Student implements Comparable<Student> {
    String name; int height, weight;
    public Student(String name, int height, int weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    public int compareTo(Student student) {
        if(this.height == student.height) {
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
            String a = sc.next(); int b = sc.nextInt(); int c = sc.nextInt();
            str[i] = new Student(a, b, c);
        }
        Arrays.sort(str);
        for(int i = 0; i<n; i++) {
            System.out.println(str[i].name+" "+str[i].height+" "+str[i].weight);
        }
    }
}