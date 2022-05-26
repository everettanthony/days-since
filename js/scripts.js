window.onload = function() {
  daysSince('May 24, 2022 00:00:00'); 

  window.addEventListener('resize', function() {
    if (window.innerWidth > 640 && window.innerHeight < 830) {
      document.body.classList.add('no-bg');
    }
    else {
      document.body.classList.remove('no-bg');      
    }
  });
};

function daysSince(countFrom) {

  let now = new Date(),
      startDay = new Date(countFrom),
      timeDifference = (now - startDay);  
  let secondsInADay = 60 * 60 * 1000 * 24;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);

  const count = document.querySelector('.msg-count');
  count.innerHTML = days;
}