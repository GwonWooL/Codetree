import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        int lng = str.length();
        int num = 1; int total = 0;
        for(int i = lng-1; i>=0; i--) {
            total += num*(str.charAt(i)-'0');
            num *= 2;
        }
        System.out.print(total);
    }
}