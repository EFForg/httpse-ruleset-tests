function openStatus() {
    // make sure mixed content blocking preferences are correct
    Services.prefs.setBoolPref("security.mixed_content.block_display_content", false);
    Services.prefs.setBoolPref("security.mixed_content.block_active_content", true);
     
     // open the status tab
    var statusTab = gBrowser.addTab('chrome://httpse-ruleset-tests/content/status.xul');
    gBrowser.selectedTab = statusTab;
}



