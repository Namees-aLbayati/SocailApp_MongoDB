console.log('login here');
const emailEL=document.getElementById('emailID');
const passEL=document.getElementById('passwordID');
const submitEL=document.getElementById('submitID');
submitEL.addEventListener('click',(e)=>{
e.preventDefault()
    const userData={
    userName:emailEL.value,
    password:passEL.value
}

postData(userData)

})


async function postData(data) {
    const url = '/api/login';
  

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data to JSON format
    };
  
      const response = await fetch(url, options);
  
     console.log('back from api posr',response)
  
  if(response.status==200){
   location.assign('/welcome')

  }else{
    window.alert('Invalid username or Password! Try again')
  }
  }
  
  