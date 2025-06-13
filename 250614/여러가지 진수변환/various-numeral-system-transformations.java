import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); int b = sc.nextInt();
        int arr[] = new int[10];
        int count = 0;
        if(b==4) {
            while(true) {
                arr[count++] = n%4;
                n = n/4;
                if(n<4) {
                    arr[count++] = n%4;
                    break;
                }
            }
        }
        else {
            while(true) {
                arr[count++] = n%8;
                n = n/8;
                if(n<8) {
                    arr[count++] = n%8;
                    break;
                }
            }
        }
        for(int i = count-1; i>=0; i--) {
            System.out.print(arr[i]);
        }
    }
}