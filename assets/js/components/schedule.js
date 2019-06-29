////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////
  //                             functions                              //
  ////////////////////////////////////////////////////////////////////////

  function toggleTextRed(day) {
    day.classList.add('z-depth-3', 'green-text', 'text-darken-3', 'bold-text');
    day.classList.remove('z-depth-1')
  }

function setTodayScheduleFooter(day, hours) {
  const footerActualDayOpening = document.getElementsByClassName('footer-actual-day__opening')[0];
  const footerActualDayClosed = document.getElementsByClassName('footer-actual-day__closed')[0];
  const footerActualDayOpened = document.getElementsByClassName('footer-actual-day__opened')[0];
  if (day == 7 || hours > 18) {
    footerActualDayOpening.innerHTML = 'Fermé';
  } else {
    footerActualDayOpening.innerHTML = 'Ouvert';
  }
}

function setTomorrowScheduleFooter(day, hours) {
  const footerTomorrowDayOpening = document.getElementsByClassName('footer-tomorrow-day__opening')[0];
  const footerTomorrowDayClosed = document.getElementsByClassName('footer-tomorrow-day__closed')[0];
  const footerTomorrowDayOpened = document.getElementsByClassName('footer-tomorrow-day__opened')[0];
  if (day + 1 != 7) {
    footerTomorrowDayOpening.innerHTML = 'Ouvert';
  } else {
    footerTomorrowDayOpening.innerHTML = 'Fermé';
  }
}

function setActiveDay() {
  let date = new Date();
  let actualDate = date.getDay();
  let actualHours = date.getHours();
  console.log(actualDate);
  let schedule = document.getElementsByClassName('schedule-day')[actualDate - 1];

  if (schedule) {toggleTextRed(schedule)};
  setTodayScheduleFooter(actualDate, actualHours);
  setTomorrowScheduleFooter(actualDate, actualHours);
}

export default setActiveDay();
