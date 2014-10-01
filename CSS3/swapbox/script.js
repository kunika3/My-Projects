function swapboxes()
    {
    //swap text
    var a= document.getElementsByTagName("div")[1].innerHTML;
    document.getElementsByTagName('div')[1].innerHTML= document.getElementsByTagName('div')[2].innerHTML;
    document.getElementsByTagName('div')[2].innerHTML= a;
    
    //swap background color
    var b=document.getElementsByTagName("div")[1].style.background;
    document.getElementsByTagName("div")[1].style.background = document.getElementsByTagName("div")[2].style.background;
    document.getElementsByTagName("div")[2].style.background= b;
    }