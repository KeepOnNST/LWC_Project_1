import { LightningElement, api, track } from 'lwc';
import getContactData from '@salesforce/apex/productTableShop.getContactData';


export default class BuyPage extends LightningElement {
    @api nameBuyingProduct;
    @api costBuyingProduct;
    @api quantityOfProduct;
    @api changeOfDetailButton;
    @track getContact = {};
    @track FirstNameContact;
    @track LastNameContact;
    @track EmailContact;
    @track button = true;

    quantityWrite(event) {
        this.quantityOfProduct = event.currentTarget.value * this.costBuyingProduct;
    }
    secondHandleClick () {
        console.log('lol');
        this.FirstNameContact = this.template.querySelector('.firstName').value;
        this.LastNameContact = this.template.querySelector('.lastName').value;
        this.EmailContact = this.template.querySelector('.emailOfContact').value;
        console.log('lol2', this.FirstNameContact);
        console.log('lol2', this.LastNameContact);
        console.log('lol2', this.EmailContact);
        getContactData({
            Namelol : this.FirstNameContact, 
            surName : this.LastNameContact,
            contactEmail : this.EmailContact
        })
            .then(result => {
                this.getContact = result;
                console.log('lol22', result);
                console.log('lol3',this.getContact);
                
            })
            .catch(error => {
                this.error = error;
                console.log('error', error);
            });
            console.log('lol4');
            this.button = false;
        //let Contacts = this.getElementsByClassName('contact').value;//this.template.querySelectorAll('div > lightning-input.contact').value;
        // console.log(this.Contacts);
        //this.Contact = this.template.querySelectorAll('div > lightning-input.contact'); //this.getElementsByClassName('contact').value;
        /*console.log(this.Contact);
        this.getContact.FirstName = Contact[0];
        this.getContact.LastName = Contact[1];
        this.getContact.Email = Contact[2];
        console.log('lol5');
        giveContactData ({
            givenContact : this.getContact
        }) */
    }
    handleClick (event) {
        this.changeOfDetailButton = true;
        const backButton = new CustomEvent('backdetail',{detail:this.changeOfDetailButton});
        this.dispatchEvent(backButton);
    } 
}
