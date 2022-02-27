let result = "";
let isGood = null;
function hasNumber(str) {
    return /\d/.test(str);
  }
function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
function Check(){
    console.log("checking");
    if(document.getElementById("UserPass").value.length > 16 || containsSpecialChars(document.getElementById("UserPass").value) && document.getElementById("UserPass").value.length > 12 || document.getElementById("UserPass").value.length > 10 && hasNumber(document.getElementById("UserPass").value)){
        isGood = true;
        result = "Recommended"
        document.getElementById("result").innerHTML = result;
        document.getElementById("result").style.color = "Blue";
    }
    else{
        isGood = false;
        result = "Not recommended"
        document.getElementById("result").innerHTML = result;
        document.getElementById("result").style.color = "red";
    }
    
}
