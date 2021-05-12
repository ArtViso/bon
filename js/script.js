const btnTin = document.querySelector('.btn_tin');
const modal = document.querySelector('.modal');
const btnTin2 = document.querySelector('.btnTin2');
const modal2 = document.querySelector('.modal2');
const btnTin3 = document.querySelector('.btnTin3');
const modal3 = document.querySelector('.modal3');

btnTin.onclick = function(){
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
};
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};
btnTin2.onclick = function(){
    modal2.style.display = "block";
    document.body.style.overflow = 'hidden';
};
window.onclick = function(event){
    if(event.target == modal2){
        modal2.style.display = 'none';
        document.body.style.overflow = '';
    }
};
btnTin3.onclick = function(){
    modal3.style.display = "block";
    document.body.style.overflow = 'hidden';
};
window.onclick = function(event){
    if(event.target == modal3){
        modal3.style.display = 'none';
        document.body.style.overflow = '';
    }
};