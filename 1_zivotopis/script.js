let amalka = document.querySelector('.amalka')
let fotoAmalka = document.querySelector('.foto-amalka')

let jessi = document.querySelector('.jessi')
let fotoJessi = document.querySelector('.foto-jessi')

let lola = document.querySelector('.lola')
let fotoLola = document.querySelector('.foto-lola')

let ursul = document.querySelector('.ursul')
let fotoUrsul = document.querySelector('.foto-ursul')


let mysNaAm = () => {
  fotoAmalka.style.maxWidth = '200px'
  fotoAmalka.style.border = '6px solid #9ebbd8'
}
let mysZAm = () => {
  fotoAmalka.style.maxWidth = '150px'
  fotoAmalka.style.border = 'none'
}

let mysNaJes = () => {
  fotoJessi.style.maxWidth = '200px'
  fotoJessi.style.border = '6px solid #9ebbd8'
}
let mysZJes = () => {
  fotoJessi.style.maxWidth = '150px'
  fotoJessi.style.border = 'none'
}

let mysNaLol = () => {
  fotoLola.style.maxWidth = '200px'
  fotoLola.style.border = '6px solid #9ebbd8'
}
let mysZLol = () => {
  fotoLola.style.maxWidth = '150px'
  fotoLola.style.border = 'none'
}

let mysNaUrs = () => {
  fotoUrsul.style.maxWidth = '200px'
  fotoUrsul.style.border = '6px solid #9ebbd8'
}
let mysZUrs = () => {
  fotoUrsul.style.maxWidth = '150px'
  fotoUrsul.style.border = 'none'
}
amalka.addEventListener('mouseenter', mysNaAm )
amalka.addEventListener('mouseleave', mysZAm )

jessi.addEventListener('mouseenter', mysNaJes )
jessi.addEventListener('mouseleave', mysZJes )

lola.addEventListener('mouseenter', mysNaLol )
lola.addEventListener('mouseleave', mysZLol )

ursul.addEventListener('mouseenter', mysNaUrs)
ursul.addEventListener('mouseleave', mysZUrs )
