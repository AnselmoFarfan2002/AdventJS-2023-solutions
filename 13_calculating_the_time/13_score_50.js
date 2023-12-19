/*
The elves are preparing for Christmas Eve and they need your help to determine if they
have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the
duration is HH:mm:ss, the deliveries start at 00:00:00 and the time limit is 07:00:00.

Your function must return the time they will lack or the time they will have left over
in order to finish the deliveries. The format of the returned duration should be HH:mm:ss.

If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with
a negative sign. For example, if they have 1 hour and 30 minutes left over, return -01:30:00
*/

function calculateTime(deliveries) {
  const hhmmss = deliveries
    .map((time) => time.split(":").map((n) => Number(n)))
    .reduce(
      (a, b) => {
        b[0] += a[0];
        b[1] += a[1];
        b[2] += a[2];

        return b;
      },
      [0, 0, 0]
    );

  hhmmss[1] += Math.floor(hhmmss[2] / 60);
  hhmmss[2] = hhmmss[2] % 60;

  hhmmss[0] += Math.floor(hhmmss[1] / 60);
  hhmmss[1] = hhmmss[1] % 60;

  if (hhmmss[0] < 7) {
    hhmmss[0] = 7 - hhmmss[0];
    if (hhmmss[2] > 0) {
      hhmmss[1] += 1;
      hhmmss[2] = 60 - hhmmss[2];
    }
    if (hhmmss[1] > 0) {
      hhmmss[0] -= 1;
      hhmmss[1] = 60 - hhmmss[1];
    }

    return (
      "-" + hhmmss.map((hms) => (Math.abs(hms) + "").padStart(2, "0")).join(":")
    );
  } else {
    hhmmss[0] = 7 - hhmmss[0];
    return hhmmss.map((hms) => (Math.abs(hms) + "").padStart(2, "0")).join(":");
  }
}

// TESTS ******************************************************

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// // '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// // '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]));
// // '-05:29:00'

console.log(calculateTime(["01:01:01", "09:59:59", "01:01:01"]));
// // "05:02:01"

console.log(calculateTime(["02:00:00", "03:00:00", "02:00:00"]));
// // "00:00:00";

console.log(calculateTime(["01:00:00", "05:00:00", "00:30:00"]));
//-00:30:00

console.log(calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"]));
//"-00:00:01"
