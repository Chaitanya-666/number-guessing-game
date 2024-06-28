
let rm=Math.floor((Math.random()*100)+1);
let count=10;
let pre=[];
let oplabel=document.querySelectorAll('.oplabel');


function checkCorrect(event) {
   event.preventDefault();
    let ip=document.getElementById('main').value;
    if(ip>0&&ip<=100){
    count--;
    pre.push(ip);

    if(ip==rm&&count>0){
        alert(`wow you correctly guessed the number : ${rm}`);
        alert('please reload the page to try again :] ');
        
        return;
    }
    else if(count>=0){ 
        oplabel[0].textContent=`Previous guesses are : ${pre}`;
        oplabel[1].textContent=`Remaining Guesses : ${count}`;
        
    }

    else{
        alert("better luck next time please reload the page if u wish to try again");
        return;
    }
    }
    else{
        alert('please enter number in range of 1-100 ')

    }


}


