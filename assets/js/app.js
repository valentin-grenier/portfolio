const app =
{
  init: function()
  {
    // Burger menu
    const burger = document.querySelector('button.burger-menu');
    burger.addEventListener('click', app.openBurger);

    // Scroll to top button
    const button = document.querySelector('#scrolltotop');
    button.addEventListener('click', app.handleClick);

    document.addEventListener('scroll', app.handleScroll);
  },

  handleClick: function()
  {
    window.scrollTo({top: 0, behavior: 'smooth'});
  },

  handleScroll: function()
  {
    const button = document.querySelector('#scrolltotop');

    if(window.scrollY > 250)
    {
      button.classList.add('show');
    }
    else
    {
      button.classList.remove('show');
    }
  },

  openBurger: function()
  {
    const header = document.querySelector('header');
    const nav = document.querySelector('.header__navigation');

    header.classList.toggle('show');
    nav.classList.toggle('show');
  }

}

document.addEventListener('DOMContentLoaded', app.init);







