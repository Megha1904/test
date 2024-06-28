let time = 20;

if (time < 12) {
    console.log("Good morning!");
} else if (time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}


let month = 2;
let monthName;

switch (month) {
    case 1:
        monthName = "Janurary";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthNameName = "Unknown";
}
console.log("Month is " + monthName);

let coupon = "OFFER10";
console.log("coupon", coupon)
if (coupon == "OFFER10") {
    console.log("Offer of 10%");
} else if (coupon == "OFFER20") {
    console.log("Offer is of 20%");
}
else if
    (coupon == "OFFER30") {
    console.log("Offer is of 30%")

}

else {
    console.log("NO OFFER Availabel");
}