var porte, auxP, check, totalE, ValorF, desc, fid, qnt, input

check = document.getElementsByClassName("extras")

function extraF(){

    var unha=0, tosa=0, xampu=0

    if(check[0].checked){
        unha = 5
    }

    if(check[1].checked){
        tosa = 10
    }

    if(check[2].checked){
        xampu = 15
    }

    totalE = (unha + tosa + xampu)
}
function porteF (){

    auxP = document.getElementById("tam").value

    if (auxP == "Pequeno"){
        porte = 30
    }

    else if(auxP == "Médio"){
         porte = 40
    }

    else if (auxP == "Grande"){
        porte = 50		
    }

}
function Fid (){

    var f = document.getElementsByClassName("fidelidade"), input = document.getElementById("input").value
    input = parseInt(input)

    if(f[0].checked){
        fid = 0.05
        qnt = 2
    }

    else if(f[1].checked){
        fid = 0.1
        qnt = 3
    }

    else if(f[2].checked){
        fid = 0.15
        qnt = 4
    }

    else if(f[3].checked){
        fid = 0.2
        qnt = input
        
    }
    else {
        fid = 0
        qnt = 1
    }

}
function final (){

    ValorF = (porte + totalE)*qnt

    desc = ValorF*fid

    ValorF = ValorF - desc
}
function Total(){
    var tot = document.getElementById("tot");
    tot.innerHTML = "R$"+ValorF+",00";
    }