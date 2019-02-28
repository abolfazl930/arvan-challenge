export const formatDate = date => {
  let monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let d = new Date(date),
    month = monthNames[d.getMonth()],
    day = d.getDate(),
    year = d.getFullYear();
  return [day, month, year].join(" ");
};
