import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[21];
        for(int i = 0; i<21; i++) {
            arr[i] = 0;
        }
        int number = 10;
        for(int i = 0; i<n; i++) {
            int num = sc.nextInt(); char chr = sc.next().charAt(0);
            if(chr =='L'&& num <=number) {
                for(int j = number-num; j<number; j++) {
                    arr[j] += 1;
                }
                number = number - num;
            }
            else {
                for(int j = number; j<number + num; j++) {
                    arr[j] += 1;
                }
                number = number + num;
            }
        }
        int count = 0;
        for(int i = 0; i<21; i++) {
            if(arr[i] >= 2) {
                count++;
            }
        }
        System.out.print(count);
    }
}