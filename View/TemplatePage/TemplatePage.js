const id="template";
const filename="TemplateHead.html"
const id1="footer";
const filename1="TemplateFoot.html";

let l=0;

window.onload=function(){
    if(l==0){
        l=1;
        
        go();
    }
}

function go(){
    
    console.log(`div id: template , filename: TemplateHead.html`);
    let xhttp;
    let element=document.getElementById(id);
    let file=filename;
    if(file){
        xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(this.readyState==4){
                if(this.status==200){
                    element.innerHTML=this.responseText;
                }
                if(this.status==404){
                    element.innerHTML="<h1> Page Not Found.</h1>";
                }
            }
        }
        xhttp.open("GET",`../TemplatePage/${file}`,true);
        xhttp.send();
    }
    
    //footer
    console.log(`div id: footer , filename1: TemplateFoot.html`);
    let xhttp1;
    let element1=document.getElementById(id1);
    let file1=filename1;
    if(file1){
        
        xhttp1=new XMLHttpRequest();
        xhttp1.onreadystatechange=function(){
            if(this.readyState==4){
                if(this.status==200){
                    element1.innerHTML=this.responseText;
                }
                if(this.status==404){
                    element1.innerHTML="<h1> Page Not Found.</h1>";
                }
            }
        }
        xhttp1.open("GET",`../TemplatePage/${file1}`,true);
        xhttp1.send();
        return;
    }
    
    
}