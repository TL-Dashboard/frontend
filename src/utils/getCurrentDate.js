export function getCurrentDate(separator = "", minus) {
  let newDate = new Date();
  let day
  if (minus){
    day = (newDate.getDate()+minus);
  } else {
    day = newDate.getDate()
  }
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${day < 10 ? `0${day}` : `${day}`}`;
}
