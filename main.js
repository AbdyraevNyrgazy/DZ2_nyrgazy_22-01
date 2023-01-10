let masiv = [10, 15, 20, 85, 12, 51, 22, 55,67,90 ,1]
for (let i = 0; i < masiv.length; i++){
    let number = String(masiv[i])
    let firstnum = number[0]
    if (firstnum == 1 || firstnum == 2 || firstnum == 5){
        console.log(masiv[i])
    }

}

for (let n of masiv){
    // if (n=== [1,2,5](n)){
    //     console.log (n)
    // }

}


for (let i=20;i>=0;i--) {
    console.log(i)
}

let color = prompt(' введите цвет')
    if(color==='красный'){
        console.log("стоп")
    }else if (color=== 'желтый'){
        console.log("подождите")
    }else if (color==='зеленый'){
        console.log("газуй!!!")
    }else {
        console.log("ОШИБКА, введите цвет")
    }
