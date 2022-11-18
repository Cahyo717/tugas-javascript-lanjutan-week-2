function arrayCheck(firstValue, lastValue){
    const arrayData = [1,2,3,4,5];
    if (arrayData.length < 5){
        console.log("jumlah data array kurang")
    }
    for (let i = 0; i <= arrayData.length; i++){
            if(arrayData[i] === firstValue || arrayData[i] === lastValue ){
                console.log("tidak ada data")
            } 
    }

    if (firstValue < lastValue){
        return arrayData.sort()
    } else {
        console.log("data salah")
    }


}
arrayCheck(1 , 8);

    