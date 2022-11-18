function arrayCheck(firstValue, lastValue, arrayData){  
    let arrayDataBetween = []
    if (firstValue < lastValue) {
        if (arrayData.length > 5) {
            for (let i=0; i < arrayData.length; i++) {
                if (arrayData[i] > firstValue && arrayData[i] < lastValue) {
                    arrayDataBetween.push(arrayData[i])
                }
            }
            if (arrayDataBetween.length !== 0) {
                console.log(arrayDataBetween.sort())
            } else {
                console.log("Nilai tidak ditemukan")
            }
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        }
    } else {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }  
  
 } 
 arrayCheck(1, 8, [11,12,13,14,19,20]);