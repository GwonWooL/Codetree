import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(); int b = sc.nextInt(); int c = sc.nextInt();
        int total = 0;
        if(a==11&&b<11 || a==11&&b<=11||c<11) {
            System.out.print(-1);
        }
        else {
        int min = c-11;
        int hout = (b - 11)*60;
        int day = (a -11)*24*60;
        total = day + hout + min;
        System.out.print(total);
        }
    }
}