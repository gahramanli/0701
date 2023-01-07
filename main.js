let count=0;

document.getElementById('btn').onclick=function(){
    
    count++;

        if (count%2 != 0) {
            document.getElementById('box').style.width="100px";
            document.getElementById('box').style.height="100px";
            document.getElementById('box').style.backgroundColor="black";
            document.getElementById('box').style.display="flex";
        }
        else{
            document.getElementById('box').style.display="none";
    
        }
    }
    


