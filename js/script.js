
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')

hitung.addEventListener('click', function(){
    let a = alas.value 
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `L = 1/2 x a x t <br>
    L = 1/2 x ${a} x ${t} <br>
    L = ${l}`

})

const sisiA = document.getElementById('sisiA')
const sisiB = document.getElementById('sisiB')
const sisiC = document.getElementById('sisiC')
const jumlah = document.getElementById('jumlah')
const out = document.getElementById('out')

jumlah.addEventListener('click', function(){

    let S1 = sisiA.value
    let S2 = sisiB.value
    let S3 = sisiC.value
    let k = (parseInt(S1)+parseInt(S2)+parseInt(S3));
    out.innerHTML = `K = S1 + S2 + S3 <br>
    K = ${S1} + ${S2} + ${S3} <br>
    K = ${k}`
    
})

