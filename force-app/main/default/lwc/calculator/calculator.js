import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberOne = "";
    numberTwo = "";
    result = 0;

    // addHandler(event){
    //     this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
    // }

    // subHandler(event){
    //     this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
    // }

    // mulHandler(event){
    //     this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
    // }

    // divHandler(event){
    //     this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
    // }

    calculateInput(event){
        let labelElement = event.target.label;
        if(labelElement === 'ADD'){
            this.result = parseInt(this.numberOne) + parseInt(this.numberTwo);
        }
        else if(labelElement === 'SUB'){
            this.result = parseInt(this.numberOne) - parseInt(this.numberTwo);
        }
        else if(labelElement === 'MUL'){
            this.result = parseInt(this.numberOne) * parseInt(this.numberTwo);
        }
        else if(labelElement === 'DIV'){
            this.result = parseInt(this.numberOne) / parseInt(this.numberTwo);
        }
        
    }

    // changeHandlerNumberOne(event){
    //     this.numberOne = event.target.value;
    // }

    // changeHandlerNumberTwo(event){
    //     this.numberTwo = event.target.value;
    // }

    changeHandler(event){
        let name = event.target.name;
        let value = event.target.value;
        if(name === 'number1'){
            this.numberOne = value;
        }
        else if(name === 'number2'){
            this.numberTwo = value;
        }
    }

}
