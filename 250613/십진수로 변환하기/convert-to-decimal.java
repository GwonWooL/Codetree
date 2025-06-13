import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String str = String.valueOf(n);
        char arr[] = str.toCharArray();
        int a = arr.length; int sum = 0; int b = 1;
        for(int i = a-1; i>=0; i--) {
            if(arr[i] == '1') {
                sum += 1*b;
            }
            else {
                sum += 0*b;
            }
            b *= 2;
        }
        System.out.print(sum);
    }
}