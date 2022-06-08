var distance=0;
var intervalId;
function startChange () {
    intervalId = setInterval(()=> {
        box.style.height= distance++ + 'px';
    },10)
}

function stopChange() {
    clearInterval(intervalId)
}

function stopFunc(eve) {
    // console.log(eve.key)
    if(eve.key == "Enter"){
        stopChange()
    }
}


var intervalDi;
function colorChange () {
    var colorArray = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    var hexColor = "#";
    for (var i = 0 ; i < 6 ; i++){
        var randomColor = Math.floor(Math.random()* colorArray.length);
        hexColor += colorArray[randomColor];
    }
        box2.style.background = hexColor ;

}

function widthHeightFunc () {
    heightValue = height_input.value
    widthValue = width_input.value
}
var intervalD;
var distance = 0;
function changeWidHeig  () {
    intervalD =  setInterval(() => {
        if(widthValue > distance ){
            box3.style.width = distance + 'px' ;

            if(heightValue > distance){

                box3.style.height = distance + 'px' ;
            }
            distance++;
        }
    }, 10);
}

function stopWidHieg (eventor) {
    if(eventor.key == " "){
        clearInterval(intervalD)
    }

}


var colorArray =  []
var randomColor ;
var myInterval;
function saveColors () {
    if (colorArray.length <= 5){
        colorArray.push(color_id.value)
    }
    if(colorArray.length == 5){
        myInterval =setInterval(()=>{
            prints_colors.innerHTML = text_id.value;
            randomColor = Math.floor(Math.random()*6);
            prints_colors.style.color = colorArray[randomColor]
            
        },100)
    }
}


function stopColors () {
    clearInterval(myInterval)
}

function stopFuncColors (evenColor) {
    if(evenColor.key==" "){
        stopColors ()
    }

}

