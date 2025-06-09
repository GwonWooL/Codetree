import java.util.Scanner;
import java.util.Arrays;
import java.util.Comparator;
class Student {
    String name; int height;  double weight;
    public Student(String name, int height, double weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student str[] = new Student[5];
        for(int i = 0; i<5; i++) {
            String a = sc.next();  int b = sc.nextInt(); double c = sc.nextDouble();
            str[i] = new Student(a, b, c);
        }
        Arrays.sort(str, new Comparator<Student>() {
            public int compare(Student a, Student b) {
                return a.name.compareTo(b.name);
            }
        });
        System.out.println("name");
        for(int i = 0; i<5; i++) {
            System.out.print(str[i].name+" "+str[i].height+" ");
            System.out.printf("%.1f\n", str[i].weight);
        }
        Arrays.sort(str, new Comparator<Student>() {
            public int compare(Student a, Student b) {
                return b.height-a.height;
            }
        });
        System.out.println();
        System.out.println("height");
        for(int i = 0; i<5; i++) {
            System.out.print(str[i].name+" "+str[i].height+" ");
            System.out.printf("%.1f\n", str[i].weight);
        }

    }
}