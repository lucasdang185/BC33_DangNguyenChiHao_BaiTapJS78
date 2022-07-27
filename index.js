var arrNum = [];
function addNumber(){
    var getNum = +document.getElementById("txtNumber").value;
    arrNum.push(getNum);
    document.getElementById('result').innerHTML = arrNum;
}

/**
 * @param calc1: tính tổng các số dương 
 */
function calc1(){
    var total = 0;
    for(var i = 0 ; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            total += arrNum[i];
        }
    }
    document.getElementById('rs1').innerHTML = total;
}

/**
 * @param calc2L: Đếm số dương có trong mảng
 */
function calc2(){
    var count = 0;
    for(var i=0; i< arrNum.length ; i++){
        if(arrNum[i] > 0){
            count++;
        }
    }
    document.getElementById('rs2').innerHTML = count;
}
/**
 * @param calc3: Tìm số nhỏ nhất
 */
function calc3(){
    var min = arrNum[0];
    for(var i = 1; i < arrNum.length; i++){
        if(min > arrNum[i]){
            min = arrNum[i];
        }
    }
    document.getElementById('rs3').innerHTML = min;
}

/**
 * @param calc4: Tìm số dương nhỏ nhất
 */
 function calc4(){
    var minPositiveNum;
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            minPositiveNum = arrNum[i];
            break;
        }
    }
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0 && minPositiveNum > arrNum[i]){
            minPositiveNum = arrNum[i];
        }
    }

    document.getElementById('rs4').innerHTML = minPositiveNum;
}
/**
 * @param calc5: Tìm số chẵn cuối cùng trong mảng
 */
function calc5(){
    var t = 0 ;
    for(var i = arrNum.length-1; i< arrNum.length;i--){
        if(arrNum[i] >= 0 && arrNum[i] % 2 ===0){
            t = arrNum[i];
            break;
        }
    }
    document.getElementById('rs5').innerHTML = t;
}
/**
 * @param calc6: Hoán đổi vị trí trong mảng
 */
function calc6(){
    var index1 = +document.getElementById('txtIndex1').value;
    var index2 = +document.getElementById('txtIndex2').value;
    var temp = arrNum[index1];
    arrNum[index1] = arrNum[index2];
    arrNum[index2] = temp;
    
    document.getElementById('rs6').innerHTML= arrNum; 
}

/**
 * @param calc7: Sắp xếp vị trí
 */
function calc7(){
    for(var j= arrNum.length-1;j>=0;j--){
        for(var i = 0; i<j;i++){
            if(arrNum[i]> arrNum[i+1]){
                var temp = arrNum[i];
                arrNum[i] = arrNum[i+1];
                arrNum[i+1] = temp;
            }
        }
    }
    document.getElementById('rs7').innerHTML = arrNum;

}

/**
 * @param calc8: Tìm số nguyên tố đầu tiên
 */

function calc8(){
    var firstPrime;
    for(var i =0; i<arrNum.length;i++){
        if(arrNum[i]==2){
            firstPrime = arrNum[i];
            break;
        }else if( arrNum[i]>2 && arrNum[i] % 2 !== 0){
            firstPrime = arrNum[i];
            break;
        }
    }
    document.getElementById('rs8').innerHTML = firstPrime;
}

/**
 * @param calc9: Đếm số nguyên
 */
function calc9(){
    var count = 0;
    for(var i=0; i < arrNum.length ; i++){
        if(Number.isInteger(arrNum[i])=== true){
            count++;
        }
    }
    document.getElementById('rs9').innerHTML = count;
}

/**
 * @param calc10: so sánh số âm và số dương
 */

function calc10(){
    var countPositive = 0;
    var countNegative = 0;
    for(var i=0; i<arrNum.length ; i++){
        if(arrNum[i]>0){
            countPositive++;
        }
    }
    for(var j=0; j<arrNum.length ; j++){
        if(arrNum[j]<0){
            countNegative++;
        }
    }
    if(countNegative === countPositive){
        document.getElementById('rs10').innerHTML= 'Số dương = Số âm';
    }else if(countNegative > countPositive){
        document.getElementById('rs10').innerHTML= 'Số dương < Số âm';
    }else{
        document.getElementById('rs10').innerHTML= 'Số dương > Số âm';
    }
}