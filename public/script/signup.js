console.log('signup here')
const usernameEL=document.getElementById('userID');
const emailEL=document.getElementById('emailID');
const passEL=document.getElementById('passID');
const canELE=document.getElementById('cancelbtn')
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
const fetchData1=await fetchData.json();

if(fetchData1){
    window.alert('Account created succefully')
    if(window.alert){
        location.assign('/login')

    }
}

})

canELE.addEventListener('click',(e)=>{
    e.preventDefault()
    location.assign('/login')

  })
 

