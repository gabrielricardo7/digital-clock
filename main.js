const displayClock = () => {
  setTimeout("digitalClock()", 1000);
};

const digitalClock = () => {
  const x = new Date();
  const y = document.body;

  const day = y.querySelector("#day");
  const time = y.querySelector("#time");
  const date = y.querySelector("#date");

  day.textContent = x.toDateString().split(" ")[0].toUpperCase();
  time.textContent = x.toTimeString().split(" ")[0];
  date.textContent = x.toLocaleDateString();

  displayClock();
};

digitalClock();
