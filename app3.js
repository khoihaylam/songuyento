// let a=prompt("nhập dãy số chứa dấu phẩy,")
// let c=a.split(",")
// let sum=0
// let tong=0
// for (let i=0;i<=c.length;i++){
//     let number=Number(c[i])
//     if(number%2==0){
//         sum=sum+number;
        
//     }
// }
// console.log(`tong cac so chẵn ${sum}`)
// // kiểm tra số nguyên tố
// let n=Numberprompt("nhập n:")
// if (n<2){
//     console.log("k phai la so nguyen to")
// }

// let count=0
// for (let i=1;i<n+1;i++){
//     if (n%i==0){
//         count=count+1
//     }
// }
// if(count==2){
//     console.log(`la so nguyen to ${n}`)
// }
// else{
//     console.log(`k phai la so nguyen to ${n}`)
// }
// c2 dùng hàm
function songuyento(o){
    if (o<2){
        return false
    }
    for (let i=2;i<o;i++){
        if (o%i==0){
            return false
        }
    }
    return true
        

}
let o=Number(prompt("nhap so o"))
var p=songuyento(o)
if (p==true){
    console.log(` la so nguyen to ${o}`)
}
else{
    console.log(`k phai la so nguyen to ${o}`)
}