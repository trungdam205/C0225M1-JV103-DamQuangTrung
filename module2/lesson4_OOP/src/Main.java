public class Main {
    public static void main(String[] args) {
        // Tạo đối tượng bằng constructor đầy đủ
        Employee emp1 = new Employee(101, "Alice", "Manager", 5000.0, "2022-03-15", "Sales");

        // Tạo đối tượng bằng constructor 2 tham số
        Employee emp2 = new Employee("Bob", "Developer");
        emp2.setId(102);
        emp2.setSalary(3500.0);
        emp2.setHireDate("2023-01-10");
        emp2.setDepartment("IT");

        // Tạo đối tượng bằng constructor không tham số
        Employee emp3 = new Employee();
        emp3.setId(103);
        emp3.setName("Charlie");
        emp3.setPosition("Tester");
        emp3.setSalary(3000.0);
        emp3.setHireDate("2021-07-20");
        emp3.setDepartment("QA");

        // Hiển thị thông tin nhân viên
        System.out.println("===== Employee 1 =====");
        emp1.displayInfo();
        System.out.println("Bonus: " + emp1.calculateBonus(0.1));
        emp1.raiseSalary(0.05);
        System.out.println("New Salary: " + emp1.getSalary());
        System.out.println("Is Manager? " + emp1.isManager());

        System.out.println("\n===== Employee 2 =====");
        emp2.displayInfo();
        System.out.println("Bonus: " + emp2.calculateBonus(0.08));
        emp2.raiseSalary(0.1);
        System.out.println("New Salary: " + emp2.getSalary());
        System.out.println("Is Manager? " + emp2.isManager());

        System.out.println("\n===== Employee 3 =====");
        emp3.displayInfo();
        System.out.println("Bonus: " + emp3.calculateBonus(0.07));
        emp3.raiseSalary(0.02);
        System.out.println("New Salary: " + emp3.getSalary());
        System.out.println("Is Manager? " + emp3.isManager());
    }
}
