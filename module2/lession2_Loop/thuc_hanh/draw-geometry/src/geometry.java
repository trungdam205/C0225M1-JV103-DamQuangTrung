import java.util.Scanner;
public class geometry {
    public static void main(String[] args) {
        int choice = -1;
        Scanner input = new Scanner(System.in);
        System.out.println("-Menu-");
        System.out.println("1. Triangle");
        System.out.println("2. Square");
        System.out.println("3. Rectengle");
        System.out.println("4. Exit");
        System.out.print("Enter your choice: ");
        choice = input.nextInt();
        switch(choice){
            case 1:
                for(int i = 0; i < 5; i++) {
                    for (int j = 0; j <= i; j++) {
                        System.out.print(" * ");
                    }
                    System.out.println();
                }
                break;
            case 2:
                for (int i = 0; i < 5; i++) {
                    for (int j = 0; j < 5; j++) {
                        System.out.print(" * ");
                    }
                    System.out.println();
                }
                break;
            case 3:
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 5; j++) {
                        System.out.print(" * ");
                    }
                    System.out.println();
                }
                break;
            case 0:
                System.exit(0);
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}