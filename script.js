const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const select = document.querySelectorAll(".container select");
const tocurr = document.querySelector("#contry");
const fromcurr = document.querySelector("#contry1");
const msg = document.querySelector(".msg");
const btn = document.querySelector("form button");
for(one of select){
    for(country in countryList){
        let newopt = document.createElement("option");
        newopt.innerText = country;
        newopt.value = country;
        if(one.name === "from" && country === "INR"){
            newopt.selected = "selected";
        }
        else if(one.name === "nations" && country === "USD"){
            newopt.selected = "selected";
        }
        one.append(newopt);
    }
   one.addEventListener("change", (e)=>{
    flagchange(e.target);
   });
}
const flagchange = (element)=>{
   let curr = element.value;
   let currreq = countryList[curr];
   let newsrc = `https://flagsapi.com/${currreq}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newsrc;

 }
 btn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    getexchangerate();
 });
 const getexchangerate = async()=>{

    let input = document.querySelector(" form input");
    let amount1 = parseFloat(input.value);
    amount2 = 1;
    if(amount1 < 0){
        amount1 = 1;
        input.value = "1";
    }

    //const URL = `${baseURL}/${tocurr.value.toLowerCase()}/${fromcurr.value.toLowerCase()}.json`;
    const URL = `https://api.frankfurter.app/latest?amount=${amount2}&from=${fromcurr.value}&to=${tocurr.value}`;
    const promise = await fetch(URL);
    let data = await promise.json();
    let amount = data["rates"];
    let fix = amount[tocurr.value];
    let final = fix*amount1;
    msg.innerText = `${amount1}${fromcurr.value} is ${final}${tocurr.value}`;
    

 }