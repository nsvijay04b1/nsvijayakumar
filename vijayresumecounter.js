//Get the visitors element on the page

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("visits").innerHTML = xhttp.responseText;
   }
};


xhttp.open("GET","https://4npunqzbu8.execute-api.eu-west-1.amazonaws.com/Prod/count",true);
//xhttp.setRequestHeader('X-PINGOTHER', 'pingpong');
xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xhttp.setRequestHeader('Content-Type', 'application/xml');
//xhttp.open('GET', 'https://cl9x7rqpag.execute-api.eu-west-1.amazonaws.com/Prod/count',true);
xhttp.send();
