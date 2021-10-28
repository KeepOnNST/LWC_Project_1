public without sharing class productTableShop {
    @AuraEnabled
    public static List<Product_Table__c> getData() {
        List<Product_Table__c> Products = [
            SELECT Cost__c, Image__c, Description__c, Name
            FROM Product_Table__c
            WHERE Available__c = true
        ];
        return Products;
        //console.log
    }
    @AuraEnabled
    public static Product_Table__c getPersonalData(string idOfDetailProduct) {
        Product_Table__c Product = [
            SELECT Cost__c, Image__c, Description__c, Name
            FROM Product_Table__c
            WHERE Id =: idOfDetailProduct
        ];
        return Product;
    }
    @AuraEnabled
    public static Contact getContactData () {
        Contact buyerContact = new Contact();
        return buyerContact;
    }
    @AuraEnabled
    public static Contact giveContactData (Contact givenContact) {
        insert givenContact;
        return givenContact;
    }
}
