let turn = false;
let victory = false;
let counter = 0;



const handleClick = (event) => {
    const {id} = event.target;
    const div = document.getElementById(id);

    if (div.innerText === "" && victory === false) {
        div.innerText = turn ? "X" : "O";
        verifyWinner();
        turn = !turn;
    }
}


const verifyWinner = () => {
    counter ++;
    const div1 = document.getElementById("1");
    const div2 = document.getElementById("2");
    const div3 = document.getElementById("3");
    const div4 = document.getElementById("4");
    const div5 = document.getElementById("5");
    const div6 = document.getElementById("6");
    const div7 = document.getElementById("7");
    const div8 = document.getElementById("8");
    const div9 = document.getElementById("9");
    
    const play1 = div1.innerText === div2.innerText && div1.innerText === div3.innerText && div1.innerText !== "";
    const play2 = div4.innerText === div5.innerText && div4.innerText === div6.innerText && div4.innerText !== "";
    const play3 = div7.innerText === div8.innerText && div7.innerText === div9.innerText && div7.innerText !== "";
    const play4 = div1.innerText === div4.innerText && div1.innerText === div7.innerText && div1.innerText !== "";
    const play5 = div2.innerText === div5.innerText && div2.innerText === div8.innerText && div2.innerText !== "";
    const play6 = div3.innerText === div6.innerText && div3.innerText === div9.innerText && div3.innerText !== "";
    const play7 = div1.innerText === div5.innerText && div1.innerText === div9.innerText && div1.innerText !== "";
    const play8 = div3.innerText === div5.innerText && div3.innerText === div7.innerText && div3.innerText !== "";


   
if (play1) 
    {
    const line = document.getElementById("line");
        line.style.height = "10px";
        line.style.width = "580px";
        line.style.top = "90px";
        line.style.left = "10px";
    }
    

    if (play2) 
    {
    const line = document.getElementById("line");
        line.style.height = "10px";
        line.style.width = "580px";
        line.style.top = "290px";
        line.style.left = "10px";
    }
    
    if (play3) 
    {
    const line = document.getElementById("line");
        line.style.height = "10px";
        line.style.width = "580px";
        line.style.top = "500px";
        line.style.left = "10px";
    }

    if (play4) 
    {
    const line = document.getElementById("line");
        line.style.height = "580px";
        line.style.width = "10px";
        line.style.top = "10px";
        line.style.left = "90px";
    }
    
    if (play5) 
    {
    const line = document.getElementById("line");
        line.style.height = "580px";
        line.style.width = "10px";
        line.style.top = "10px";
        line.style.left = "295px";
    }
    
    if (play6) 
    {
    const line = document.getElementById("line");
        line.style.height = "580px";
        line.style.width = "10px";
        line.style.top = "10px";
        line.style.left = "500px";
    }

    if (play7) 
    {
    const line = document.getElementById("line");
        line.style.height = "800px";
        line.style.width = "10px";
        line.style.top = "-90px";
        line.style.left = "300px";
        line.style.transform = "rotate(135deg)";
    }


    if (play8) 
    {
    const line = document.getElementById("line");
        line.style.height = "800px";
        line.style.width = "10px";
        line.style.top = "-90px";
        line.style.left = "290px";
        line.style.transform = "rotate(45deg)";
    }



    if (play1 || play2 || play3 || play4 || play5 || play6 || play7 || play8) 
    {
        victory = true; 
            alert(`The player ${turn ? "X" : "O"} has won!`);
    }else{
        if(counter == 9){
            alert("Upss! No more moves");
        }
    }






}







const reload = () => {
    const div1 = document.getElementById("1");
    const div2 = document.getElementById("2");
    const div3 = document.getElementById("3");
    const div4 = document.getElementById("4");
    const div5 = document.getElementById("5");
    const div6 = document.getElementById("6");
    const div7 = document.getElementById("7");
    const div8 = document.getElementById("8");
    const div9 = document.getElementById("9");

    const line = document.getElementById("line");
    line.style.height = "0px";
    line.style.width = "0px";
    line.style.top = "0px";
    line.style.left = "0px";


    div1.innerText = "";
    div2.innerText = "";
    div3.innerText = "";
    div4.innerText = "";
    div5.innerText = "";
    div6.innerText = "";
    div7.innerText = "";
    div8.innerText = "";
    div9.innerText = "";

    turn = false;
    victory = false;
    counter = 0;
}