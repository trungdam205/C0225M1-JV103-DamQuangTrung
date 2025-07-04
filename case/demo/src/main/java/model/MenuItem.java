package model;

public class CafeMenuItem extends Item {
    private double itemPrice;

    public CafeMenuItem() {}

    public CafeMenuItem(int itemID, String itemName, double itemPrice) {
        super(itemID, itemName);
        this.itemPrice = itemPrice;
    }

    public double getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(double itemPrice) {
        this.itemPrice = itemPrice;
    }
}