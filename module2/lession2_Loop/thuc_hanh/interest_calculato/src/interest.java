import java.util.Scanner;
public class interest {
    public static void main(String[] args) {
    double money = 1.0;
    double interestRate = 1.0;
    int month = 1;
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter the amount of money:");
    money = scanner.nextDouble();

    System.out.print("Enter number of months:");
    month = scanner.nextInt();

    System.out.print("Enter annual interest rate in percentage:");
    money = scanner.nextDouble();

    double total = 0;
    for (int i = 0; i < month; i++) {
        total += money * (interestRate/100)/ 12 * month;
    }
    System.out.println("Total amount after " + month + " months is " + total);
    }
}