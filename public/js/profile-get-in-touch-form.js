const username = document.getElementById("get-in-touch-name");
const useremail = document.getElementById("get-in-touch-email");
const userphone = document.getElementById("get-in-touch-phone");
const userquery = document.getElementById("get-in-touch-query");

const userform = document.getElementById("get-in-touch-form");

userform.addEventListener("submit", async (e)=>{
    
    e.preventDefault()

    const formdata = {
    
        username:username.value,
        useremail:useremail.value,
        userphone:userphone.value,
        userquery:userquery.value,
    
    }

    console.log(formdata);

    const Form = JSON.stringify(formdata) 
    
    try{
        const response = await fetch("" , {

            method:"POST",
            headers:{
                "content-Type": "application/json",
            },
            body:Form,
        })
        console.log(response);
        setTimeout(() => {
            const formdata = {
        
                username:username.value = "",
                useremail:useremail.value = "",
                userphone:userphone.value = "",
                userquery:userquery.value = "",
            
            }
            console.log(formdata);
        }, 100);
        
    }catch(error){

        console.log(error);

    }
})
