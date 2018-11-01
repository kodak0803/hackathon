var buttonClick1 = document.getElementsByClassName("1");
var buttonClick2 = document.getElementsByClassName("2");
var buttonClick3 = document.getElementsByClassName("3");
var buttonClick4 = document.getElementsByClassName("4");
var buttonClick5 = document.getElementsByClassName("5");
var buttonClick6 = document.getElementsByClassName("6");
var buttonClick7 = document.getElementsByClassName("7");
var buttonClick8 = document.getElementsByClassName("8");
var buttonClick9 = document.getElementsByClassName("9");
var buttonClick10 = document.getElementsByClassName("10");
var buttonClick11 = document.getElementsByClassName("11");
var buttonClick12 = document.getElementsByClassName("12");

var message1 = document.getElementsByClassName("message1")
var message2 = document.getElementsByClassName("message2")
var message3 = document.getElementsByClassName("message3")
var message4 = document.getElementsByClassName("message4")
var message5 = document.getElementsByClassName("message5")
var message6 = document.getElementsByClassName("message6")

var image1 = document.getElementsByClassName("imagine1")
var image2 = document.getElementsByClassName("imagine2")
var image3 = document.getElementsByClassName("imagine3")
var image4 = document.getElementsByClassName("imagine4")
var image5 = document.getElementsByClassName("imagine5")
var image6 = document.getElementsByClassName("imagine6")

var info1 = document.getElementsByClassName("info1")
var info2 = document.getElementsByClassName("info2")
var info3 = document.getElementsByClassName("info3")
var info4 = document.getElementsByClassName("info4")
var info5 = document.getElementsByClassName("info5")
var info6 = document.getElementsByClassName("info6")

var right = []
var wrong = []
    

// image1[0].addEventListener("click", () => {
//     info1[0].textContent = "“12”	All people should see a number 12, including those with total color blindness – If someone said they can’t see something, or saw something else – they are fibbing:)";
//     info2[0].style.display = "none";
//     info3[0].style.display = "none";       
//     info4[0].style.display = "none";       
//     info5[0].style.display = "none";       
//     info6[0].style.display = "none";       
// })
// image2[0].addEventListener("click", () => {
//     info2[0].textContent = "“8”	Those with normal color vision see an 8.";

// })


buttonClick1[0].addEventListener("click", () => {
    console.log("Ez");
    // message1[0].textContent = "Giỏi đấy";
    if (!right.includes("12")){
        right.push("12")
    }
    
    
    buttonClick4[0].disabled = true;
})
buttonClick2[0].addEventListener("click", () => {
    console.log("Stupid");
    // message2[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("8")) {
        wrong.push("8")
    }
    buttonClick5[0].disabled = true;
})
buttonClick3[0].addEventListener("click", () => {
    console.log("Ez");
    // message3[0].textContent = "Giỏi đấy";
    if (!right.includes("29")){
        right.push("29")
    }
    buttonClick6[0].disabled = true;
})

buttonClick4[0].addEventListener("click", () => {
    console.log("Stupid");
    // message1[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("12")) {
        wrong.push("12")
    }
    buttonClick1[0].disabled = true;
})
buttonClick5[0].addEventListener("click", () => {
    console.log("Ez");
    // message2[0].textContent = "Giỏi đấy";
    if (!right.includes("8")) {
        right.push("8")
    }
    buttonClick2[0].disabled = true;
})
buttonClick6[0].addEventListener("click", () => {
    console.log("Stupid");
    // message3[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("29")) {
        wrong.push("29")
    }
    buttonClick3[0].disabled = true;
})


buttonClick7[0].addEventListener("click", () => {
    console.log("Ez");
    // message4[0].textContent = "Giỏi đấy";
    if (!right.includes("5")) {
        right.push("5")
    }
    buttonClick10[0].disabled = true;
})
buttonClick8[0].addEventListener("click", () => {
    console.log("Stupid");
    // message5[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("3")) {
        wrong.push("3")
    }
    buttonClick11[0].disabled = true;
})
buttonClick9[0].addEventListener("click", () => {
    console.log("Ez");
    // message6[0].textContent = "Giỏi đấy";
    if (!right.includes("15")) {
        right.push("15")
    }
    buttonClick12[0].disabled = true;
})
buttonClick10[0].addEventListener("click", () => {
    console.log("Stupid");
    // message4[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("5")) {
        wrong.push("5")
    }
    buttonClick7[0].disabled = true;
})
buttonClick11[0].addEventListener("click", () => {
    console.log("Ez");
    // message5[0].textContent = "Giỏi đấy";
    if (!right.includes("3")) {
        right.push("3")
    }
    buttonClick8[0].disabled = true;
})
buttonClick12[0].addEventListener("click", () => {
        console.log("Stupid");
    // m/essage6[0].textContent = "kiểm tra mắt đi";
    if (!wrong.includes("15")) {
        wrong.push("15")
    }
    buttonClick9[0].disabled = true;
})




var messages = document.querySelectorAll(".message");


function showRes() {
    if (right.length == 6 ) {
        alert("Mắt m bình thường")
    }
    if (wrong.includes("12")) {
        alert("nghiêm túc dùm");
    }
    if (wrong.includes("8")) {
        alert("mù cmnr");
    }
    if (wrong.includes("29")) {
        alert("mù cmnr");
    }
    if (wrong.includes("5")) {
        alert("mù cmnr");
    }
    if (wrong.includes("3")) {
        alert("mù cmnr");
    }
    if (wrong.includes("15")) {
        alert("mù cmnr");
    }

}