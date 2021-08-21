window.onload =  function(){

    let field = {
        width : Number(window.getComputedStyle(document.getElementsByClassName("main")[0]).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementsByClassName("main")[0]).getPropertyValue('height').replace("px","")),
    }

    let char = {
        left : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('left').replace("px","")),
        right : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('right').replace("px","")),
        top : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('top').replace("px","")),
        bottom : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('bottom').replace("px","")),
        width : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementsByClassName("char")[0]).getPropertyValue('height').replace("px","")),

        moveLeft(i){
            document.getElementsByClassName("char")[0].style["left"] = String(this.left+i)+"px";
            this.left+=i;
        },

        moveRight(i){
            document.getElementsByClassName("char")[0].style["left"] = String(this.left+i)+"px";
            this.left+=i;
        },

        moveTop(i){
            document.getElementsByClassName("char")[0].style["top"] = String(this.top+i)+"px";
            this.top+=i;
        },

        moveBottom(i){
            document.getElementsByClassName("char")[0].style["top"] = String(this.top+i)+"px";
            this.top+=i;
        }
    }

    let bl00 = {
        left : document.getElementById("el00").getBoundingClientRect().left,
        right : document.getElementById("el00").getBoundingClientRect().right,
        top : document.getElementById("el00").getBoundingClientRect().top,
        bottom : document.getElementById("el00").getBoundingClientRect().bottom,
        width : Number(window.getComputedStyle(document.getElementById("el00")).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementById("el00")).getPropertyValue('height').replace("px","")),

    }

    let bl09 = {
        left : document.getElementById("el09").getBoundingClientRect().left,
        right : document.getElementById("el09").getBoundingClientRect().right,
        top : document.getElementById("el09").getBoundingClientRect().top,
        bottom : document.getElementById("el09").getBoundingClientRect().bottom,
        width : Number(window.getComputedStyle(document.getElementById("el09")).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementById("el09")).getPropertyValue('height').replace("px","")),
    }

    let bl90 = {
        left : document.getElementById("el90").getBoundingClientRect().left,
        right : document.getElementById("el90").getBoundingClientRect().right,
        top : document.getElementById("el90").getBoundingClientRect().top,
        bottom : document.getElementById("el90").getBoundingClientRect().bottom,
        width : Number(window.getComputedStyle(document.getElementById("el90")).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementById("el90")).getPropertyValue('height').replace("px","")),
    }

    let bl99 = {
        left : document.getElementById("el99").getBoundingClientRect().left,
        right : document.getElementById("el99").getBoundingClientRect().right,
        top : document.getElementById("el99").getBoundingClientRect().top,
        bottom : document.getElementById("el99").getBoundingClientRect().bottom,
        width : Number(window.getComputedStyle(document.getElementById("el99")).getPropertyValue('width').replace("px","")),
        height : Number(window.getComputedStyle(document.getElementById("el99")).getPropertyValue('height').replace("px","")),
    }

    let mazeLeft = [bl00.left,bl09.left,bl90.left,bl99.left]
    let mazeRight = [bl00.right,bl09.right,bl90.right,bl99.right]
    let mazeTop = [bl00.top,bl09.top,bl90.top,bl99.top]
    let mazeBottom = [bl00.bottom,bl09.bottom,bl90.bottom,bl99.bottom]
    let mazeWidth = [bl00.width,bl09.width,bl90.width,bl99.width]
    let mazeHeight = [bl00.height,bl09.height,bl90.height,bl99.height]

    window.onkeydown=function(e){
        
        switch(e.keyCode||e.which){
            // down
            case 83:{

                if(!hadCollision()){
                    char.moveBottom(5);
                }
                break;
            }
            //up
            case 87:{

                if(!hadCollision()){
                    char.moveTop(-5);
                }
                break;
            }
            //left
            case 65:{

                if(!hadCollision()){

                    char.moveLeft(-5);
                }
                break;
            }
            //right
            case 68:{

                if(!hadCollision()){
                    char.moveRight(5);
                }
                break;
            }
        }
   }

   function hadCollision(){

        if(char.left<0){
            console.log("teste1");
            char.left = 0;
            char.moveLeft(0);
            return true;
        }else if(char.right>field.width){
            console.log("teste2");
            char.left = field.width - char.width;
            char.moveRight(0);
            return true;
        }else if(char.top<0){
            console.log("teste3");
            char.top = 0;
            char.moveTop(0);
            return true;
        }else if(char.bottom>field.height){
            console.log("teste4");
            char.top = field.height - char.height;
            char.moveBottom(0);
            return true;
        }

        for(i=0;i<mazeLeft.length;i++){
            if((char.left+char.width)>mazeLeft[i] &&
            (char.top>= mazeTop[i] && char.top <= (mazeHeight[i] + mazeTop[i]) ||
            (char.top + char.height) >= mazeTop[i] && (char.top + char.height) <= (mazeHeight[i] + mazeTop[i]))
            ){
                console.log("teste5");
                console.log(char.top);
                console.log(char.left);
                console.log(mazeHeight[i]+ mazeTop[i]);
                console.log(mazeRight[i]);
                console.log(mazeLeft[i]);
                char.left= mazeLeft[i] - char.width;
                char.moveLeft(0);
                return true;
            }
            
            /*else if(char.right<mazeLeft[i]){
                console.log("teste6");
                char.left = mazeLeft[i];
                char.moveRight(0);
                return true;
            }else if(char.top+char.height>mazeTop[i] && char.left>=mazeLeft[i] && char.left <= (mazeLeft[i]+mazeWidth[i])){
                console.log("teste7");
                console.log(char.top);
                console.log(mazeBottom[i]);
                console.log(mazeTop[i]);
                char.top = mazeTop[i] - char.height;
                char.moveTop(0);
                return true;
            }else if(char.bottom<mazeTop[i]){
                console.log("teste8");
                char.top = mazeTop[i] - char.height;
                char.moveBottom(0);
                return true;
            }*/
        }

   }

}

