const btnTin = document.querySelector('.btn_tin');
const modal = document.querySelector('.modal');
const modalpos = document.querySelector('.modal_pos');

const btnTin2 = document.querySelector('.btn_tin2');
const modal2 = document.querySelector('.modal2');
const modalpos2 = document.querySelector('.modal_pos2');

const btnTin3 = document.querySelector('.btnTin3');
const modal3 = document.querySelector('.modal3');
const modalpos3 = document.querySelector('.modal_pos3');

const bnst = document.querySelector('#bnst');
bnst.addEventListener('animationend' ,()=>{

const image = document.querySelector('#image');
const image2 = document.querySelector('#image2');
image.classList.add("imgAll");
image2.classList.add("imgAll");

const imgLinks = [
    '/peck/4.png',
    '/peck/5.png',
    '/peck/1.png'
];

const delay = 3000;
let currentIndex = 0;
    setInterval(function() {
        image.src = imgLinks[currentIndex];
        currentIndex++;
        if(currentIndex >= imgLinks.length) {
            currentIndex = 0;
        }
}, delay);
const imgLinks2 = [
    '/peck/3.png ',
    '/peck/6.png',
    '/peck/2.png'
];

let currentIndex2 = 0;
    setInterval(function() {
        image2.src = imgLinks2[currentIndex2];
        currentIndex2++;
        if(currentIndex2 >= imgLinks.length) {
            currentIndex2 = 0;
        }
}, delay);
});

const ib1 = document.querySelector('.icon_box_back');
const ib2 = document.querySelector('.icon_box_back2');
const ib3 = document.querySelector('.icon_box_back3');

ib1.addEventListener('click', ()=>{
    ib1.style.background = '#1D7A38';
    document.getElementById("myImage").src="/img/inv1.png";
    ib2.style.background = '#E9F6E9';
    document.getElementById("myImage2").src="/img/plastic.png";
    ib3.style.background = '#E9F6E9';
    document.getElementById("myImage3").src="/img/glass.png";
});
ib2.addEventListener('click', ()=>{
    ib1.style.background = '#E9F6E9';
    document.getElementById("myImage").src="/img/tin.png";
    ib2.style.background = '#1D7A38';
    document.getElementById("myImage2").src="/img/inv2.png";
    ib3.style.background = '#E9F6E9';
    document.getElementById("myImage3").src="/img/glass.png";
});
ib3.addEventListener('click', ()=>{
    ib1.style.background = '#E9F6E9';
    document.getElementById("myImage").src="/img/tin.png";
    ib2.style.background = '#E9F6E9';
    document.getElementById("myImage2").src="/img/plastic.png";
    ib3.style.background = '#1D7A38';
    document.getElementById("myImage3").src="/img/inv3.png";
});

btnTin.addEventListener('mouseover',()=>{
    modal.style.display = "block";
    modalpos.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
btnTin.addEventListener('mouseout',(e)=>{
    modal.style.display = 'none';
    modalpos.style.display = 'none';
    document.body.style.overflow = '';

});

btnTin2.addEventListener('mouseover',()=>{
    modal2.style.display = "block";
    modalpos2.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
btnTin2.addEventListener('mouseout',(e)=>{
    modal2.style.display = 'none';
    modalpos2.style.display = 'none';
    document.body.style.overflow = '';
});

btnTin3.addEventListener('mouseover',()=>{
    modal3.style.display = "block";
    modalpos3.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
btnTin3.addEventListener('mouseout',(e)=>{
    modal3.style.display = 'none';
    modalpos3.style.display = 'none';
    document.body.style.overflow = '';
});


    