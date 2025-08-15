let abas = 0;
let abasps = 0;
let mults = 1;
const abast = document.getElementById("abas");
const abaspst = document.getElementById("abasps");
const sesidio = document.getElementById("sesidio")

let builds = {
    "cursor":[10, 0.1, 0, 1, 'BaseCost', 'BasePerSec', 'inline-block', 'cursor.webp'], //cost, persec, amountowned, multiplier, basecost, basepersec, visible, image
    "pablo":[100, 5, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "plaza":[1000, 30, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "marcus":[5000, 100, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "claudia":[30000, 1000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "senna":[1000000, 5000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "romuel":[35000000, 20000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "wagner":[1500000000, 100000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "dayane":[50000000000, 1000000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "lucas":[450000000000, 200000000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "natali":[5500000000000, 50000000000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp'],
    "helidiani":[230000000000000, 3000000000000, 0, 1, 'BaseCost', 'BasePerSec', 'none', 'cursor.webp']
};

const buildtemp = document.getElementById("buildtemplate")

for(var i=0;i<Object.keys(builds).length;i++){
    builds[Object.keys(builds)[i]][4]=builds[Object.keys(builds)[i]][0];
    builds[Object.keys(builds)[i]][5]=builds[Object.keys(builds)[i]][1];
    if(builds[Object.keys(builds)[i]][2]>0){
        builds[Object.keys(builds)[i]][0]=builds[Object.keys(builds)[i]][4]*builds[Object.keys(builds)[i]][3]*builds[Object.keys(builds)[i]][2];
    };
    const newit = buildtemp.cloneNode(true);
    newit.id = Object.keys(builds)[i];
    buildtemp.parentElement.appendChild(newit);
    newit.querySelector('img').src='images/'+builds[Object.keys(builds)[i]][7];
    newit.style.display='inline-block';
};

const upgs = {
    "cursor1":[100, 2, 0, false, 1, false, 'Adds 2x multiplier to cursor building and clicks'], //cost, multiplier, buildindexaffected, buyable, howmany[2]tounlock, bought, desc
    "cursor2":[100, 2, 0, false, 10, false, 'Adds 2x multiplier to cursor building and clicks'],
    "cursor3":[1000, 2, 0, false, 50, false, 'Adds 2x multiplier to cursor building and clicks'],
    "cursor4":[5000, 2, 0, false, 50, false, 'Adds 2x multiplier to cursor building and clicks'],
    "pablo1":[1000, 2, 1, false, 10, false, 'Adds 2x multiplier to Pablo'],
    "pablo2":[10000, 2, 1, false, 25, false, 'Adds 2x multiplier to Pablo'],
    "pablo3":[50000, 2, 1, false, 50, false, 'Adds 2x multiplier to Pablo'],
    "pablo4":[50000, 2, 1, false, 75, false, 'Adds 2x multiplier to Pablo']
};

const upgtemp = document.getElementById("upgtemplate");

for(var i=0;i<Object.keys(upgs).length;i++) {
    const newit = upgtemp.cloneNode(true);
    newit.id = Object.keys(upgs)[i];
    upgtemp.parentElement.appendChild(newit);
    newit.style.display=builds[Object.keys(builds)[i]][6];
}

function lazyround(num, decimals = 2) {
    if (num === null || num === undefined) return num;

    let value = Number(String(num).replace(/[, ]+/g, ""));
    if (isNaN(value)) return num;

    let absValue = Math.abs(value);
    if (absValue < 1000) return value.toString();

    let units = [
        ["mil", "mil"],
        ["milhão", "milhões"],
        ["bilhão", "bilhões"],
        ["trilhão", "trilhões"],
        ["quadrilhão", "quadrilhões"],
        ["quintilhão", "quintilhões"],
        ["sextilhão", "sextilhões"],
        ["septilhão", "septilhões"],
        ["octilhão", "octilhões"],
        ["nonilhão", "nonilhões"],
        ["decilhão", "decilhões"]
    ];

    let power = Math.floor(Math.log10(absValue) / 3);
    let index = Math.min(power - 1, units.length - 1);
    let scaledValue = value / Math.pow(1000, power);

    let rounded = scaledValue.toFixed(decimals).replace(/\.?0+$/, "");
    let roundedNum = Number(rounded);
    let unitName = (roundedNum === 1) ? units[index][0] : units[index][1];

    return rounded + " " + unitName;
};

function clickable() {
    abas+=1*mults;
    for(var i=0;i<Object.keys(builds).length;i++) {
        loadstuff("builds", document.getElementById(Object.keys(builds)[i]));
    };
    for(var i=0;i<Object.keys(upgs).length;i++) {
        loadstuff("upgs", document.getElementById(Object.keys(upgs)[i]));
    };
};

function loadstuff(what, who) {
    if(what == "upgs" && who.id!='upgtemplate') {
        who.querySelector("p").innerText = lazyround(upgs[who.id][0])+" Abas";
        if(upgs[who.id][3]==true&&upgs[who.id][5]==false){
            who.style.display='inline-block'
            if(abas<upgs[who.id][0]) {
                who.style.transition = "padding .3s ease, background-color .3s ease, box-shadow .3s ease, opacity .3s ease";
                who.style.opacity = .5;
            } else {
                who.style.transition = "padding .3s ease, background-color .3s ease, box-shadow .3s ease, opacity .3s ease";
                who.style.opacity = 1;
            };
        }else{
            who.style.display='none'
        };
    };
    if(what == "builds" && who.id!='buildtemplate') {
        who.querySelector("p").innerText = lazyround(Math.round(builds[who.id][0]*100)/100)+" Abas";
        who.querySelector("#conttitle").querySelector("b").innerText = String(who.id).charAt(0).toUpperCase()+String(who.id).slice(1);
        who.querySelector("#owned").innerText = builds[who.id][2];
        who.style.display=builds[who.id][6];
        if(abas<builds[who.id][0]) {
            who.style.transition = "padding .3s ease, background-color .3s ease, box-shadow .3s ease, opacity .3s ease";
            who.style.opacity = .5;
        } else {
            who.style.transition = "padding .3s ease, background-color .3s ease, box-shadow .3s ease, opacity .3s ease";
            who.style.opacity = 1;
        };
    };
    abasps=0;
    for(var i=0;i<Object.keys(builds).length;i++){
        abasps=abasps+builds[Object.keys(builds)[i]][1];
        if(abas>=builds[Object.keys(builds)[i]][4]/5){
            builds[Object.keys(builds)[i]][6]='inline-block';
        };
    };
    for(var i=0;i<Object.keys(upgs).length;i++){
        if(builds[Object.keys(builds)[upgs[Object.keys(upgs)[i]][2]]][2]>=upgs[Object.keys(upgs)[i]][4]&&upgs[Object.keys(upgs)[i]][3]==false&&upgs[Object.keys(upgs)[i]][5]==false){
            upgs[Object.keys(upgs)[i]][3]=true;
            loadstuff("upgs",document.getElementById([Object.keys(upgs)[i]]));
        };
    };
    abast.innerText = lazyround(Math.round(abas*100)/100);
    abaspst.innerText = lazyround(Math.round(abasps*100)/100);
};

const items = document.getElementsByClassName("item");

for(let i=0;i<items.length;i++) {
    loadstuff(items[i].parentElement.className, items[i]);
    items[i].addEventListener('mouseover', () => {
        if(items[i].parentElement.className=='upgs') {
            document.getElementById('maineffectdesc').innerText=upgs[items[i].id][6];
        } else if(items[i].parentElement.className=='builds') {
            document.getElementById('maineffectdesc').innerText=builds[items[i].id][2]+" "+items[i].id+"s produzindo "+builds[items[i].id][1]+" abas por segundo";
        };
    });
    items[i].addEventListener('mouseout', () => {
        document.getElementById('maineffectdesc').innerText='';
    });
};

function runWithDelay() {
    for(var i=0;i<Object.keys(builds).length;i++) {
        builds[Object.keys(builds)[i]][1]=builds[Object.keys(builds)[i]][5]*builds[Object.keys(builds)[i]][3]*builds[Object.keys(builds)[i]][2];
        abas+=builds[Object.keys(builds)[i]][1];
        loadstuff("builds", document.getElementById(Object.keys(builds)[i]));
    };
    for(var i=0;i<Object.keys(upgs).length;i++) {
        loadstuff("upgs", document.getElementById(Object.keys(upgs)[i]));
    };
    setTimeout(function(){
        runWithDelay()
    }, 1000);
}

runWithDelay();

function buy(what, who) {
    if(what == "upgs") {;
        if(abas >= upgs[who.id][0] && upgs[who.id][3] == true && upgs[who.id][5] == false) {
            abas -= upgs[who.id][0];
            if(upgs[who.id][2]==0) {
                mults += upgs[who.id][1]-1;
            }
            builds[Object.keys(builds)[upgs[who.id][2]]][3]=builds[Object.keys(builds)[upgs[who.id][2]]][3]*upgs[who.id][1];
            upgs[who.id][5]=true;
            builds[Object.keys(builds)[upgs[who.id][2]]][1]=builds[Object.keys(builds)[upgs[who.id][2]]][5]*builds[Object.keys(builds)[upgs[who.id][2]]][3]*builds[Object.keys(builds)[upgs[who.id][2]]][2];
            abaspst.innerText=abasps;
            loadstuff(what, who);
        }
    }
    if(what == "builds") {
        if(abas >= builds[who.id][0]) {
            abas -= builds[who.id][0];
            builds[who.id][2]+=1;
            builds[who.id][0]=builds[who.id][4]*Math.pow(1.15,builds[who.id][2]);
            builds[who.id][1]=builds[who.id][5]*builds[who.id][3]*builds[who.id][2];
            loadstuff(what, who);
        }
    }
}