package service;

import model.Contact;
import util.Validator;

import java.io.*;
import java.util.*;

public class ContactManager {
    private List<Contact> contacts = new ArrayList<>();
    private Scanner sc = new Scanner(System.in);

    public void showAll() {
        for (int i = 0; i < contacts.size(); i++) {
            System.out.println(contacts.get(i));
            if ((i + 1) % 5 == 0 && i != contacts.size() - 1) {
                System.out.print("Nhấn Enter để tiếp tục...");
                sc.nextLine();
            }
        }
    }

    public void addContact() {
        String phone;
        while (true) {
            System.out.print("Nhập SDT: ");
            phone = sc.nextLine();
            if (findByPhone(phone) != null) {
                System.out.println("Số điện thoại đã tồn tại! Vui lòng nhập lại.");
                continue;
            }
            if (Validator.isValidPhone(phone)) break;
            System.out.println("SDT không hợp lệ! Vui lòng nhập lại.");
        }

        String group;
        while (true) {
            System.out.print("Nhóm: ");
            group = sc.nextLine();
            if (Validator.isNotEmpty(group)) break;
            System.out.println("Nhóm không được để trống! Vui lòng nhập lại.");
        }

        String name;
        while (true) {
            System.out.print("Họ tên: ");
            name = sc.nextLine();
            if (Validator.isNotEmpty(name)) break;
            System.out.println("Họ tên không được để trống! Vui lòng nhập lại.");
        }

        String gender;
        while (true) {
            System.out.print("Giới tính: ");
            gender = sc.nextLine();
            if (Validator.isNotEmpty(gender)) break;
            System.out.println("Giới tính không được để trống! Vui lòng nhập lại.");
        }

        String address;
        while (true) {
            System.out.print("Địa chỉ: ");
            address = sc.nextLine();
            if (Validator.isNotEmpty(address)) break;
            System.out.println("Địa chỉ không được để trống! Vui lòng nhập lại.");
        }

        String birthday;
        while (true) {
            System.out.print("Ngày sinh (dd/mm/yyyy): ");
            birthday = sc.nextLine();
            if (Validator.isValidDate(birthday)) break;
            System.out.println("Ngày sinh không hợp lệ! Vui lòng nhập lại.");
        }

        String email;
        while (true) {
            System.out.print("Email: ");
            email = sc.nextLine();
            if (Validator.isValidEmail(email)) break;
            System.out.println("Email không hợp lệ! Vui lòng nhập lại.");
        }

        contacts.add(new Contact(phone, group, name, gender, address, birthday, email));
        System.out.println("Thêm thành công!");
    }


    public void updateContact() {
        System.out.print("Nhập SDT cần cập nhật: ");
        String phone = sc.nextLine();
        Contact c = findByPhone(phone);
        if (c == null) {
            System.out.println("Không tìm thấy!"); return;
        }
        String group;
        while (true) {
            System.out.print("Nhóm mới: ");
            group = sc.nextLine();
            if (Validator.isNotEmpty(group)) break;
            System.out.println("Nhóm không được để trống! Vui lòng nhập lại.");
        }

        String name;
        while (true) {
            System.out.print("Tên mới: ");
            name = sc.nextLine();
            if (Validator.isNotEmpty(name)) break;
            System.out.println("Họ tên không được để trống! Vui lòng nhập lại.");
        }

        String gender;
        while (true) {
            System.out.print("Giới tính mới: ");
            gender = sc.nextLine();
            if (Validator.isNotEmpty(gender)) break;
            System.out.println("Giới tính không được để trống! Vui lòng nhập lại.");
        }

        String address;
        while (true) {
            System.out.print("Địa chỉ mới: ");
            address = sc.nextLine();
            if (Validator.isNotEmpty(address)) break;
            System.out.println("Địa chỉ không được để trống! Vui lòng nhập lại.");
        }

        String birthday;
        while (true) {
            System.out.print("Sinh nhật mới (dd/mm/yyyy): ");
            birthday = sc.nextLine();
            if (Validator.isValidDate(birthday)) break;
            System.out.println("Ngày sinh không hợp lệ! Vui lòng nhập lại.");
        }

        String email;
        while (true) {
            System.out.print("Email mới: ");
            email = sc.nextLine();
            if (Validator.isValidEmail(email)) break;
            System.out.println("Email không hợp lệ! Vui lòng nhập lại.");
        }

        c.setGroup(group);
        c.setName(name);
        c.setGender(gender);
        c.setAddress(address);
        c.setBirthday(birthday);
        c.setEmail(email);
        System.out.println("✔ Cập nhật thành công!");
    }

    public void deleteContact() {
        System.out.print("Nhập SDT cần xóa: ");
        String phone = sc.nextLine();
        Contact c = findByPhone(phone);
        if (c == null) {
            System.out.println("Không tìm thấy!"); return;
        }
        System.out.print("Xác nhận xóa (Y/N)? ");
        if (sc.nextLine().equalsIgnoreCase("Y")) {
            contacts.remove(c);
            System.out.println("Đã xoá!");
        }
    }

    public void searchContact() {
        System.out.print("Tìm theo SDT hoặc tên: ");
        String keyword = sc.nextLine().toLowerCase();
        for (Contact c : contacts) {
            if (c.toString().toLowerCase().contains(keyword)) {
                System.out.println(c);
            }
        }
    }

    public void readFromCSV(String path) {
        System.out.print("Xác nhận xóa toàn bộ danh bạ và tải từ file (Y/N)? ");
        if (!sc.nextLine().equalsIgnoreCase("Y")) return;
        contacts.clear();
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                if (data.length == 7)
                    contacts.add(new Contact(data[0], data[1], data[2], data[3], data[4], data[5], data[6]));
            }
            System.out.println("Đọc file thành công!");
        } catch (IOException e) {
            System.out.println("Lỗi đọc file!");
        }
    }

    public void writeToCSV(String path) {
        System.out.print("Xác nhận ghi toàn bộ danh bạ vào file (Y/N)? ");
        if (!sc.nextLine().equalsIgnoreCase("Y")) return;
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(path))) {
            for (Contact c : contacts) {
                bw.write(c.toCSV());
                bw.newLine();
            }
            System.out.println("Ghi file thành công!");
        } catch (IOException e) {
            System.out.println("Lỗi ghi file!");
        }
    }

    private Contact findByPhone(String phone) {
        for (Contact c : contacts) {
            if (c.getPhoneNumber().equals(phone)) return c;
        }
        return null;
    }
}