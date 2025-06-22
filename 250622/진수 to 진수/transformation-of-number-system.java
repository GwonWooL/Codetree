import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(); int b = sc.nextInt(); 
        int n = sc.nextInt();
        String str = String.valueOf(n); 
        char arr[] = str.toCharArray();
        int sum = 0; int num = 1;
        for(int i = arr.length-1; i>=0; i--) {
            sum = sum + ((arr[i]-'0') *num);
            num *= a;
        }  
        int result = sum;
        int arr1[] = new int[20];
        int count = 0;
        while(true) {
            if(result < b) {
                arr1[count++] = result;
                break;
            }
            arr1[count++] =  result % b;
            result /= b;
        }
        for(int i = count-1; i>=0; i--) {
            System.out.print(arr1[i]);
        }
    }
}