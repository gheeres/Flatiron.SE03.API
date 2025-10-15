(function() {
  'use strict'

  
  
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
