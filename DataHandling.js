let items = [
    "00000000000001000000,00001111000000000000,00000000000000100000,00000000000000100000,00000000000001000000,00001111000000000000,00001111000000000000,00000000000000100000", //1      VOLL
    "00000000000000001000,00000000000000000101,00000000000000001101,00000000000000000110,00000000000000001001,00000000000000001111,00000000000000001000,00000000000000000010", //2      ADD
    "00001011000000000000,00000001000000000000,00001010000000000000,00000101000000000000,00000001000000000000,00000100000000000000,00001011000000000000,00000010000000000000", //3      SUB
    "00000000000000001100,00000000000000001001,00000000000000000011,00000000000000001110,00000000000000001101,00000000000000001011,00000000000000001000,00000000000000000001", //6      DREH
    "00000000111100000000,00000000000000010000,00000000000010000000,00000000000000010000,00000000000010000000,00000000111100000000,00000000000010000000,00000000111100000000", //7      VOLL
    "10110000000000000000,11100000000000000000,01010000000000000000,11110000000000000000,00110000000000000000,11000000000000000000,11000000000000000000,01100000000000000000", //4      EKA
    "00000000111000000000,00000000101100000000,00000000101000000000,00000000100100000000,00000000011100000000,00000000000100000000,00000000101000000000,00000000111100000000", //5      SM
    "00000000000110000000,00000000001001000000,00000000001100100000,00000000011100100000,00000000100010000000,00000000111101000000,00000000010101000000,00000000100000100000", //13     VOLL    ADD
    "11011100000000000000,00011001000000000000,11000011000000000000,00111110000000000000,00101101000000000000,00011011000000000000,11110001000000000000,10100010000000000000", //28     SUB     DREH
    "11111101000000000000,00001110000000010000,00000011000001000000,00000101000000010000,00001011000001000000,11111110000000000000,00001110000001000000,11110011000000000000", //15     VOLL    EKA
    "00001011111100000000,00001110101000000000,00001010010100000000,00001110111000000000,00001001010000000000,00001000101000000000,00000101111000000000,00001011110000000000", //27     SUB     SM
    "01101110000000000000,11001100000000000000,10011100000000000000,01111011000000000000,11101110000000000000,11011010000000000000,00101111000000000000,01000001000000000000", //34     SM      DREH
    "10111111101000000000,00110000010000010000,10000000111001000000,11110000100100010000,10100000011001000000,01011111111100000000,01110000100001000000,00101111011000000000", //35     VOLL    ADD     SUB
    "10111011110000000000,11010011001000000000,01101000111000000000,01010101000100000000,11110101100000000000,10100000100100000000,01111011110000000000,10100001001100000000", //36     ADD     SUB     EKA
    "00001001010000001100,00000110100000000111,00000000000100001011,00001010111000001100,00001011110100000110,00001010101100001010,00000110001000001111,00000011010000000001", //38     EKA     SM      DREH
    "11001100101000001001,01000010001000000011,10001110001000000110,10101000011100001101,00110010001100001011,10011010001100000111,11100100110000000010,01001001100100000100"  //39     ADD     EKA     SM      DREH
];





let Settings = {
    item : 0,

    instPage : 0,

    intervalID : NaN,
    time : Date.now(),
    logTime : Date.now(),
    wm : true,
    constId : "mat-el9",
    constCode : ["00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000"]
}

let Participant = {
    VPCode : getVPCode(),
    user : "",
    version : 0,
    
    response : [],
    RT : [],
    log : "",

    phpCode : 0
}

