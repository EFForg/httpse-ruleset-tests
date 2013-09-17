function httpse_ruleset_tests_run() {

    strbundle = document.getElementById("strings");
    var nofilesfound=strbundle.getString("installAlert");

    alert(nofilesfound);var HTTPSEverywhere = null;
    try {
        HTTPSEverywhere = Components.classes["@eff.org/https-everywhere;1"]
            .getService(Components.interfaces.nsISupports)
            .wrappedJSObject;
    } catch(e) {
        alert('Please install HTTPS Everywhere and run again');
    }

}
