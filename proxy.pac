function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0")
      || isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0")
      || isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
      || isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")
	  || isInNet(dnsResolve(host), "58.32.211.0", "255.255.255.0")

    ) {
      return "DIRECT";
    }

    if (shExpMatch(url,"*twitter*")
      || shExpMatch(url,"*google*")
      || shExpMatch(url,"*facebook*")
      || shExpMatch(url,"*blogspot*")
      || shExpMatch(url,"*youtube*")
      || shExpMatch(url,"*gstatic*")
      || shExpMatch(url,"*ytimg*")
      || shExpMatch(url,"*ggpht*")
      || shExpMatch(url,"*github*")
	  || shExpMatch(url,"*playstation*")
	  || shExpMatch(url,"*futuregadget*")
	  || shExpMatch(url,"*python.org*")
	
	  

    ) {
       return "proxy 45.117.98.140:6050";
    }
    return "proxy proxy.cognizant.com:6050";
}
