function piramide(lines){
    let a = '*'
    let u = ''
    for(let i = 1; i <= lines; i++){
      for(let i = lines; i >= 1; i--){
        u += '_'
      }
        console.log(u.substring(0,lines-i),a,u.substring(0,lines-i))
        a += '**'  
      } 
} 
piramide(8)        