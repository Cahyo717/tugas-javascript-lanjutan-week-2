function arrayCheck(firstValue, lastValue, arrayData){
    arrayData = [];
    if (array.length < 5){
        console.log("jumlah data array kurang")
    }
    for (let i = 0; i <= array.length; i++){
            if(array[i] === firstValue || array[i] === lastValue ){
                console.log("tidak ada data")
            } 
    }

    if (firstValue < lastValue){
        return array.sort()
    } else {
        console.log("data salah")
    }


}
arrayCheck(1 , 8, [1,2,3,4,5]);

    