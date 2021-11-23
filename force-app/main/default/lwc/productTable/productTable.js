import { LightningElement, api, track } from 'lwc';
import getContactList from '@salesforce/apex/productTableShop.getData';


export default class ProductTable extends LightningElement {
    @track listOfProduct;
    @track changeDescriptionLength;
    @track idOfProduct;
    @track idToChangeDescription;
    @track button = true;
    connectedCallback() {
        getContactList()
            .then(result => {
                this.listOfProduct = result;
                console.log(result);
                console.log(this.listOfProduct);
                for (var i=0; i<this.listOfProduct.length; i++) {
                    this.listOfProduct[i].shortDescription = this.listOfProduct[i].Description__c.substr(0,99);
                    this.listOfProduct[i].showLongDescription = false;
                    if (this.listOfProduct[i].Description__c.length > 99) {
                        this.listOfProduct[i].shortDescription += '...'; 
                    } 
                }
                
            })
            .catch(error => {
                this.error = error;
            });
    }
    
    handleClick(event) {
        console.log(event, '1');
        console.log(event.currentTarget.dataset, '2');
        console.log(event.currentTarget.dataset.id, '3');
        this.idOfProduct = event.currentTarget.dataset.id;
        this.button = false;
        console.log(this.idOfProduct, 'lol1');
    }

    changeMainButton(event) {
        this.button = event.detail;
    }

    showFullDescription(event) {
        console.log(event.currentTarget.dataset.id);
        console.log(this.listOfProduct.length);
        //console.log(event);
        if (!event || !event.currentTarget || !event.currentTarget.dataset || !event.currentTarget.dataset.id) {
            console.log('showFullDescription undefined custom');
            return;
        }

        for (var i=0; i<this.listOfProduct.length; i++) {
            if (this.listOfProduct[i].Id == event.currentTarget.dataset.id) {
                    this.listOfProduct[i].showLongDescription = true;
                    console.log(this.listOfProduct[i].showLongDescription);
            }
        }
    }

    showShortDescription(event) {
        for (var i=0; i<this.listOfProduct.length; i++) {
            if (this.listOfProduct[i].Id == event.currentTarget.dataset.id) {
                    this.listOfProduct[i].showLongDescription = false;
            }
        }
    }

}
