
export class Calculator{
    constructor(prevoiusTextElement,currentTextElement){
        this.prevoiusTextElement = prevoiusTextElement;
        this.currentTextElement = currentTextElement;
        this.delete();
    }
    delete(){
        this.currentOp = '';
        this.prevoiusOP = '';
        this.operation = undefined;
        this.prevoiusTextElement.textContent = "Wellcome.."
        this.currentTextElement.textContent = "0.0"

    }
    Clear(){
        this.currentOp = this.currentOp.toString().slice(0,-1);
    }
    appendNumber(number){
        if(number === "." && this.currentOp.includes(".") ) return;
        this.currentOp = this.currentOp.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOp === "") return
        if(this.prevoiusOP !== ""){
            this.compute();
        }
        this.operation = operation;
        console.log(operation);
        this.prevoiusOP = this.currentOp;
        this.currentOp = "";

    }

    compute(){
        let result;
        const prev = Number(this.prevoiusOP);
        const curr = Number(this.currentOp);
        if(isNaN(prev) || isNaN(curr)){
            return
        }
        switch (this.operation) {
            case '+':
                result = prev + curr;
                break;
            case "-":
                result = prev - curr;
                break;    
            case "*":
                result = prev * curr;
                break;
            case "÷":
                result = prev / curr;
                break;            
            default:
                return;
        }
        console.log(result);
        this.currentOp = result;
        this.operation = undefined;
        this.prevoiusOP = '';
    }

    updateDisplay(){
        this.currentTextElement.textContent = this.currentOp;
        if(this.operation != null){
            this.prevoiusTextElement.textContent = `${this.prevoiusOP} ${this.operation} ${this.currentOp}`;
        }
    }
}



