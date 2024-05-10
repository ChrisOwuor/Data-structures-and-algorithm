const startTime = 1714933561962;
let timef = new Date(startTime);
console.log(timef.toLocaleTimeString());

function logse() {
  let now = new Date(); // Update current time every second

  let dif = now.getTime() - timef.getTime();
  // Total minutes
  let totalMinutes = Math.floor(dif / (1000 * 60));
  // Remaining seconds
  let remainderMiliSeconds = dif % (1000 * 60);
  let remainingSeconds = Math.floor(remainderMiliSeconds / 1000);
  // Remaining milliseconds
  let remainingMilliseconds = remainderMiliSeconds % 1000;

  console.log("Total minutes:", totalMinutes);
  console.log("Remaining seconds:", remainingSeconds);
  console.log("Remaining milliseconds:", remainingMilliseconds);
}

setInterval(logse, 1000); // Update every second
