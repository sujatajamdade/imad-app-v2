var button=document.getElementById('counter');
//var counter=0;
button.onclick=function()
{
   /* counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();*/
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readystate==XMLhttpReqest.DONE)
        {
            if(request.status==200)
            {
                var counter=request.responseTest;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
        }
    };
    request.open('GET','https://sujatajamdade.imad.hasura-app.io/counter',true);
    request.send(null);
};
