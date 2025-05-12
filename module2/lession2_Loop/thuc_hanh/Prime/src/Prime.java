import java.util.Scanner;
public class Prime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int number = scanner.nextInt();
        if(number < 2){
            System.out.println("Not Prime");
        }
        else{
            for (int i = 2; i <= number; i++){
                if(number % i == 0){
                    System.out.println(number + " is not Prime");
                    break;
                }
                else{
                    System.out.println(number + " is a prime");
                    break;
                }
            }
        }
    }
}
