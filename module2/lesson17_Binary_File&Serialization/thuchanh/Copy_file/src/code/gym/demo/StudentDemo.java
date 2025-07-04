package code.gym.vn;

import java.io.*;

public class StudentDemo {
    public static void main(String[] args) {
        try {
            // Step 1: Write a student to file
            Student student = new Student("Alice", 20);
            writeStudent(student);

            // Step 2: Read student from file
            Student std = readStudent();
            System.out.println(std);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    private static void writeStudent(Student student) throws IOException {
        ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("output.dat"));
        oos.writeObject(student);
        oos.close();
    }

    public static Student readStudent() throws IOException, ClassNotFoundException {
        ObjectInputStream ois = new ObjectInputStream(new FileInputStream("output.dat"));
        Student student = (Student) ois.readObject();
        ois.close();
        return student;
    }
}
