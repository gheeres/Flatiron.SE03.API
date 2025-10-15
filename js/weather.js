(function() {
  'use strict'
  // Current Weather - https://openweathermap.org/current
  // Geocoding API - https://openweathermap.org/api/geocoding-api
  // Icons - https://icons.getbootstrap.com/?q=weather
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const apiKey = '<yourapikey>';


  
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
