// wpp fixo
const content = document.querySelector('[data-shrink="yes"]')

const span = document.querySelector('[data-shrink="yes"] span')

span.classList.add('aparecer')

setInterval(function() {
 content.classList.toggle('shrink')
},5000)

setTimeout(function() {
    setInterval(function() {
        span.classList.toggle('aparecer')
       },5000)
},200)


// scrol links
const navbarItens = document.querySelectorAll('.navbar a[href^="#"]');

navbarItens.forEach(item => {
    item.addEventListener('click' , scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 20;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    
smoothScrollTo(0, to);
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };