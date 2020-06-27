function getNumber(num){
    var res = document.getElementById("result");
    res.value += num;
}


function clearNum(){
    var res = document.getElementById("result");
    res.value = "";
}

function getResult(){
    var res = document.getElementById("result");
    res.value = eval(res.value);
}

function opposite(){
    var res = document.getElementById("result");
    var n = res.value;
    n = n * -1;
    res.value = n;
}
