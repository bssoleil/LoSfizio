////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
  //                             functions                              //
  ////////////////////////////////////////////////////////////////////////

  function toggleTextRed(day) {
    day.classList.add('z-depth-3', 'green-text', 'text-darken-3');
    day.classList.remove('z-depth-1')
  }

function setTodayScheduleFooter(day, hours) {
  const footerActualDayOpening = document.getElementsByClassName('footer-actual-day__opening')[0];
  const footerActualDayClosed = document.getElementsByClassName('footer-actual-day__closed')[0];
  const footerActualDayOpened = document.getElementsByClassName('footer-actual-day__opened')[0];
  if (day == 7 || hours > 18) {
    footerActualDayOpening.innerHTML = 'Fermé';
    footerActualDayClosed.classList.add('hidden')
    console.log("non");
  } else {
    console.log("oui");
    footerActualDayOpening.innerHTML = 'Ouvert';
    footerActualDayOpened.classList.add('hidden')
  }
}

function setTomorrowScheduleFooter(day, hours) {
  const footerTomorrowDayOpening = document.getElementsByClassName('footer-tomorrow-day__opening')[0];
  const footerTomorrowDayClosed = document.getElementsByClassName('footer-tomorrow-day__closed')[0];
  const footerTomorrowDayOpened = document.getElementsByClassName('footer-tomorrow-day__opened')[0];
  if (day != 7) {
    console.log("oui");
    footerTomorrowDayOpening.innerHTML = 'Ouvert';
    footerTomorrowDayOpened.classList.add('hidden')
  } else {
    footerTomorrowDayOpening.innerHTML = 'Fermé';
    footerTomorrowDayClosed.classList.add('hidden')
    console.log("non");
  }
}

function setActiveDay() {
  let date = new Date();
  let actualDate = date.getDay();
  let actualHours = date.getHours();
  let schedule = document.getElementsByClassName('schedule-day')[actualDate - 1];

  toggleTextRed(schedule)
  setTodayScheduleFooter(actualDate, actualHours);
  setTomorrowScheduleFooter(actualDate, actualHours);
}

export default setActiveDay();
