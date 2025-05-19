public class Main {
    public static void main(String[] args) {
        Student.change();
        Student s1 = new Student(111, "Hoang");
        Student s2 = new Student(222, "Minh");
        Student s3 = new Student(333, "Nguyen");

        s1.display();
        s2.display();
        s3.display();
    }
}