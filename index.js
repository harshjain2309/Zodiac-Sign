const zodiac=document.getElementById("zodiac");
const body=document.body;

const changeBackground=()=>{
     switch(zodiac.value){
        case "aries":
            body.style.backgroundColor="violet";
            break;

            case "tarus":
            body.style.backgroundColor="indigo";
            break;

            case "gemini":
            body.style.backgroundColor="yellow";
            break;

            case "cancer":
            body.style.backgroundColor="pink";
            break;

            case "leo":
            body.style.backgroundColor="green";
            break;

            case "virgo":
            body.style.backgroundColor="blue";
            break;

            case "libra":
            body.style.backgroundColor="red";
            break;

            case "scorpio":
            body.style.backgroundColor="orange";
            break;

            case "sagittarius":
            body.style.backgroundColor="purple";
            break;

            case "capricorn":
            body.style.backgroundColor="grey";
            break;

            case "aquarious":
            body.style.backgroundColor="lightblue";
            break;

            case "pisces":
            body.style.backgroundColor="gold";
            break;

            default:
                body.style.backgroundColor="white";
                break;
     }
};