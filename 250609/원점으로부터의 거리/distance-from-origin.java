import java.util.Scanner;
import java.util.Arrays;
class Dot implements Comparable<Dot> {
    int x, y, z;
    public Dot(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    public int compareTo(Dot dot) {
        if(((this.x-dot.x)+(this.y-dot.y))==0) {
            return this.z - dot.z;
        } 
        else if(this.x - dot.x < 0) {
            if(this.y - dot.y < 0) {
                return ((this.x-dot.x)*-1) + ((this.y-dot.y)*-1);
            }
            return ((this.x-dot.x)*-1) + this.y - dot.y;
        }
        return (this.x - dot.x) + (this.y - dot.y);
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Dot ddot[] = new Dot[n];
        int count = 1;
        for(int i = 0; i<n; i++) {
            int a = sc.nextInt(); int b = sc.nextInt(); int c = count++;
            ddot[i] = new Dot(a, b, c);
        }
        Arrays.sort(ddot);
        for(int i = 0; i<n; i++) {
            System.out.println(ddot[i].z);
        }
    }
}