var ansModal = new bootstrap.Modal(document.getElementById('ansModal'))



document.getElementById("calculate").onclick = function(){
    var opr  = parseInt (document.getElementById('operator').value)
    var n1 = parseFloat(document.getElementById('num1').value)
    var n2 = parseFloat(document.getElementById('num2').value)
    var ans


    switch (opr){
    case 1:
        ans= n1 + n2;
        console.log(n1+" + "+n2+" = "+ans);
        break;
    case 2:
        ans= n1 - n2;
        console.log(n1+" - "+n2+" = "+ans);
        break;
    case 3:
        ans= n1 * n2;
        console.log(n1+" * "+n2+" = "+ans);
        break;
    case 4:
        ans= n1 / n2;
        console.log(n1+" / "+n2+" = "+ans);
        break;
    }

    ansModal.show();
    document.getElementById('ansDisplay').innerHTML="Your ans is: <br><span>"+ans+"</span>"
    
}