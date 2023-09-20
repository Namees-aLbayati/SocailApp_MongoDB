console.log('signup here')
const usernameEL=document.getElementById('userID');
const emailEL=document.getElementById('emailID');
const passEL=document.getElementById('passID');
const submitSignupBTn=document.getElementById('submitID');
submitSignupBTn.addEventListener('click',async(e)=>{
    e.preventDefault();
    const signupData={
        userName:usernameEL.value,
        email:emailEL.value,
        password:passEL.value
    }
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(signupData), // Convert the data to JSON format
      };
      const url='/signup'
const fetchData=await fetch(url,options);
console.log('response from backend',fetchData)


})