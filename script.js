var horoscopes = [ "Welcome to the first day of the rest of your life Aries, you are doomed to an eternity of reading poorly made horoscopes on poorly made websites",
    "It seems like your lucky day Taurus. No trick for you. I suggest you go dancing with someone close to you. Hope you don't have any accidents ;)",
    "Hello there, Gemini... I hope you don't find anything HAZARDOUS in your candy this year! Examine your treats carefully",
    "This website contains content known to the state of California to cause cancer, have fun with that knowledge Cancer", "Leo, the lion costume you wear every year will be laughed at by all of your peers and you will be egged.",
    "Your friends love you Virgo, too bad youre still doomed", "Libra, doomed to a year of spending every waking monet in a library", "Scorpio, only the weird candy from Texas with scorpions in it for you", "Sagittarius, you have a lucky day, you're only doomed to always be bitten by black cats",
    "Capricorn, no punishment, you've been a good little child", "Aquarius, be careful when drinking things, you can drown in only two inches of water", "Pisces, be careful with fire, wouldn't want anything to get too hot"];
var images = [ "<img src='Images/aries.png' width=200px>","<img src='Images/taurus.png' width=200px>","<img src='Images/gemini.png' width=200px>","<img src='Images/cancer.png' width=200px>","<img src='Images/leo.png' width=200px>","<img src='Images/virgo.png' width=200px>","<img src='Images/libra.png' width=200px>",
    "<img src='Images/scorpio.jpg' width=200px>","<img src='Images/sagitarius.png' width=200px>","<img src='Images/capricorn.png' width=200px>","<img src='Images/aquarius.png' width=200px>","<img src='Images/picese.png' width=200px>" ];




function onSubmit() {
    var birthdayday = document.getElementById("day1").value;
    var birthmonth = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var age = 2018 - year;
    var valid = isValid(birthdayday, birthmonth);
    if(valid == false){
        document.getElementById("Div1").innerHTML = "Please enter a valid birthday";
    }else{
        var isBirthday = birthday(birthmonth, birthdayday);
        if(isBirthday == true){
            document.getElementById("Div1").innerHTML = "Greetings " + name + ". Happy birthday! Today you are: " + age;
        }else{
            document.getElementById("Div1").innerHTML = "Greetings " + name;
        }
        var signis = determineSign(birthdayday, birthmonth);
        var horoscopefound = determineHoroscope(signis);
        document.getElementById("Div2").innerHTML = horoscopefound;
        var source = determineImage(signis);
        document.getElementById("Div3").innerHTML = source;
    }
}





function determineSign(x, y){
    if((y == 2 && x >= 21) || (y == 3 && x <= 20)){
        whatsign = "Aries";
        return whatsign;
    }
    if((y == 3 && x >= 21) || (y == 4 && x <= 21)){
        whatsign = "Taurus";
        return whatsign;
    }
    if((y == 4 && x >= 22) || (y == 5 && x <= 21)){
        whatsign = "Gemini";
        return whatsign;
    }
    if((y == 5 && x >= 22) || (y == 6 && x <= 22)){
        whatsign = "Cancer";
        return whatsign;
    }
    if((y == 6 && x >= 23) || (y == 7 && x <= 22)){
        whatsign = "Leo";
        return whatsign;
    }
    if((y == 7 && x >= 23) || (y == 8 && x <= 22)){
        whatsign = "Virgo";
        return whatsign;
    }
    if((y == 8 && x >= 23) || (y == 9 && x <= 22)){
        whatsign = "Libra";
        return whatsign;
    }
    if((y == 9 && x >= 23) || (y == 10 && x <= 21)){
        whatsign = "Scoripio";
        return whatsign;
    }
    if((y == 10 && x >= 22) || (y == 11 && x <= 21)){
        whatsign = "Sagittarius";
        return whatsign;
    }
    if((y == 11 && x >= 22) || (y == 0 && x <= 20)){
        whatsign = "Capricorn";
        return whatsign;
    }
    if((y == 0 && x >= 21) || (y == 1 && x <= 19)){
        whatsign = "Aquarius";
        return whatsign;
    }
    if((y == 1 && x >= 20) || (y == 2 && x <= 20)){
        whatsign = "Pisces";
        return whatsign;
    }
}

function determineHoroscope(x){
    if(x == "Aries"){
        return horoscopes[0]
    }
    if(x == "Taurus"){
        return horoscopes[1]
    }
    if(x == "Gemini"){
        return horoscopes[2]
    }
    if(x == "Cancer"){
        return horoscopes[3]
    }
    if(x == "Leo"){
        return horoscopes[4]
    }
    if(x == "Virgo"){
        return horoscopes[5]
    }
    if(x == "Libra"){
        return horoscopes[6]
    }
    if(x == "Scoripio"){
        return horoscopes[7]
    }
    if(x == "Sagittarius"){
        return horoscopes[8]
    }
    if(x == "Capricorn"){
        return horoscopes[9]
    }
    if(x == "Aquarius"){
        return horoscopes[10]
    }
    if(x == "Pisces"){
        return horoscopes[11]
    }
}


function determineImage(x){
    if(x == "Aries"){
        return images[0]
    }
    if(x == "Taurus"){
        return images[1]
    }
    if(x == "Gemini"){
        return images[2]
    }
    if(x == "Cancer"){
        return images[3]
    }
    if(x == "Leo"){
        return images[4]
    }
    if(x == "Virgo"){
        return images[5]
    }
    if(x == "Libra"){
        return images[6]
    }
    if(x == "Scoripio"){
        return images[7]
    }
    if(x == "Sagittarius"){
        return images[8]
    }
    if(x == "Capricorn"){
        return images[9]
    }
    if(x == "Aquarius"){
        return images[10]
    }
    if(x == "Pisces"){
        return images[11]
    }
}

function isValid(x, y){
    if((y == 3 || y == 8 || y == 5 || y == 10) && (x == 31)){
        return false;
    }else{
        if(y == 1 && x > 28){
            return false;
        }else{
            return true;
        }
    }
}

function birthday(x, y){
    var Now = new Date();
    var today = Now.getDay();
    var thisMonth = Now.getMonth();
    if(y == today && x == thisMonth){
        return true;
        console.log(Now + today + thisMonth)
    }else{
        return false;
        console.log(Now + today + thisMonth)
    }
}