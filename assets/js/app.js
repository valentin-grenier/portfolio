const app =
{
  init: function()
  {
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

}

document.addEventListener('DOMContentLoaded', app.init);







