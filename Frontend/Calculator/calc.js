function Calculator(){
    // this.value = parseInt(value);
    this.mainDisplay = [];

    this.addValue = function(val){
        this.mainDisplay.push(val);
    }
    this.removeValue = function(){
        this.mainDisplay.pop();
    }
    this.checkDisplay = function(){
        return parseInt(this.mainDisplay.join(""));
    }
    this.handleClick = function(val){
        if(typeof val === "number"){
            this.addValue(val);
        }
        else{
            if(this.mainDisplay.length === 1){
                this.addValue(0);
                this.mainDisplay.shift();
            }
            else{
                this.removeValue();
            }
        }
    }
 
}

// function eventCallback(){
//     calculator.addValue(event.target.id);
//     var displayValue = calculator.checkDisplay();
//     $("mainDislplay").html(displayValue);
// }

// blehton.on("click", eventCallback);