$(document).ready(function () {
    $("#nav_list a").click(function (e) {
        e.preventDefault(); 

        let fileName = "json_files/" + $(this).attr("title") + ".json";

        $.getJSON(fileName, function (data) {
            $("main").empty(); 

            let speaker = data.speakers[0];

            let html = `
                <h1>${speaker.title}</h1>
                <img src="${speaker.image}" alt="${speaker.speaker}">
                <h2>${speaker.month}<br>${speaker.speaker}</h2>
                <p>${speaker.text}</p>
            `;

            $("main").html(html); 
        }).fail(function () {
         
            $("main").html("<p>Veri yüklenemedi. Dosya bulunamadı veya erişilemedi.</p>");
        });
    });
});
