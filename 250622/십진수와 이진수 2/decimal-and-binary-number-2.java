import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String str = String.valueOf(n);
        char arr[] = str.toCharArray();
        int sum = 0; int num = 1;
        for(int i = arr.length-1; i>=0; i--) {
            if(arr[i]=='0') {
                sum = sum + (num*0);
            }
            else {
                sum = sum + num;
            }
            num = num*2;
        }
        int result = sum * 17;
        int count = 0;
        int arr1[] = new int[20];
        while(true) {
            if(result<2) {
                arr1[count++] = result;
                break;
            }
            arr1[count++] = result % 2;
            result /= 2;
        }
        for(int i = count-1; i>=0; i--) {
            System.out.print(arr1[i]);
        }
    }
}