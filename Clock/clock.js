let updateClock = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  //   seconds = (seconds < 10 ? "0" : " ") + seconds;
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "AM";
  } else {
    timeOfDay = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  } else {
    hours = hours;
  }

  let timeStr = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
  let clock = document.getElementById("clock");
  clock.innerHTML = "The time is : " + timeStr;
  //   console.log(timeStr);
};
// updateClock();
