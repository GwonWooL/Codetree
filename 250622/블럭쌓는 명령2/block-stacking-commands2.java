import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); int k = sc.nextInt();
        int arr[] = new int[101];
        for(int i = 0; i<101; i++) {
            arr[i] = 0;
        }
        for(int i = 0; i<k; i++) {
            int a = sc.nextInt(); int b = sc.nextInt();
            for(int j = a-1; j<=b-1; j++) {
                arr[j] += 1;
            }
        }
        int max = 0;
        for(int i = 0; i<101; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.print(max);
    }
}