function clearOptions() {
    for (let i = 0; i < 20; i++) {
        document.getElementById("cb-el"+(i+1)).checked = false;
        document.getElementById("opt-el"+(i+1)).classList.remove("optionen-element-check");
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function fillMat(i) {
    if (Settings.constCode[Settings.constId.split("-el")[1]-1][i] === "0") {
        Settings.constCode[Settings.constId.split("-el")[1]-1] = replaceAt(Settings.constCode[Settings.constId.split("-el")[1]-1],i,'1');
    }
    else {
        Settings.constCode[Settings.constId.split("-el")[1]-1] = replaceAt(Settings.constCode[Settings.constId.split("-el")[1]-1],i,'0');
    }
    let cvs = document.getElementById(Settings.constId);
    cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
    for (let j = 0; j < Settings.constCode[Settings.constId.split("-el")[1]-1].length; j++) {
        if (Settings.constCode[Settings.constId.split("-el")[1]-1].charAt(j) === "1") {
            selShape(cvs, j);
        }
    }
}

function getLocal() {
    let result = [];
    let temp = localStorage;
    for (let i = 0; i < temp.length; i++) {
        result.push(JSON.parse(temp.getItem(temp.key(i))));
    }
    return result;
}

function getResponse() {
    let result = "";
    for (let i = 0; i < 20; i++) {
        if (document.getElementById("cb-el"+(i+1)).checked == true) {
            result += "1";
        }
        else{
            result += "0";
        }
        
    }
    Participant.response.push(result);
    Participant.RT.push(getRT());

    if (Settings.wm) {
        let cvs = document.getElementById(Settings.constId);
        cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
        Settings.constCode=["00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000","00000000000000000000"];
    }
    protocol("send"+(Settings.item+1));
    
    if (Settings.item+1 < items.length) {
        Settings.item++;
        loadItem(items[Settings.item]);
        document.getElementById("item-position").innerHTML = "Item " + (Settings.item+1) + " von " + items.length;
        resetTime();
    } else {
        clearInterval(Settings.intervalID);
        sendResults();
        document.getElementById("stavmat-wrap").classList.toggle("hidden");
        document.getElementById("end").classList.toggle("hidden");
        // alert("End of demonstration");
    }
}

function getRT() {
    return Date.now() - Settings.time;
}

function getVPCode() {
	return Math.random().toString(36).substr(2, 9);
}

function jtc2(json) {
    const items = json;
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(items[0]);
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join('\t'));
    csv.unshift(header.join('\t'));
    csv = csv.join('\r\n');
    return csv;
}

function loadItem(itemCode) {
    clearOptions();
    let itemSplit = itemCode.split(",");
    for (let i = 0; i < itemSplit.length; i++) {
        const element = itemSplit[i];
        let cvs = document.getElementById("mat-el"+(i+1));
        cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
        
        for (let j = 0; j < element.length; j++) {
            if (element.charAt(j) === "1") {
                selShape(cvs, j);
            }
        }
        
    }
}

function openLock() {
    Participant.user = document.getElementById("lock-id").value;
    if (Participant.user.trim() === "download") {
        // download("download.csv",jtc2(getLocal()));
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
            console.log('file system open: ' + dirEntry.name);
            var isAppend = true;
            createFile(dirEntry, "fileToAppend.txt", isAppend);
        }, onErrorLoadFs);
    }
    else if (Participant.user.trim() === "download2") {
        // download("download.csv",jtc2(getLocal()));
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (cordova.file.dataDirectory) {
            console.log('file system open: ' + cordova.file.dataDirectory.name);
            var isAppend = true;
            createFile(cordova.file.dataDirectory, "fileToAppend.txt", isAppend);
        }, onErrorLoadFs);
    }
    else{
        document.getElementById("lockscreen").classList.toggle("hidden");
        document.getElementById("stavmat-wrap").classList.toggle("hidden");
        sendResults();
        Participant.phpCode = 1;
    }
}

function protocol(marker) {
    let rt = Date.now() - Settings.logTime;
    Settings.logTime = Date.now();
    Participant.log += marker + ":" + rt + ",";
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function resetTime() {
    Settings.time = Date.now();
}

function selShape(cvs, i, fill=true) {
    switch (i) {
        case 0: case 1: case 2: case 3:
            drawCorner(cvs,i);
            break;
        case 4: case 5: case 6: case 7:
            drawLine(cvs,i-4);
            break;
        case 8: case 9: case 10: case 11:
            drawBox(cvs,i-8);
            break;
        case 12: 
            drawShape(cvs,0,true);              
            break;
        case 13: 
            drawShape(cvs,0,false);              
            break;
        case 14: 
            drawShape(cvs,1,true);            
            break;
        case 15:
            drawShape(cvs,1,false);
            break;
        case 16: case 17: case 18: case 19:
            drawTriangle(cvs,i-16);
            break;
        default:
            break;
    }
}

function sendResults() {
    localStorage.setItem(Participant.VPCode,JSON.stringify(Participant));
}

function timelimit(seconds) {
    Settings.intervalID = setTimeout(() => {
        document.getElementById("stavmat-wrap").classList.toggle("hidden");
        document.getElementById("end").classList.toggle("hidden");
        getResponse();
        sendResults();
    }, seconds*1000);
}

function toggleCheck(id) {
    let cb = document.getElementById(id);
    if (cb.checked === false) {
        cb.checked = true;
    }
    else cb.checked = false;
}

function toggleCvs(id) {
    let cvs = document.getElementById(id);
    cvs.classList.toggle("optionen-element-check");
}

////////////////////////////////////////////////////

loadItem(items[Settings.item]);
for (let i = 1; i < 21; i++) {
    document.getElementById("opt-el"+i).addEventListener("click",function(e){       
        e.target.classList.toggle("optionen-element-check");
        toggleCheck("cb-el"+i);
        if (Settings.wm) fillMat(i-1);
        protocol("el"+i);
    },false);
    document.getElementById("cb-el"+i).addEventListener("click",function(){
        toggleCvs("opt-el"+i);
        if (Settings.wm) fillMat(i-1);
        protocol("el"+i);
    },false);
    
}