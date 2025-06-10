import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(); int b = sc.nextInt(); int c = sc.nextInt(); int d = sc.nextInt();
        int hour = c-a;
        int min = d-b;
        int total = hour*60 + min;
        System.out.print(total);
    }
}