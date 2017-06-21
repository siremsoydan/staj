function myFunction() {
    alert(1)
}
 
secilenlerList = [];

function checker() {

    var allInputs = $("input");

    //sadece tipi checkbox olanlari sec
    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs[i].type === 'checkbox') {
            if (allInputs[i].checked == true) {
                secilenlerList.push(allInputs[i].value);
            };
        }
    }



    for (var i = 0; i < allInputs.length; i++) {
        if (allInputs[i].type === 'radio' && allInputs[i].checked) {
            if (allInputs[i].checked == true) {
                secilenlerList.push(allInputs[i].value);
            };

        }
    }
    var s1 = $("#nmb1").val();
    var s2 = $("#nmb2").val();
    var s3 = $("#nmb3").val();

    s1 = parseInt(s1);
    s2 = parseInt(s2);
    s3 = parseInt(s3);
    

    // var s1 = Number(s1.value);
    // var s2 = Number(s2.value);
    // var s3 = Number(s3.value);
    var carpim = s1 * s2 * s3;

    var carpim2;
    for (var i = 0; i < secilenlerList.length; i++) {
        if (i + 1 < secilenlerList.length) {
            carpim2 = secilenlerList[i] * secilenlerList[i + 1]
        }
    }
    console.log(carpim2);
    //document.getElementById("carpim2").innerHTML = carpim2;
     $(".sonuc").html(carpim2);
     $("body").css({"background-color":"red","font-size":"140%"}); 
    $("#down").addClass("important");
    $("#butonn").hide();
   


}
