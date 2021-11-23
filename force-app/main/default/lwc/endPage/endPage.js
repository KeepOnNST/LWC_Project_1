import { LightningElement, api, track} from 'lwc';

export default class EndPage extends LightningElement {
    @track backToStart = true;

    handleClick (event) {
        this.backToStart = false;
    }
}