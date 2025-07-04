package model;

public class Contact {
    private String phoneNumber;
    private String group;
    private String name;
    private String gender;
    private String address;
    private String birthday;
    private String email;

    public Contact(String phoneNumber, String group, String name, String gender, String address, String birthday, String email) {
        this.phoneNumber = phoneNumber;
        this.group = group;
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.birthday = birthday;
        this.email = email;
    }

    public String getPhoneNumber() { return phoneNumber; }
    public void setGroup(String group) { this.group = group; }
    public void setName(String name) { this.name = name; }
    public void setGender(String gender) { this.gender = gender; }
    public void setAddress(String address) { this.address = address; }
    public void setBirthday(String birthday) { this.birthday = birthday; }
    public void setEmail(String email) { this.email = email; }

    public String toCSV() {
        return String.join(",", phoneNumber, group, name, gender, address, birthday, email);
    }

    @Override
    public String toString() {
        return String.format("SDT: %s | Nhóm: %s | Tên: %s | Giới tính: %s | Địa chỉ: %s | Sinh nhật: %s | Email: %s",
                phoneNumber, group, name, gender, address, birthday, email);
    }
}