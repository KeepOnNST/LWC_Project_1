import { LightningElement, api, track } from 'lwc';
import getContactData from '@salesforce/apex/productTableShop.getContactData';
import giveContactData from '@salesforce/apex/productTableShop.giveContactData';


export default class BuyPage extends LightningElement {
    @api nameBuyingProduct;
    @api costBuyingProduct;
    @api quantityOfProduct;
    @track getContact;

    quantityWrite(event) {
        this.quantityOfProduct = event.currentTarget.value * this.costBuyingProduct;
    }
    getContact() {
        console.log('lol');
       /* getContactData()
            .then(result => {
                this.getContact = result;
                console.log('lol', result);
                
            })
            .catch(error => {
                this.error = error;
            });
        this.getContact.FirstName = document.getElementById("firstName").value;
        this.getContact.LastName = document.getElementById("lastName").value;
        this.getContact.Email = document.getElementById("email").value;
        console.log('lol', this.getContact);
        giveContactData ({
            givenContact : this.getContact
        }) */
    }
}
