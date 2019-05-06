
async function updateUser() {
    console.log("updateUser has been called!!!");
    const userid = document.getElementById('user-id-input').value;
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    const firstname = document.getElementById('firstname-input').value;
    const lastname = document.getElementById('lastname-input').value;
    const email = document.getElementById('email-input').value;
    const role = document.getElementById('role-input').value;
    
    console.log(userid);
    console.log(username);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(role);

    const userUpdated = {userid, 
                        username, 
                        password, 
                        firstname, 
                        lastname, 
                        email, 
                        role};

    console.log(userUpdated);

    const response = await fetch('http://localhost:8081/users/' + userid,{
        method: 'PATCH',
        credentials: 'include',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(userUpdated)
    });
    console.log(userUpdated);
}