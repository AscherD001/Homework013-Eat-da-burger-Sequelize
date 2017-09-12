$(".devour").on("click", function() {
    var random = Math.floor(Math.random() * 9 + 1);
    var temp = $("<img>").attr("src", "/images/burger00" + random + ".gif").attr("style", "width: 640px");
    $("#modBod").append(temp);
    $("#modal").modal("show");
  });