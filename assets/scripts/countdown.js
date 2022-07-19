(() => {
  function handleCountDown() {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const deadline = new Date("jul 27, 2022 11:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const time = deadline - now;

      let timeDays = Math.floor(time / (1000 * 60 * 60 * 24));
      let timeHours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let timeMinutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let timeSeconds = Math.floor((time % (1000 * 60)) / 1000);

      timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      days.innerHTML = timeDays;
      hours.innerHTML = timeHours;
      minutes.innerHTML = timeMinutes;
      seconds.innerHTML = timeSeconds;

      if (time < 0) {
        clearInterval(interval);
        alert("Tempo esgotado");
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      }

    }, 1000);
  }
  handleCountDown();
})()