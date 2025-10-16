(function() {
  'use strict'
  const baseUrl = 'https://randomuser.me/api';

  async function getUser() {
    const url = `${ baseUrl }?gender=female`;
    console.log(`Requesting user at: ${ url }`);
    const response = await fetch(url);
    const json = await response.json();
    const user = json.results[0];
    return user;
    // return fetch(url).then(response => {
    //   return response.json().then((data) => {
    //     return data.results[0];
    //   });
    // });
  }

  function createProfileCardHTMLElement(user) {
    if (! user) {
      return null;
    }

    const element = createHTMLElement(`
      <div class="col-6">
        <div class="container-fluid member">
          <img class="member-image" src="${ user.picture.thumbnail }">
          <div class="container">
            <h2 class="member-actions d-flex justify-content-between">
              <span class="member-name">${ user.name.first } ${ user.name.last }</span>
              <i class="control-member-delete bi bi-trash3-fill"></i>
            </h2>
            <div class="member-joined">
              <label>Joined:</label> <span class="member-joined-date">${ user.registered.date }</span>
            </div>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    `);
    return element;
  }

  const membersContainer = document.querySelector('#members');
  const addMemberButton = document.querySelector('#member-add');
  addMemberButton.addEventListener('click', async (e) => {
    // get new user data
    const user = await getUser();
    if (user) {
      // render HTML using new user
      const element = createProfileCardHTMLElement(user);
      if (element) {
        // append HTML into DOM
        membersContainer.append(element);
      }
      // Error on create HTML?
    }
    // Error on fetch?
  });

  
  // ---------------------------------------------------------------------------------

  /**
   * Create an HTML element from the string.
   * @param {String} html The HTML content.
   * @returns The HTML element.
   */
  function createHTMLElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
  }  

  /**
   * Generates a random/psuedo random number from 0 up to the specified maximum value.
   * @param {Number} max The maximum value to generate. 
   * @returns {Number} The random number.
   */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
})();
