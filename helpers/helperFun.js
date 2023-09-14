function checkEmail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const a= emailRegex.test(email)
   console.log('check email function return:',a)



}

function checkPass(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    const a= passwordRegex.test(password);
console.log('check password function return:',a)}




module.exports={checkEmail,checkPass}