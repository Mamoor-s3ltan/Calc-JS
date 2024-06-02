    let string = "";
    let buttons = document.querySelectorAll(".button");
    Array.from(buttons).forEach((button) => {
      button.addEventListener("click", (Event) => {
        try{
        let value = Event.target.innerHTML;
        if (value == "=") {
          string = eval(string);
          document.getElementById("input").value = string;
        }
        else if (value == "AC") {
          string = "";
          document.getElementById("input").value = string;
        }
        else if (value == "%") {
            string = (parseFloat(string) / 100).toString(); ;
          document.getElementById("input").value = string;
        }
    
        else{
            console.log(Event.target);
            string += Event.target.innerHTML;
            document.getElementById("input").value = string;
        }
    }
    catch(error){
        alert("Syntax error")
        document.getElementById("input").value = "Error";
        string = "";
    }
      });
    });  


