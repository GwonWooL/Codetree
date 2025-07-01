class A {
    public void fn() {
        System.out.println("A");
    }
}
class B extends A {
    public void fn() {
        super.fn();
                super.fn();
        System.out.println("B");
    }
}
public class Soojebi {
    public static void main(String[] args) {
        A a = new b();
        a.fn();
    }
}