console.log('login here');
const emailEL=document.getElementById('emailID');
const passEL=document.getElementById('passwordID');
const submitEL=document.getElementById('submitID');
submitEL.addEventListener('click',()=>{
const userData={
    email:emailEL.value,
    password:passEL.value
}

postData(userData)

})


async function postData(data) {
    const url = '/api/user/login';
  

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data to JSON format
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
  
      console.log(responseData,'from post');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  // Call the async function
  