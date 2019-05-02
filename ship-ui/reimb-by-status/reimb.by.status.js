
async function findRimbrstByStatus() {
    console.log("findRimnrstByStatus is called!!!");
    const id = document.getElementById("user-id-input").value;
    console.log("user entered ID #: " + id);

    const resp = await fetch('http://localhost:8081/reimbursements/status/' + id, {
        credentials: 'include'
    });
    
    console.log(resp);

    const requests = await resp.json();

    console.log(requests);

    const { firstname, lastname, username } = requests[0];
    //console.log(firstname + lastname + username);

//     const card = document.createElement('div');
//   card.classList = 'card col-md-4 col-sm-6 col-xs-12';

//   let imageUrl = '';
//   switch (username) {
//     case 'rossGeller':
//       imageUrl = 'https://cdn.evoke.ie/wp-content/uploads/2018/04/04155521/Ross-Friends.jpg'
//       break;
//     case 'monicaGeller':
//       imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4DMulKBYmEEwz-uFDm19ackR2d7h3nwD-khS9_RvD2Tqo_9s_g'
//       break;

//     case 'joeyTribbianni_5':
//       imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBcOZCQ_GH7Maq4gW2NgTIrIIDVaKVdydWK8u3p6lVfb58Neh6Q'
//       break;

//     case 'phoebeBuffay':
//       imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi_FrODN-xYo7wxq9c9VQsd6ApObxdPXQD206CkQK9k1J_jFX'
//       break;

//     case 'chandlerBing':
//       imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTyrK9zP80-H9IqxcXkvCEuqMnrw5X7sIz5ft9QoyJtvxL-L4'
//       break;

//     // case 'Racheal':
//     //   imageUrl = 'https://vignette.wikia.nocookie.net/friends/images/c/c8/Fat_Monica.jpg/revision/latest?cb=20110723171344'
//     //   break;

//     default:
//     requests.username && imageUrl
//   }

//   const img = document.createElement('img');
//   //img.src = 'https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg';
//   img.src = imageUrl;
//   img.classList = 'img-fluid'
//   card.appendChild(img);


//   const cardBody = document.createElement('div');
//   cardBody.classList = 'card-body';
//   card.appendChild(cardBody);

//   const cardTitle = document.createElement('h5');
//   cardTitle.classList = 'card-title';
//   cardTitle.innerText = 'Username: ' + username;
//   cardBody.appendChild(cardTitle);

//   const cardData = document.createElement('ul');
//   cardData.classList = 'list-group list-group-flush';
//   card.appendChild(cardData);

//   const speed = document.createElement('li');
//   speed.classList = 'list-group-item';
//   speed.innerText = 'First Name:' + firstname;
//   cardData.appendChild(speed);

//   const weight = document.createElement('li');
//   weight.classList = 'list-group-item';
//   weight.innerText = 'Last Name:' + lastname;
//   cardData.appendChild(weight);

  const userContainer = document.getElementById('user-container');
//   userContainer.innerHtml = '';
//   console.log('removed');
//  userContainer.append(card);

  const reQuestTable = document.createElement("table");
  reQuestTable.classList = 'request-table';
  const tblBody = document.createElement("tbody");


  let tblHead = document.createElement("tr");

  let tbl_cell_0 = document.createElement("th");
  let tbl_cellText_0 = document.createTextNode("Reimbursement ID");
  tbl_cell_0.appendChild(tbl_cellText_0);
  tblHead.appendChild(tbl_cell_0);

  let fn_tbl_cell_0 = document.createElement("th");
  let fn_tbl_cellText_0 = document.createTextNode("First Name");
  fn_tbl_cell_0.appendChild(fn_tbl_cellText_0);
  tblHead.appendChild(fn_tbl_cell_0);

  let ln_tbl_cell_0 = document.createElement("th");
  let ln_tbl_cellText_0 = document.createTextNode("Last Name");
  ln_tbl_cell_0.appendChild(ln_tbl_cellText_0);
  tblHead.appendChild(ln_tbl_cell_0);

  let tbl_cell_4 = document.createElement("th");
  let tbl_cellText_4 = document.createTextNode("Status");
  tbl_cell_4.appendChild(tbl_cellText_4);
  tblHead.appendChild(tbl_cell_4);

  let tbl_cell_1 = document.createElement("th");
  let tbl_cellText_1 = document.createTextNode("Amount");
  tbl_cell_1.appendChild(tbl_cellText_1);
  tblHead.appendChild(tbl_cell_1);

  let tbl_cell_2 = document.createElement("th");
  let tbl_cellText_2 = document.createTextNode("Date Submitted");
  tbl_cell_2.appendChild(tbl_cellText_2);
  tblHead.appendChild(tbl_cell_2);

  let tbl_cell_3 = document.createElement("th");
  let tbl_cellText_3 = document.createTextNode("Discription");
  tbl_cell_3.appendChild(tbl_cellText_3);
  tblHead.appendChild(tbl_cell_3);

  tblBody.appendChild(tblHead);

    for(let i = 0; i < requests.length; i++) {
        //console.log(requests[i].username)
        console.log(requests[i].datesubmitted)
        //console.log(requests[i].firstname)
        //console.log(requests[i].lastname)
        console.log(requests[i].reimbursementid)
        console.log(requests[i].datesubmitted)
        console.log(requests[i].status)

        let tblRow = document.createElement("tr");

        
    let cell_0 = document.createElement("td");
    let cellText_0 = document.createTextNode(requests[i].reimbursementid);
    cell_0.appendChild(cellText_0);
    tblRow.appendChild(cell_0);
    
    let fn_cell_0 = document.createElement("td");
    let fn_cellText_0 = document.createTextNode(requests[i].firstname);
    fn_cell_0.appendChild(fn_cellText_0);
    tblRow.appendChild(fn_cell_0);

    let ln_cell_0 = document.createElement("td");
    let ln_cellText_0 = document.createTextNode(requests[i].lastname);
    ln_cell_0.appendChild(ln_cellText_0);
    tblRow.appendChild(ln_cell_0);
    //////////////Here I am going to add status
    

    let cell_4 = document.createElement("td");
    let cellText_4 = document.createTextNode(requests[i].status);
    cell_4.appendChild(cellText_4);
    tblRow.appendChild(cell_4);

    let cell_1 = document.createElement("td");
    let cellText_1 = document.createTextNode(requests[i].amount);
    cell_1.appendChild(cellText_1);
    tblRow.appendChild(cell_1);

    let cell_2 = document.createElement("td");
    let cellText_2 = document.createTextNode(requests[i].datesubmitted);
    cell_2.appendChild(cellText_2);
    tblRow.appendChild(cell_2);

    let cell_3 = document.createElement("td");
    let cellText_3 = document.createTextNode(requests[i].description);
    cell_3.appendChild(cellText_3);
    tblRow.appendChild(cell_3);
    //}

    tblBody.appendChild(tblRow);


    }

    reQuestTable.appendChild(tblBody);
  //body.appendChild(reQuestTable);
  
  userContainer.append(reQuestTable);
  reQuestTable.setAttribute("border", "2");

}