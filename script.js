const hour = parseFloat(prompt("Enter the number of hours: "));

if (hour < 0) {
  alert("Invalid data: the number cannot be less than zero");
} else if (isNaN(hour)) {
  alert("Invalid data: please enter the number");
} else {
  const seconds = hour * 3600;

  if (hour !== 1) {
    alert(`${hour} hour contain the following number of seconds: ${seconds}`);
  } else {
    alert(`${hour} hour contains the following number of seconds: ${seconds}`);
  }
}
