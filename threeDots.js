const ages = [10,12,18,36,52,25];
const ages2 = [15,16,20];
const ages3 = [5,52,36,40];
ages3.push(15)
const allAges = ages.concat(ages2).concat(ages3)
const allAges2 = [...ages,...ages2,...ages3]
console.log(allAges2);

// const business = 50;
// const minister = 350;
// const sochib = 450;
const taka = [10,50,40,30]
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...taka)
console.log(maximum)