var num=prompt("Enter num to repeat");

var cartona=""

for(var x=0 ; x<num ; x++)
{

    if(x%2==0)
    {
        cartona+='<h2 class="light"> Hafsa </h2>'
    }
    else
    {
        cartona+='<h2 class="dark"> Hafsa </h2>'
    }
}

document.getElementById("demo").innerHTML=cartona

