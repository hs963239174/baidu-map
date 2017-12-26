
var sourceIP = "192.168.10.225";
var sourcePort = "8501";

var targetIP = "192.168.135.63";
var targetPort = "8501";


var isReplace = true;

function replaceURL(url) {
    if(isReplace)
    {
        url = url.replace(sourceIP,targetIP);
        url = url.replace(sourcePort,targetPort);
        return url;
    }
    else
    {
        return url;
    }
}
