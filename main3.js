let count=0;

document.getElementById('myButton').onclick=function(){
    count+=1;

        if(count != 0){
            if (count%2!=1) {

                document.getElementById('box').style.display="flex";
            
            }
            else{
                document.getElementById('box').style.display="none";
            
            }

        }
        else{
            document.getElementById('box').style.display="none";
            
        }
}