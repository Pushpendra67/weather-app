const temperateField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");
const humidityField=document.querySelector(".humidity");
let target="Ghaziabad"
const fetchData=async(target)=>{
 try{  const url=`https://api.weatherapi.com/v1/current.json?key=8f5cc300cfae470bbf9183622241401&q=${target}`
    const response=await fetch(url);
    const data =  await response.json();
    console.log(data);

    const{current:{temp_c, humidity,condition:{text,icon}},
    location:{name,localtime},

}=data;
 updateDom(temp_c, humidity,name, localtime,icon,text);
}

catch(e){
    alert("Location not found. Please reEnter location with correct spell");
}
};






function updateDom(temperature,humidity,city,time,emoji,text){
    temperateField.innerText=`${temperature}°C`;
    humidityField.innerText=`Humidity: ${humidity}`;
    cityField.innerText=city;
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    const exactDay=new Date(exactDate).getDay();
    console.log(getDayFull(4));
    dateField.innerText=`${exactTime} - ${getDayFull(exactDay)} ${exactDate}`;
    emojiField.src=emoji;
    weatherField.innerText=text;
    console.log(time);
}
fetchData(target);

function getDayFull(num){
    switch(num){
        case 0:
        return "Sunday";

        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
                return "Friday";
        case 6:
                return "Saturday";

        default:
            return "Aadi Gurjar";
    }

}
const search=(e)=>{
    e.preventDefault();
    target=searchField.value;
    fetchData(target);

}

form.addEventListener("submit",search)