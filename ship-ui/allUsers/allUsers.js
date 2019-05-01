
// async function loadShips() {
//   const currentUserString = localStorage.getItem('currentUser');
//   const currentUser = JSON.parse(currentUserString);

//   const response = await fetch('http://localhost:808/spaceships/owner/' + currentUser.userId, {
//     credentials: 'include'
//   });
//   if (response.status === 200) {
//     const ships = await response.json();
//     console.log(ships);
//     populatePageShips(ships);
//   }
// }

async function loadShips() {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
  
    const response = await fetch('http://localhost:8081/users' /*+ currentUser.userId*/, {
      credentials: 'include'
    });
    if (response.status === 200) {
      const ships = await response.json();
      console.log(ships);
      populatePageShips(ships);
    }
  }
  
  function populatePageShips(ships) {
  
    const shipElements = ships.map(ship => {
      const card = document.createElement('div');
      
      card.classList = 'card col-md-4 col-sm-6 col-xs-12';
      let imageUrl = '';
      switch(ship.firstname) {
        case 'Ross':
          imageUrl = 'https://cdn.evoke.ie/wp-content/uploads/2018/04/04155521/Ross-Friends.jpg'
          break;
        case 'Monica':
          imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4DMulKBYmEEwz-uFDm19ackR2d7h3nwD-khS9_RvD2Tqo_9s_g'
          break;
        
        case 'Joey_4':
          imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBcOZCQ_GH7Maq4gW2NgTIrIIDVaKVdydWK8u3p6lVfb58Neh6Q'
          break;
  
        case 'Phoebe':
          imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfi_FrODN-xYo7wxq9c9VQsd6ApObxdPXQD206CkQK9k1J_jFX'
          break;
  
        case 'Chandler':
          imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTyrK9zP80-H9IqxcXkvCEuqMnrw5X7sIz5ft9QoyJtvxL-L4'
          break;
  
        // case 'Monica':
        //   imageUrl = 'https://vignette.wikia.nocookie.net/friends/images/c/c8/Fat_Monica.jpg/revision/latest?cb=20110723171344'
        //   break;
  
        default:
         imageUrl = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/22/13/why-monicas-apartment-on-friends-was-purple.jpg?w968h681'
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
      cardTitle.innerText = ship.firstname;
      cardBody.appendChild(cardTitle);
  
  
      const cardData = document.createElement('ul');
      cardData.classList = 'list-group list-group-flush';
      card.appendChild(cardData);
  
      const speed = document.createElement('li');
      speed.classList = 'list-group-item';
      speed.innerText = 'First Name: ' + ship.firstname;
      cardData.appendChild(speed);
  
      const weight = document.createElement('li');
      weight.classList = 'list-group-item';
      weight.innerText = 'Last Name: ' + ship.lastname;
      cardData.appendChild(weight);
  
      // const description = document.createElement('li');
      // description.classList = 'list-group-item';
      // description.innerText = 'Description: ' + ship.description;
      // cardData.appendChild(description);
  
      // const deleteItem = document.createElement('li');
      // deleteItem.classList = 'list-group-item';
      // const deleteButton = document.createElement('button');
      // deleteButton.classList = 'btn btn-dark';
      // deleteButton.addEventListener('click', () => deleteShip(ship.shipId, card));
      // deleteButton.innerText = 'Delete';
      // deleteItem.appendChild(deleteButton);
      // cardData.appendChild(deleteItem);
      
      return card;
    });
  
    const shipContainer = document.getElementById('ship-container');
    shipContainer.append(...shipElements);
  
    // <div class="card col-md-4 col-sm-6 col-xs-12">
    //   <img src="https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg" class="card-img-top"
    //     alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">Ship Name</h5>
    //     </div>
    //     <ul class="list-group list-group-flush">
    //       <li class="list-group-item">Speed: 32412</li>
    //       <li class="list-group-item">Weight: 3124312</li>
    //       <li class="list-group-item">Description: dlsa;jf;asdlkfjsda lksdalkfjsdlkfj</li>
    //       <li class="list-group-item">
    //         <button class="btn btn-danger">Delete</button>
    //       </li>
    //     </ul>
    //     </div>
  }
  
  loadShips();
  
  // async function deleteShip(id, shipCard) {
  //   const response = await fetch('http://localhost:8081/users/' + id, {
  //     credentials: 'include',
  //     method: 'DELETE'
  //   });
  //   if(response.status === 200) {
  //     shipCard.parentNode.removeChild(shipCard)
  //   }
  // }