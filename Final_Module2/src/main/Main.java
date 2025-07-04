package main;
import service.ContactManager;
import java.util.Scanner;

public class Main {
    public static final Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        ContactManager cm = new ContactManager();
        while (true) {
            System.out.println("\n===== MENU =====");
            System.out.println("1. Xem danh sách");
            System.out.println("2. Thêm mới");
            System.out.println("3. Cập nhật");
            System.out.println("4. Xóa");
            System.out.println("5. Tìm kiếm");
            System.out.println("6. Đọc từ file");
            System.out.println("7. Lưu vào file");
            System.out.println("0. Thoát");
            System.out.print("Chọn: ");
            switch (sc.nextLine()) {
                case "1": cm.showAll(); break;
                case "2": cm.addContact(); break;
                case "3": cm.updateContact(); break;
                case "4": cm.deleteContact(); break;
                case "5": cm.searchContact(); break;
                case "6": cm.readFromCSV("data/contacts.csv"); break;
                case "7": cm.writeToCSV("data/contacts.csv"); break;
                case "0":
                    System.out.println("Thoát chương trình.");
                    sc.close();
                    return;
                default: System.out.println("Sai lựa chọn!");
            }
        }
    }
}