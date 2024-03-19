const currentPage = window.location.pathname.split("/").pop();

$(document).ready(() => {
  $.get("../components/navbar.html", (data) => {
    $parsedData = $(data);
    const menuitems = $parsedData.find("li").toArray();
    menuitems.forEach((item) => {
      const itemvalue = $(item).find("a");
      if ($(itemvalue).attr("href") === currentPage) {
        $(item).addClass("active");
      }
    });
    $(".navbar").html($parsedData);
  });
});
