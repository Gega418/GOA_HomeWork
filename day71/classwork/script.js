// prompt ფუნქციის საშუალებით მომხმარებელს შემოაყვანინებთ ჯერ რამდენი პაროლის დაგენერირება სურს,ხოლო შემდეგ რამდენი სიმბოლოსგან უნდა შედგებოდეს პაროლი

function generateAnyPassword(length){
    const asoebi = "qwertyuiopasdfghjklzxcvbnm,./;'[]\!@#$%^&*()|`1234567890QWERTYUIOPASDFGHJKLZXCVBNM><?:{}=+-_"
    let password = "";

    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * asoebi.length)
        password += asoebi[randomIndex]
    }
    return password
}
let count = prompt("რამდენი პაროლის შექმნა გინდა?");
let length = prompt("რა სიგრძის იყოს პაროლი?");

for (let i = 0; i < count; i++) {
    console.log(generateAnyPassword(length));
}
