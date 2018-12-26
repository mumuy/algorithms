//最简整数比
function simple(a,b){
    var ma = 1,mb = 1;
    a += '';
    b += '';
    if(a.indexOf('/')>-1){
        ma = +a.split('/')[1];
    }else if(a.indexOf('.')>-1){
        ma = Math.pow(10,a.split('.')[1].length);
    }
    if(b.indexOf('/')>-1){
        mb = +b.split('/')[1];
    }else if(b.indexOf('.')>-1){
        mb = Math.pow(10,b.split('.')[1].length);
    }
    a = eval(a)*ma*mb;
    b = eval(b)*ma*mb;
    var c = (function(a,b){
        var c;
        if(a<b){
            b = [a,a=b][0];
        }
        while(c = a % b){
            a = b;
            b = c;
        }
        return b;
    })(a,b);
    if(!a){
        return a+'/'+b;
    }
    return (a/c)+'/'+(b/c);
}
console.log(simple(4,24));

//将10进制转成其他进制（parseInt只支持2-36）
function parseFromDecimal(scale,decimalNumber){
    var scale64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!";
    var result = '';
    do{
        result = scale64.charAt(decimalNumber % scale) + result;
        decimalNumber = Math.floor(decimalNumber/scale);
    }while(decimalNumber);
    return result;
}
