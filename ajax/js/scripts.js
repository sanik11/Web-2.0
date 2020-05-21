// $(function() {
//     $("button").click(function() {
//         var name = $("#userName").val();
//         var age = $("#userAge").val();

//         let js = JSON.stringify({ name: name, age: age, btn: $(this).text().split(' ')[1] });

//         let request = new XMLHttpRequest();

//         request.open("POST", "/user", true);
//         request.setRequestHeader("Content-Type", "application/json");
//         request.addEventListener("load", function() {
//             $(".div_text").text(request.response);
//         });
//         request.send(js);

//     })
// })

$("button").click(function() {
    var name = $("#userName").val();
    var age = $("#userAge").val();

    let js = { name: name, age: age, btn: $(this).text().split(' ')[1] };
    console.log(js)

    $.ajax({
        url: "/user",
        type: "POST",
        data: js,
        success: function(data) {
            console.log(data)
            $('.div_text').text(data);
        },
        error: function(data) {
            $('.div_text').text('Помилка. Не вдалось відправити дані.');
        }
    });
});