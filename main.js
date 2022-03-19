// Text to ASCII converter
const letters = {
    "\x20":"032",
    "!":"033",
    '\"':"034",
    "#":"035",
    "$":"036",
    "%":"037",
    "&":"038",
    "'":"039",
    "(":"040",
    ")":"041",
    "*":"042",
    "+":"043",
    ",":"044",
    "-":"045",
    ".":"046",
    "/":"047",
    "0":"048",
    "1":"049",
    "2":"050",
    "3":"051",
    "4":"052",
    "5":"053",
    "6":"054",
    "7":"055",
    "8":"056",
    "9":"057",
    ":":"058",
    ";":"059",
    "<":"060",
    "=":"061",
    ">":"062",
    "?":"063",
    "@":"064",
    A:"065",
    Ą:"260",
    B:"066",
    C:"067",
    Ć:"262",
    D:"068",
    E:"069",
    Ę:"280",
    F:"070",
    G:"071",
    H:"072",
    I:"073",
    J:"074",
    K:"075",
    L:"076",
    Ł:"321",
    M:"077",
    N:"078",
    Ń:"323",
    O:"079",
    Ó:"211",
    P:"080",
    Q:"081",
    R:"082",
    S:"083",
    Ś:"346",
    T:"084",
    U:"085",
    V:"086",
    W:"087",
    X:"088",
    Y:"089",
    Z:"090",
    Ź:"377",
    Ż:"379",
    "[":"091",
    "\\":"092",
    "]":"093",
    "^":"094",
    "_":"095",
    "`":"096",
    a:"097",
    ą:"261",
    b:"098",
    c:"099",
    ć:"263",
    d:"100",
    e:"101",
    ę:"281",
    f:"102",
    g:"103",
    h:"104",
    i:"105",
    j:"106",
    k:"107",
    l:"108",
    "ł":"322",
    m:"109",
    n:"110",
    ń:"324",
    o:"111",
    ó:"243",
    p:"112",
    q:"113",
    r:"114",
    s:"115",
    ś:"347",
    t:"116",
    u:"117",
    v:"118",
    w:"119",
    x:"120",
    y:"121",
    z:"122",
    ź:"378",
    ż:"380",
    "{":"123",
    "|":"124",
    "}":"125",
    "~":"126"
}
document.querySelector("input[name=utf-8]").addEventListener("keyup",_=>{
let val = document.querySelector("input[name=utf-8]").value;
let stru= "";
for(let i = 0; i<val.length;i++){
    stru+=`${letters[val[i]]}\t`;
}
document.querySelector("p[name=utftoascii]").innerHTML=stru;
});
// ASCII chars to text
document.querySelector("input[name=ascii]").addEventListener("keyup", _=>{
let val = document.querySelector("input[name=ascii]").value;
let stra= "";
let first  = 0;
let sec = 3;
val = String(val);
for(let i=0; i<val.length;i++){
    stra+=String(String.fromCharCode(val.substring(first, sec)));
    first+=4 ;
    sec += 4;
}
document.querySelector("p[name=asciitoutf]").innerHTML=stra;
})

const copy = document.querySelectorAll('.copy')
copy[0].addEventListener("click", _=>{
    navigator.clipboard.writeText(document.querySelectorAll('p')[0].textContent).then(_=>{
        alert(`Skopiowano tekst: ${document.querySelectorAll('p')[0].textContent}`);
    }, _=>{
        alert("Nie udało się skopiować");
    })
})
copy[1].addEventListener("click", _=>{
    navigator.clipboard.writeText(document.querySelectorAll('p')[1].textContent).then(_=>{
        alert(`Skopiowano tekst: ${document.querySelectorAll('p')[1].textContent}`);
    }, _=>{
        alert("Nie udało się skopiować");
    })
 })