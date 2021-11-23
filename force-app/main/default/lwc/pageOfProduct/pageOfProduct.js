import { LightningElement, api, track } from 'lwc';
import getPersonalData from '@salesforce/apex/productTableShop.getPersonalData';

export default class PageOfProduct extends LightningElement {
    @api idOfTableProduct;
    @track changeOfMainButton;
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
                console.log('kek', this.detailProduct);
                
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

    secondHandleClick(event) {
        this.changeOfMainButton = true;
        const backButton = new CustomEvent('backmain',{detail:this.changeOfMainButton});
        this.dispatchEvent(backButton);
    }

    changeDetailButton(event) {
        this.secondButton = event.detail;
    } 
}