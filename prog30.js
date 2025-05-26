//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highCase=covid_data.reduce((d1,d2)=>d1[2]>d2[2] ? d1:d2)
console.log(highCase[1]);
console.log('......................');


//2. district having Highest 1st dose vaccine
highDose=covid_data.reduce((d1,d2)=>d1[5]>d2[5] ? d1:d2)
console.log(highDose[1]);
console.log('......................');

//3. district having lowest death rate
lowDeath=covid_data.reduce((d1,d2)=>d1[3]<d2[3] ? d1:d2)
console.log(lowDeath[1]);
console.log('......................');

//4. sort data with +ve case in descending order
desPosCase=covid_data.sort((d1,d2)=>d2[2]-d1[2]).forEach((item)=>console.log(item[1])
)
console.log('.................');


//5. is district with +ve cases > 15000
Case=covid_data.some((d)=> d[2]>15000)
console.log(Case?'yes':'no');
console.log('..........................');


//6. sort data with 1st dose vaccine ascending order
covid_data.sort((d1,d2)=>d1[5]-d2[5]).forEach((item)=>console.log(item[1])
)

console.log('.................');

//7. Print Thrissur details
thrissur=covid_data.find((d)=>d[1]=='Thrissur')
console.log(thrissur);
console.log('......................');


//8. Print total number of positive cases
total=covid_data.map((d)=>d[2]).reduce((n1,n2)=>n1+n2)
console.log(total);
console.log('.....................');


//9. Print total number of curred cases
total=covid_data.map((d)=>d[4]).reduce((n1,n2)=>n1+n2)
console.log(total);
console.log('.....................');

//10. Print curred cases in Idukki
idukki=covid_data.find((d)=>d[1]=='Idukki')
console.log(idukki[4]);
 