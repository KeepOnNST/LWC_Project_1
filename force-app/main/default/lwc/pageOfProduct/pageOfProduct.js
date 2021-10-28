import { LightningElement, api, track } from 'lwc';
import getPersonalData from '@salesforce/apex/productTableShop.getPersonalData';

export default class PageOfProduct extends LightningElement {
    @api idOfTableProduct;
    @api button;
    @track secondButton = true;
    @track detailProduct = {};
    @track nameOfProduct;
    @track costOfProduct;
    connectedCallback() {
        console.log(this.idOfTableProduct);
        getPersonalData({
            idOfDetailProduct : this.idOfTableProduct
        })
            .then(result => {
                console.log('lol', result);
                this.detailProduct = result;
                console.log(this.detailProduct);
                
            })
            .catch(error => {
                this.error = error;
            });
    }

    handleClick(event) {
        this.secondButton = false;
        this.nameOfProduct = event.currentTarget.dataset.name;
        this.costOfProduct = event.currentTarget.dataset.cost;
    }

    secondHandleClick() {
        this.button = true;
    }
}