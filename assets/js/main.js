$(document).ready(function() {
    $("#fullpage").fullpage({
      anchors:["welcome", "photos", "social", "snapchat"],
      css3: true,
    });
    jQuery("#title").fitText();
});
