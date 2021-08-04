`use strict`;
let all=[];

let openingHours = [`6am`, `7am`, `8am`, `9am`, `i0am`, `iiam`, `i2pm`, `ipm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`, `7pm`];
let fishCookie = document.getElementById(`fishCookie`);

function cookiesCalculation(location, avgCookie, maxClient, minClient) {

    this.location = location;
    this.cInHour =0;
    this.cInHourSales =[];
    this.avgCookie = avgCookie;
    this.finalresult = [];
    this.minClient = minClient;
    this.maxClient = maxClient;
    this.total = 0;
    all.push(this);

}
cookiesCalculation.prototype.customerAvg = function () {
    this.cInHour = Math.floor(Math.random() * (this.maxClient - this.minClient + 1) + this.minClient);

    // console.log(this.cInHour);
    return this.cInHour;
}
cookiesCalculation.prototype.cookiePerHour = function () {
    for (let i = 0; i < openingHours.length; i++) {
        let cookiePerHourNum = Math.floor(this.avgCookie * this.customerAvg());
        // console.log(cookiePerHourNum);
        this.finalresult.push(cookiePerHourNum);
        // console.log(this.finalresult);
        this.total += cookiePerHourNum;
        this.cInHourSales.push(this.finalresult)
        
    } return this.finalresult;

}



let divElement = document.createElement(`div`);
fishCookie.appendChild(divElement);

let tableEle = document.createElement(`table`);
fishCookie.appendChild(tableEle);

function makeHeaderTable (){
   
    let trEle = document.createElement(`tr`);
    tableEle.appendChild(trEle);

    let thEle = document.createElement(`th`);
    thEle.textContent = `Location`;
    trEle.appendChild(thEle);

    for (let i = 0; i < openingHours.length; i++) {
        let thEle = document.createElement(`th`)
        thEle.textContent = `${openingHours[i]} `;
        trEle.appendChild(thEle);
    }

    let thEle3 = document.createElement(`th`);
    thEle3.textContent = `Location Daily Total`;
    trEle.appendChild(thEle3);

}

makeHeaderTable();


cookiesCalculation.prototype.outputToHTML = function () {

    let trEle2 = document.createElement(`tr`);
    tableEle.appendChild(trEle2);


    let thEle2 = document.createElement(`th`);
    thEle2.textContent = `${this.location}`;
    trEle2.appendChild(thEle2);

    for (let i = 0; i < openingHours.length; i++) {
        let tdEle2 = document.createElement(`td`);
        tdEle2.textContent = `${this.finalresult[i]}`
        trEle2.appendChild(tdEle2);
    }
    let tdEle3 = document.createElement(`td`)
    tdEle3.textContent = `${this.total}`;
    trEle2.appendChild(tdEle3);


}


// 

// (location, avgCookie, maxClient, minClient)
let seattle = new cookiesCalculation(`Seattle`, 6.3, 65, 23);
let tokyo = new cookiesCalculation(`Tokyo`, 1.2, 24, 3);
let dubai = new cookiesCalculation(`Dubai`, 3.7, 38, 11);
let paris = new cookiesCalculation(`Paris`, 2.3, 38, 20);
let lima = new cookiesCalculation(`Lima`, 4.6, 16, 2);

let arr = [seattle, tokyo, dubai, paris, lima]
for (let s = 0; s < arr.length; s++) {
    arr[s].customerAvg();
    arr[s].cookiePerHour();
    arr[s].outputToHTML();

}
makeFooterTable();

console.log(all);

function makeFooterTable() {

    let trEle2 = document.createElement(`tr`);
    tableEle.appendChild(trEle2);


    let thEle2 = document.createElement(`th`);
    thEle2.textContent = `Total`;
    trEle2.appendChild(thEle2);

    for (let i = 0; i < openingHours.length; i++) {
        let totalDaily =0
        for (let j = 0 ; j < all.length ; j++){
            totalDaily += all[j].finalresult[i]
        }
        let tdEle2 = document.createElement(`td`);
        tdEle2.textContent = `${totalDaily}`
        trEle2.appendChild(tdEle2);

    }

    // for (let i = 0; i < openingHours.length; i++) {
    //     let finalTotal =0
    //     for (let j = 0 ; j < all.length ; j++){
    //         finalTotal +=all[j].total
        
    let tdElementFooter2= document.createElement(`td`);
        trEle2.appendChild(tdElementFooter2);
        // tdElementFooter2.textContent =`${finalTotal}`
        tdElementFooter2.textContent =`${seattle.total + tokyo.total + dubai.total + paris.total + lima.total}`;
    }
      

    // let tdEle3 = document.createElement(`td`)
    // tdEle3.textContent = `Daily total cookies`;
    // trEle2.appendChild(tdEle3);






