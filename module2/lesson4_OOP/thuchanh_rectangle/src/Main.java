import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the width of the rectangle: ");
        double width = scanner.nextDouble();
        System.out.println("Enter the height of the rectangle: ");
        double height = scanner.nextDouble();
        Rectangle rectangle = new Rectangle(width, height);
        System.out.println("Your rectangle is: " + rectangle.display());
        System.out.println("Perimeter of the rectangle is: " + rectangle.getPerimeter());
        System.out.println("Area of the rectangle is: " + rectangle.getArea());
    }
}