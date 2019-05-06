

async function findUser() {
    //event.preventDefault();
    console.log('findUser is called!');
    const userId = document.getElementById('user-id-input').value;
    console.log(userId);
    const resp = await fetch('http://localhost:8081/users/' + userId, {
        credentials: 'include'
    });
    console.log(resp);
    const user = await resp.json();
    console.log(user);
    const {username, firstname, lastname} = user;

    console.log(username + " " + firstname + " " + lastname);

    // const displayRetrivedUser = document.getElementById('user-name') 
    // displayRetrivedUser.innerText = user.username;

    const card = document.createElement('div');
    
    card.classList = 'card col-md-4 col-sm-6 col-xs-12';
    let imageUrl = '';
    switch(user.username) {
      case 'rossGeller':
        imageUrl = 'https://cdn.evoke.ie/wp-content/uploads/2018/04/04155521/Ross-Friends.jpg'
        break;
      case 'monicaGeller':
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4DMulKBYmEEwz-uFDm19ackR2d7h3nwD-khS9_RvD2Tqo_9s_g'
        break;
      
      case 'joeyTribbianni':
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
        user.username && imageUrl 
    }
    
    
    const img = document.createElement('img');
    //img.src = 'https://thenewswheel.com/wp-content/uploads/2018/05/Millennium-Falcon-760x428.jpg';
    img.src = imageUrl;
    img.classList = 'img-fluid'
    card.appendChild(img);

    if(user.username) {
        const userContainer = document.getElementById('user-container');
        userContainer.append(card);
    }

    const cardBody = document.createElement('div');
    cardBody.classList = 'card-body';
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList = 'card-title';
    cardTitle.innerText = 'Username: ' + user.username;
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
  userContainer.innerHtml = '';
  console.log('removed');
  userContainer.append(card);

}

