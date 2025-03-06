import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = "";
    numberTwo = "";
    result = 0;

    addHandler(event){
        this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
    }

    subHandler(event){
        this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
    }

    mulHandler(event){
        this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
    }

    divHandler(event){
        this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
    }

    changeHandlerNumberOne(event){
        this.numberOne = event.target.value;
    }

    changeHandlerNumberTwo(event){
        this.numberTwo = event.target.value;
    }
}
