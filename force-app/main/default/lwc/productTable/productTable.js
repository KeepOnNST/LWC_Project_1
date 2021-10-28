import { LightningElement, api, track } from 'lwc';
import getContactList from '@salesforce/apex/productTableShop.getData';


export default class ProductTable extends LightningElement {
    @track listOfProduct;
    @track idOfProduct;
    @track button = true;
    connectedCallback() {
        getContactList()
            .then(result => {
                this.listOfProduct = result;
                console.log(result);
                
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
        console.log(this.idOfProduct);
    }
}
