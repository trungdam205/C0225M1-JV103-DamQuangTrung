public class Main {
    public static void main(String[] args) {
        Car c1 = new Car("BMW", "i8");
        System.out.println(Car.getNumberOfCars());
        Car c2 = new Car("Honda", "Civic");
        System.out.println(Car.getNumberOfCars());
        Car c3 = new Car("Toyota", "Camry");
        System.out.println(Car.getNumberOfCars());
    }
}