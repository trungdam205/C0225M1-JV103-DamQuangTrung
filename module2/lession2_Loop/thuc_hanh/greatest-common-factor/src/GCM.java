import java.util.Scanner;
public class GCM {
    public static void main(String[] args) {
    int a,b;
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the first number:");
    a = scanner.nextInt();
    System.out.print("Enter the second number:");
    b = scanner.nextInt();

    a = Math.abs(a);
    b = Math.abs(b);

    if(a == 0 || b == 0){
        System.out.println("No GCM");
    }

    while(a != b){
        if(a > b){
            a = a - b;
        }
        else{
            b = b - a;
        }
    }
    System.out.println("The GCM is " + a);

    }
}