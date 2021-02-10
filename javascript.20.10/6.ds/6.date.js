console.log(Date()); // Wed Feb 10 2021 12:00:55 GMT+0900 (대한민국 표준시)

let date = new Date();
console.log(date); // 2021-02-10T03:00:55.630Z
console.log(date.toLocaleDateString()); // 2021. 2. 10.


// timestamp
date = new Date(0);
console.log(date); // 1970-01-01T00:00:00.000Z

date = new Date(1000 * 60 * 60 * 24);
console.log(date); // 1970-01-02T00:00:00.000Z

date = new Date(-1000 * 60 * 60 * 24);
console.log(date); // 1969-12-31T00:00:00.000Z


// datestring
date = new Date('2025-12-26T13:15:15.999Z'); //UTC
console.log(date); // 2025-12-26T13:15:15.999Z


//
console.log(
	date.getFullYear(), // 2025
	date.getMonth(),    // 11 ( 0 ~ 11 )
	date.getDate(),     // 26
	date.getUTCHours(), // 13
	date.getHours(),    // UTC 시각 + 9시간 = 한국시각
	date.getMinutes(),  // 15
	date.getSeconds(),   // 15
	date.getMilliseconds(), // 999
	date.getDay()           // 금요일 (일:0 ~ 토:6)
);


//
console.log(new Date().getTime()); // 1612926842767
console.log(Date.now());           // 1612926824609
