

async function updateRequest() {
    console.log("submitRequest() has been called!!!");
    const reimbursementid = +document.getElementById('reimbursement-id-input').value;
    const author = +document.getElementById('author-id-input').value;
    const amount = +document.getElementById('amount-input').value;
    const datesubmitted = document.getElementById('datesubmitted-input').value;
    const dateresolved = document.getElementById('dateresolved-input').value;
    const description = document.getElementById('description-input').value;
    const resolver = document.getElementById('resolver-id-input').value;
    const status = +document.getElementById('status-code-input').value;
    
    //const status = 1;
    const type = +document.getElementById('type-code-input').value;
    
     //Populate captured values
     console.log(reimbursementid);
     console.log(author);
     console.log(amount);
     console.log(datesubmitted);
     //console.log(dateresolved);
     console.log(description);
     //console.log(resolver);
     console.log(status);
     console.log(type);

    // const dateresolved = null;
    // const resolver = null;

    const newRequast = {reimbursementid, author, amount, datesubmitted, dateresolved, description, resolver, status, type};
    // if(author){
    //     newRequest['author'] = author;
    // }
    const response = await fetch('http://localhost:8081/reimbursements',{
        method: 'PATCH',
        credentials: 'include',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(newRequast)
    });
    console.log(newRequast);
}