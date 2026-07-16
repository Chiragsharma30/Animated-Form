const form = document.getElementById("myForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const inputs = document.querySelectorAll(".form-control");

    let valid = true;

    inputs.forEach(function(input){

        if(input.value.trim()===""){

            valid=false;

        }

    });

    if(valid){

        alert("Registration Successful 🎉");

    }

    else{

        form.classList.add("shake");

        setTimeout(function(){

            form.classList.remove("shake");

        },400);

    }

});