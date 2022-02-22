var a, n1=0, n2=0, na=0
a=parseInt(prompt("quantidade de elementos:"))
for(var cont=1; cont<=1; cont++){
    if(cont==1){
        na=1
        n1=n2
        n2=na
    }
    else{
        na=n2+n1
        n1=n2
        n2=na
    }
}
alert(na)