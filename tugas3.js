function arrayCheck(firstValue, lastValue, arrayData){
    for (let i = 0; i <= arrayData.length; i++)
    
    if (arrayData.length < 5){
        console.log("jumlah data kurang")
        if(arrayData[i] === firstValue && arrayData[i] === lastValue ){
            console.log("tidak ada data")
        }
            else if (firstValue < lastValue){
                return arrayData.sort()
            }  else {
                console.log("Nilai akhir harus lebih besar dari nilai awal")
            }      
    }
    

    // if (firstValue < lastValue){
    //     return arrayData.sort()
    // } else {
    //     console.log("nilai akhir harus lebih besar dari nilai awal")
    // }

  


}
console.log(arrayCheck(5 , 6, [1,2,3,5]));

    