// {

//         let trFooter = document.createElement(`tr`);
//         tableEle.appendChild(trFooter);
    
//         let thElementFooter=document.createElement(`th`);
//         trFooter.appendChild(thElementFooter);
//         thElementFooter.textContent =`Totals :`;


//         for (let s = 0 ; 0 < 5 ; s++) {
//             let tdElementFooter5= document.createElement(`td`);      
//             tdElementFooter5.textContent =`${seattle.finalresult[s] + tokyo.finalresult[s] + dubai.finalresult[s] + paris.finalresult[s] + lima.finalresult[s]}`;

//             trFooter.appendChild(tdElementFooter5);
           
//         }    
        
       
    
    
//     }


    





// h2Element.textContent = this.location;
// fishCookie.appendChild(h2Element);
// let ulElement = document.createElement(`ul`);
// fishCookie.appendChild(ulElement);

// for (let i = 0; i < openingHours.length; i++) {
//     let liElement = document.createElement(`li`);
//     // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//     liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//     ulElement.appendChild(liElement);
//     // console.log(ulElement)

// }
// let liTotal = document.createElement(`li`)
// liTotal.textContent = `Total: ${this.total} cookies`
// ulElement.appendChild(liTotal)
// } 
//     }

//     }




// const seattle = {
//     location: `Seattle`,
//     avgCookie: 6.3,
//     cInHour: 0,
//     finalresult: [],
//     minClient: 23,
//     maxClient: 65,
//     total: 0,

//     getCookie: function () {

//         for (let i = 0; i < openingHours.length; i++) {

//             let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
//             this.finalresult.push(randAvgNum);
//             this.total += this.finalresult[i];
//             // console.log(this.total);

//         }

//         return this.total;
//     },
//     outputToHTML: function () {
//         let h2Element = document.createElement(`h2`);
//         h2Element.textContent = this.location;
//         fishCookie.appendChild(h2Element);
//         let ulElement = document.createElement(`ul`);
//         fishCookie.appendChild(ulElement);

//         for (let i = 0; i < openingHours.length; i++) {
//             let liElement = document.createElement(`li`);
//             // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//             liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//             ulElement.appendChild(liElement);
//             // console.log(ulElement)

//         }
//         let liTotal = document.createElement(`li`)
//         liTotal.textContent = `Total: ${this.total} cookies`
//         ulElement.appendChild(liTotal)
//     }

// }

// seattle.getCookie();
// seattle.outputToHTML();





// const tokyo = {
//     location: `Tokyo`,
//     avgCookie: i.2,
//     cInHour: 0,
//     finalresult: [],
//     minClient: 3,
//     maxClient: 24,
//     total: 0,

//     getCookie: function () {

//         for (let i = 0; i < openingHours.length; i++) {
//             let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
//             // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
//             this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
//             this.total += randAvgNum;
//             console.log(this.total)
//             // console.log(this.finalresult[i])

//         }
//         return this.total;
//     },
//     outputToHTML: function () {
//         let h2Element = document.createElement(`h2`);
//         h2Element.textContent = this.location;
//         fishCookie.appendChild(h2Element);
//         let ulElement = document.createElement(`ul`);
//         fishCookie.appendChild(ulElement);

//         for (let i = 0; i < openingHours.length; i++) {
//             let liElement = document.createElement(`li`);
//             // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//             liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//             ulElement.appendChild(liElement);
//             // console.log(ulElement)

//         }
//         let liTotal = document.createElement(`li`)
//         liTotal.textContent = `Total is: ${this.total} cookies`
//         ulElement.appendChild(liTotal)
//     }
// }
// tokyo.getCookie();
// tokyo.outputToHTML();

// const dubai = {
//     location: `Dubai`,
//     avgCookie: 3.7,
//     cInHour: 0,
//     finalresult: [],
//     minClient: ii,
//     maxClient: 38,
//     total: 0,

//     getCookie: function () {

//         for (let i = 0; i < openingHours.length; i++) {
//             let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
//             // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
//             this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
//             this.total += randAvgNum;
//             console.log(this.total)
//             // console.log(this.finalresult[i])

