
const main = document.getElementById("main")
const createacct =document.getElementById("create-acct")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("submit")
const suemailInput = document.getElementById("email-signup")
const supasswordInput = document.getElementById("password-signup")
const confirmemail = document.getElementById("confirm-email")
const confirmpassword = document.getElementById("confirm-password")
const createacctbtn = document.getElementById("create-acct-btn")
const signupButton = document.getElementById("sign-up")
const returnBtn = document.getElementById("return-btn")

var email,
password,
signupEmail,
signupPassword,
confirmSignupEmail,
confirmSignupPassword;


createacctbtn.addEventListener("click",() =>{
    var isVerified = true;

    signupEmail = suemailInput.Value;
    confirmSignupEmail = confirmemail.Value;
    if(signupEmail != confirmemail){
        window.alert("Email fields do not match. Try again.");
        isVerified =false;
    }
    signupPassword = supasswordInput.value;
    confirmSignupPassword = confirmpassword.value;
    if(signupPassword != confirmpassword){
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }
    if (
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null||
        confirmSignupPassword == null ) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword). then(() =>{
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
    }).catch((error) =>{
        window.alert("Error Occured. Try again")
    });
})

submitButton.addEventListener("click",function(){
    email = emailInput.value
    password = passwordInput.value
    signInWithEmailAndPassword(auth, )
} )
signupButton.addEventListener("click",() =>{
    main.style.display = "none";
    createacct.style.display = "block";

});
returnBtn.addEventListener("click", function(){
createacct.style.display = "none";
main.style.display = "block";
});