var elements = document.getElementsByClassName("hioxInternalAd");
var hioxAdPath = "https://www.hiox.biz/";
for (var i = 0; i < elements.length; i++){
    randDiv = document.getElementsByClassName('hioxInternalAd')[i].id;
    hioxCampaign = document.getElementsByClassName('hioxInternalAd')[i].getAttribute('camp');
    gethioxAdWidth = hioxCampaign.split('x');
    hioxAdWidth = gethioxAdWidth[0];
    hioxAdHeight = gethioxAdWidth[1];
    var pp = hioxAdPath+"showadd.php";
	path1=hioxAdPath.replace(/\//g,"%2F");pp=pp+"?campaign="+hioxCampaign+"&str="+path1;
	var iframe=document.createElement("iframe");iframe.setAttribute("src",pp);iframe.width=hioxAdWidth+"px";
	iframe.height=hioxAdHeight+"px";
	iframe.frameBorder=0;
	iframe.marginWidth=0;iframe.marginHeight=0;iframe.scrolling="no";iframe.setAttribute("allowtransparency","true");
	document.getElementById(""+randDiv+"").appendChild(iframe);
}


