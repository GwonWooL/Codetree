import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m1 = sc.nextInt(); int d1 = sc.nextInt();
        int m2 = sc.nextInt(); int d2 = sc.nextInt();
        int str[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int sum = 0; int total = 0; int day = 0;
        if(m2 == m1+1) {
            day = str[m1] - d1 + d2+1;
            total = day;
        }
        else if(m1==m2) {
            total = d2-d1+1;
        }
        else {
            for(int i = m1+1; i<m2; i++) {
                sum+=str[i];
            }
            day = str[m1]-d1 + d2+1;
            total = day + sum;
        }
        System.out.print(total);
    }
}