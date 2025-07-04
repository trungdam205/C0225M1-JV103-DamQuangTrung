package util;

public class Validator {
    public static boolean isValidPhone(String phone) {
        return phone.matches("0[0-9]{9}");
    }
    public static boolean isValidEmail(String email) {
        return email.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$");
    }
    public static boolean isValidDate(String date) {
        // Định dạng dd/mm/yyyy, ngày/tháng hợp lệ
        return date.matches("^([0][1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}$");
    }
    public static boolean isNotEmpty(String s) {
        return s != null && !s.trim().isEmpty();
    }

}