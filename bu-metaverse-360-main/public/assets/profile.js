function getUsername() {
   let userstr = window.localStorage.getItem('userInformation');
   let user = JSON.parse(userstr)
   document.getElementById('username').innerHTML = user.firstname + " " + user.lastname;
   console.log(user)
   console.log(user.firstname)

   getQueueNumber();
}


async function getQueueNumber() {
   let result = await fetch('https://hooks.zapier.com/hooks/catch/123')
   let data = await result.json()
   console.log(data);
}