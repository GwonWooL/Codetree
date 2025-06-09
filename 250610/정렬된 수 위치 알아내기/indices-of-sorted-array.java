import java.util.Scanner;
import java.util.Arrays;
class Sequence implements Comparable<Sequence> {
    int origin, num;
    public Sequence(int origin, int num) {
        this.origin = origin;
        this.num = num;
    }
    public int compareTo(Sequence sequence) {
        if(this.origin != sequence.origin) {
            return this.origin - sequence.origin;
        }
        return this.num - sequence.num;
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Sequence str[] = new Sequence[n];
        for(int i = 0; i<n; i++) {
            int a = sc.nextInt();
            str[i] = new Sequence(a, i+1);
        }
        Arrays.sort(str);
        int arr[] = new int[n];
        for(int i = 0; i<n; i++) {
            arr[str[i].num-1] = i+1;
        }
        for(int i = 0; i<n; i++) {
            System.out.print(arr[i]+" ");
        }
    }
}