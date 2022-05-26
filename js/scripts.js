window.onload = function() {
  daysSince('May 24, 2022 00:00:00'); 
};

function daysSince(countFrom) {

  let now = new Date(),
      startDay = new Date(countFrom),
      timeDifference = (now - startDay);  
  let secondsInADay = 60 * 60 * 1000 * 24;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);

  const count = document.querySelector('.count');
  count.innerHTML = days;
}