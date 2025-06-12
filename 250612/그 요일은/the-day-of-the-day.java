import java.util.Scanner;
public class Main {
    public static int num(int m, int d) {
        int arr[] = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int totalday = 0; int sum = 0;
        for(int i = 1; i<m; i++) {
            sum += arr[i];
        }
        return totalday = sum + d;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m1 = sc.nextInt(); int d1 = sc.nextInt(); int m2 = sc.nextInt(); int d2 = sc.nextInt();
        String a = sc.next();
        String str[] = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
        int total = num(m2, d2) - num(m1, d1);
        int day = 0;
        for(int i = 0; i<7; i++) {
            if(a == str[i]) {
                day = i;
            }
        }
        int count = 0;
        for(int i = day; i<=total; i+=7) {
            if(i <= total) {
                count++;
            }
        }
        System.out.print(count);
    }
}