    const name = ['Abigail' , 'Alexandra', 'Alisson', 'Amanda', 'Cahyo']
    const arr = [];
    const findNames = (par1, par2, nama) => { 
    const nameFilter = name.filter((name) => name.includes(par1)).slice(0, par2)
    console.log(`Data ${nama}`);
    return nameFilter;
    
}

function conditional(callback){
    callback(nama);
}


console.log(findNames('a', 3, "Array"));


