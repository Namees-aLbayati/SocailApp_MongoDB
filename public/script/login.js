console.log('login here');
const emailEL=document.getElementById('emailID');
const passEL=document.getElementById('passwordID');
const submitEL=document.getElementById('submitID');
const canELE= document.getElementById('cancId')
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
  
      const response1 = await fetch(url, options);
 
  if(response1.status==200){

    const response=await response1.json()
    if(response.isAdmin==true){
console.log('he is admin')
location.assign('/admin/dashboard')
    }else{
        location.assign('/user/dashboard')

    }
 

  }else{
    window.alert('Invalid username or Password! Try again')
  }
  }

canELE.addEventListener('click',(e)=>{
    e.preventDefault()
    location.assign('/')

  })
 
  
  