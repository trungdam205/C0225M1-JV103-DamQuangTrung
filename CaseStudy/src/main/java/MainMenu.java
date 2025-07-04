import manager.MenuManager;
import model.MenuItem;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        MenuManager menuManager = new MenuManager();
        Scanner scanner = new Scanner(System.in);
        int choice;

        while (true) {
            System.out.println("\n=== QUẢN LÝ MENU COFFEE SHOP ===");
            System.out.println("1. Thêm món");
            System.out.println("2. Xem menu");
            System.out.println("3. Sửa món");
            System.out.println("4. Xóa món");
            System.out.println("0. Thoát");
            System.out.print("Chọn: ");
            choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    System.out.print("Tên món: ");
                    String name = scanner.nextLine();
                    System.out.print("Giá: ");
                    double price = Double.parseDouble(scanner.nextLine());
                    menuManager.addMenuItem(name, price);
                    System.out.println("Đã thêm món!");
                    break;
                case 2:
                    System.out.println("--- MENU ---");
                    for (MenuItem item : menuManager.getMenu()) {
                        System.out.printf("%d - %s: %.2f\n", item.getId(), item.getName(), item.getPrice());
                    }
                    break;
                case 3:
                    System.out.print("Nhập ID món muốn sửa: ");
                    int editId = Integer.parseInt(scanner.nextLine());
                    MenuItem editItem = menuManager.findById(editId);
                    if (editItem != null) {
                        System.out.print("Tên mới: ");
                        editItem.setName(scanner.nextLine());
                        System.out.print("Giá mới: ");
                        editItem.setPrice(Double.parseDouble(scanner.nextLine()));
                        System.out.println("Đã cập nhật!");
                    } else {
                        System.out.println("Không tìm thấy món!");
                    }
                    break;
                case 4:
                    System.out.print("Nhập ID món muốn xóa: ");
                    int delId = Integer.parseInt(scanner.nextLine());
                    MenuItem delItem = menuManager.findById(delId);
                    if (delItem != null) {
                        menuManager.removeMenuItem(delItem);
                        System.out.println("Đã xóa!");
                    } else {
                        System.out.println("Không tìm thấy món!");
                    }
                    break;
                case 0:
                    System.out.println("Tạm biệt!");
                    return;
                default:
                    System.out.println("Lựa chọn không hợp lệ!");
            }
        }
    }
}