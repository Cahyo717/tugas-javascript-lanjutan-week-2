function arrayCheck(firstValue, lastValue, arrayData){
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
        console.log("nilai akhir harus lebih besar dari nilai awal")
    }

  


}
arrayCheck(15 , 8, [1,2,3,5]);

    