//         }
//         return this.total;
//     },
//     outputToHTML: function () {
//         let h2Element = document.createElement(`h2`);
//         h2Element.textContent = this.location;
//         fishCookie.appendChild(h2Element);
//         let ulElement = document.createElement(`ul`);
//         fishCookie.appendChild(ulElement);

//         for (let i = 0; i < openingHours.length; i++) {
//             let liElement = document.createElement(`li`);
//             // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//             liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//             ulElement.appendChild(liElement);
//             // console.log(ulElement)

//         }
//         let liTotal = document.createElement(`li`)
//         liTotal.textContent = `Total is: ${this.total} cookies`
//         ulElement.appendChild(liTotal)
//     }

// }
// dubai.getCookie();
// dubai.outputToHTML();

// const paris = {
//     location: `paris`,
//     avgCookie: 2.3,
//     cInHour: 0,
//     finalresult: [],
//     minClient: 20,
//     maxClient: 38,
//     total: 0,

//     getCookie: function () {

//         for (let i = 0; i < openingHours.length; i++) {
//             let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
//             // console.log(Math.ceil(random(this.minClient,this.maxClient) *this.avgCookie))
//             this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
//             this.total += randAvgNum;
//             console.log(this.total)
//             // console.log(this.finalresult[i])

//         }
//         return this.total;
//     },
//     outputToHTML: function () {
//         let h2Element = document.createElement(`h2`);
//         h2Element.textContent = this.location;
//         fishCookie.appendChild(h2Element);
//         let ulElement = document.createElement(`ul`);
//         fishCookie.appendChild(ulElement);

//         for (let i = 0; i < openingHours.length; i++) {
//             let liElement = document.createElement(`li`);
//             // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//             liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//             ulElement.appendChild(liElement);
//             // console.log(ulElement)

//         }
//         let liTotal = document.createElement(`li`)
//         liTotal.textContent = `Total is: ${this.total} cookies`
//         ulElement.appendChild(liTotal)
//     }

// }
// paris.getCookie();
// paris.outputToHTML();

// const lima = {
//     location: `lima`,
//     cInHour: 0,
//     avgCookie: 4.6,
//     finalresult: [],
//     maxClient: i6,
//     minClient: 2,
//     total: 0,

//     getCookie: function () {

//         for (let i = 0; i < openingHours.length; i++) {
//             let randAvgNum = Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)
//             this.finalresult.push(Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie))
//             this.total += randAvgNum;

//         }
//         return this.total;
//     },

//     outputToHTML: function () {
//         let h2Element = document.createElement(`h2`);
//         h2Element.textContent = this.location;
//         fishCookie.appendChild(h2Element);
//         let ulElement = document.createElement(`ul`);
//         fishCookie.appendChild(ulElement);

//         for (let i = 0; i < openingHours.length; i++) {
//             let liElement = document.createElement(`li`);
//             // liElement.textContent = openingHours[i] + `: ` + this.finalresult[i] + ` Cookies.`;
//             liElement.textContent = ` ${openingHours[i]}: ${Math.ceil(random(this.minClient, this.maxClient) * this.avgCookie)} Cookies.`
//             ulElement.appendChild(liElement);
//             // console.log(ulElement)

//         }
//         let liTotal = document.createElement(`li`);
//         liTotal.textContent = `Total is: ${this.total} cookies`;
//         ulElement.appendChild(liTotal);
//     }
// }

// lima.getCookie();
// lima.outputToHTML();


// function random(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }




// let seattle = new cookiesCalculation(`Seattle`, 6.3, 65, 23);
// seattle.customerAvg();
// seattle.cookiePerHour();
// seattle.outputToHTML();
// let tokyo = new cookiesCalculation(`Tokyo`, i.2, 24, 3);
// tokyo.customerAvg();
// tokyo.cookiePerHour();
// tokyo.outputToHTML();
// let dubai = new cookiesCalculation(`Dubai`, 3.7, 38, ii);
// dubai.customerAvg();
// dubai.cookiePerHour();
// dubai.outputToHTML();
// let paris = new cookiesCalculation(`Paris`, 2.3, 38, 20);
// paris.customerAvg();
// paris.cookiePerHour();
// paris.outputToHTML();
// let lima = new cookiesCalculation(`Lima`, 4.6, i6, 2);
// lima.customerAvg();
// lima.cookiePerHour();
// lima.outputToHTML();