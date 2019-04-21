function PageRenderer() {
var calculator = new Calculator();
    this.renderAll = function () {
        $("#main-container").addClass("mainContainer").append($(this.renderField())).append($(this.renderWrapper()));
    var that = this;
        $("button").on("click", function(event){
            var cli = event.target.innerText;
            console.log(cli);
    
           that.calculator.addValue(cli);
           var displayValue = that.calculator.checkDisplay();
           $("#field").html(displayValue)


        });



    }

    this.renderField = function () {
        var $field = $("<div>").addClass("fieldInput").attr("id", "field").attr("type", "text");        /// da ne e input... treba span ili div
        

        return $field;
    }

    this.renderWrapper = function () {

        var $wrapper = $("<div>").addClass("wraper");

        $("<button>").attr("id", "one").text("1").appendTo($wrapper);

        $("<button>").attr("id", "two").text("2").appendTo($wrapper);

        $("<button>").attr("id", "three").text("3").appendTo($wrapper);

        $("<button>").attr("id", "plus").text("+").appendTo($wrapper);

        $("<button>").attr("id", "four").text("4").appendTo($wrapper);

        $("<button>").attr("id", "five").text("5").appendTo($wrapper);

        $("<button>").attr("id", "six").text("6").appendTo($wrapper);

        $("<button>").attr("id", "minus").text("-").appendTo($wrapper);

        $("<button>").attr("id", "seven").text("7").appendTo($wrapper);

        $("<button>").attr("id", "eight").text("8").appendTo($wrapper);

        $("<button>").attr("id", "nine").text("9").appendTo($wrapper);

        $("<button>").attr("id", "multiply").text("*").appendTo($wrapper);

        $("<button>").attr("id", "zero").text("0").appendTo($wrapper);

        $("<button>").attr("id", "dot").text(".").appendTo($wrapper);

        $("<button>").attr("id", "clear").text("C").appendTo($wrapper);

        $("<button>").attr("id", "divide").text("/").appendTo($wrapper);

        $("<button>").attr("id", "bracketLeft").text("(").appendTo($wrapper);

        $("<button>").attr("id", "bracketRight").text(")").appendTo($wrapper);

        $("<button>").addClass("equals").attr("id", "equals").text("=").appendTo($wrapper);

        return $wrapper;
    }
}

// line 106