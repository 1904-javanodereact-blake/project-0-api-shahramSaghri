//import { request } from "http";
//import { convertSqlRole } from "../../src/util/sql-role-conveter";


async function findReimbById() {
    //event.preventDefault();
    console.log('findReimbbyId is called!');
    const userId = document.getElementById('user-id-input').value;
    console.log(userId);
    const resp = await fetch('http://localhost:8081/reimbursements/author/userId/' + userId, {
        credentials: 'include'
    });
    //response is an array i need to render its elements one by one
    console.log(resp);
    const reimbRequests = await resp.json();
    const { firstname, lastname, username } = reimbRequests[0];

    console.log(firstname + lastname + username);
    console.log(reimbRequests);

    const card = document.createElement('div');
    card.classList = 'card col-md-4 col-sm-6 col-xs-12';

    let imageUrl = '';
    switch(username) {
      case 'rossGeller':
        imageUrl = 'https://cdn.evoke.ie/wp-content/uploads/2018/04/04155521/Ross-Friends.jpg'
        break;
      case 'monicaGeller':
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4DMulKBYmEEwz-uFDm19ackR2d7h3nwD-khS9_RvD2Tqo_9s_g'
        break;
      
      case 'joeyTribbianni_5':
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBcOZCQ_GH7Maq4gW2NgTIrIIDVaKVdydWK8u3p6lVfb58Neh6Q'
        break;

      case 'phoebeBuffay':
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi_FrODN-xYo7wxq9c9VQsd6ApObxdPXQD206CkQK9k1J_jFX'
        break;

      case 'chandlerBing':
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTyrK9zP80-H9IqxcXkvCEuqMnrw5X7sIz5ft9QoyJtvxL-L4'
        break;

      // case 'Racheal':
      //   imageUrl = 'https://vignette.wikia.nocookie.net/friends/images/c/c8/Fat_Monica.jpg/revision/latest?cb=20110723171344'
      //   break;

      default:
      requst.username && imageUrl 
    }
    
    const img = document.createElement('img');
    //img.src = 'https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg';
    img.src = imageUrl;
    img.classList = 'img-fluid'
    card.appendChild(img);

    
    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';
    cardTitle.innerText = 'Username: ' + username;
    cardBody.appendChild(cardTitle);

    const cardData = document.createElement('ul');
      cardData.classList = 'list-group list-group-flush';
      card.appendChild(cardData);
  
      const speed = document.createElement('li');
      speed.classList = 'list-group-item';
      speed.innerText = 'First Name:' + firstname;
      cardData.appendChild(speed);
  
      const weight = document.createElement('li');
      weight.classList = 'list-group-item';
      weight.innerText = 'Last Name:' + lastname;
      cardData.appendChild(weight);
    
      const userContainer = document.getElementById('user-container');
      userContainer.append(card);

      const reQuestTable = document.createElement("table");
      reQuestTable.classList = 'request-table';
      const tblBody = document.createElement("tbody");
      
      //var table = document.getElementById("myTable");
    //   var header = reQuestTable.createTHead();
    //   var hdRrow = header.insertRow(0);
    //   var cell = hdRrow.insertCell(0);
    //   cell.innerHTML = "<b>This is a table header</b>";
    

    for(let i = 0; i < reimbRequests.length; i++) { 

        let tblRow = document.createElement("tr");
        console.log(reimbRequests[i].reimbursementid);

        console.log(reimbRequests[i].amount);
        console.log(reimbRequests[i].datesubmitted);
        console.log(reimbRequests[i].description);
        
        


        //for( let j = 0; j < 3; j++) {

            // let  cell_00 = document.createElement("td");
            // let cellText_00 = document.createTextNode(reimbRequests[i].reimbursementid);
            // cell_00.appendChild(cellText_00);
            // row.appendChild(cell_00);



            let  cell_0 = document.createElement("td");
            let cellText_0 = document.createTextNode(reimbRequests[i].reimbursementid);
            cell_0.appendChild(cellText_0);
            tblRow.appendChild(cell_0);

            let  cell_1 = document.createElement("td");
            let cellText_1 = document.createTextNode(reimbRequests[i].amount);
            cell_1.appendChild(cellText_1);
            tblRow.appendChild(cell_1);

            let  cell_2 = document.createElement("td");
            let cellText_2 = document.createTextNode(reimbRequests[i].datesubmitted);
            cell_2.appendChild(cellText_2);
            tblRow.appendChild(cell_2);

            let  cell_3 = document.createElement("td");
            let cellText_3 = document.createTextNode(reimbRequests[i].description);
            cell_3.appendChild(cellText_3);
            tblRow.appendChild(cell_3);
        //}
        tblBody.appendChild(tblRow);
    }
    reQuestTable.appendChild(tblBody);
    //body.appendChild(reQuestTable);
    
    userContainer.append(reQuestTable);
    reQuestTable.setAttribute("border", "2");
    //     row.classList = 'request-table-row';
    //     const tableCell_0 = document.createElement("TD");
    //     tableCell_0.innerText = reimbRequests[i].amount;
    //     row.appendChild(tableCell_0);

    //     const tableCell_1 = document.createElement("TD");
    //     tableCell_1.innerText = reimbRequests[i].datesubmitted;
    //     row.appendChild(tableCell_1);

    //     const tableCell_2 = document.createElement("TD");
    //     tableCell_2.innerText = reimbRequests[i].datesubmitted;
    //     row.appendChild(tableCell_2);

    //     reQuestTable.appendChild(row);
            
    
    // }//end of for loop
    // //userContainer.appendChild(reQuestTable);
    
    
    
}
