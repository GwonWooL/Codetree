import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[101];
        for(int i = 0; i<101; i++) {
            arr[i] = 0;
        }
        for(int i = 0; i<n; i++) {
            int a = sc.nextInt(); int b = sc.nextInt();
            for(int j = a; j<=b; j++) {
                arr[j] += 1;
            }
        }
        int max = 0; 
        for(int i = 0; i<101; i++) {
            if(max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.print(max);
    }
}