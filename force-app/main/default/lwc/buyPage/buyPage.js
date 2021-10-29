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
    secondHandleClick () {
        console.log('lol');
        getContactData()
            .then(result => {
                this.getContact = result;
                //console.log('lol', result);
                
            })
            .catch(error => {
                this.error = error;
            });
        // let Contacts = this.template.querySelectorAll('div > lightning-input.contact').value;
        // console.log(this.Contacts);
        var Contact = this.getElementsByClassName('contact').value;
        console.log(this.Contact);
        /*this.getContact.FirstName = Contact[0];
        this.getContact.LastName = Contact[1];
        this.getContact.Email = Contact[2];
        console.log('lol2');
        giveContactData ({
            givenContact : this.getContact
        })*/
    }
    //handleClick () {console.log('lol');}
}
