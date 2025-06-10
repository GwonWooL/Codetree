import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m1 = sc.nextInt(); int d1 = sc.nextInt(); int m2 = sc.nextInt(); int d2 = sc.nextInt();
        int arr[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int day = 0; int total= 0; int sum = 0;
        String str[] = {"Mon", "Thu", "Wed", "Thr", "Fri", "Sat", "Sun"};
        if(m2==m1) {
            day = d2 - d1;
            total = day;
            sum = (total % 7 + 7) % 7;
            System.out.print(str[sum]);
        }
        else if(m2 == m1+1) {
            day = arr[m1]-d1 + 1 + d2;
            total = day;
            sum = (total % 7 + 7) % 7;
            System.out.print(str[sum]);
        }

        else {  
            int sum1 = 0;
            for(int i = m1+1; i<m2; i++) {
                sum1 += arr[i];
            }
            day = arr[m1]-d1 + 1 + d2;
            total = day;
            sum = (total % 7 + 7) % 7;
            System.out.print(str[sum]);
        }
    }
}