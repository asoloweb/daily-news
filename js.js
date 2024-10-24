$(document).ready(function () {
    // URL del feed RSS convertito in JSON tramite rss2json.com
    var feedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://www.ansa.it/sito/ansait_rss.xml";

    $.get(feedUrl, function (data) {
        var $container = $('#news-container');

        $.each(data.items, function (index, item) {
            // Crea un elemento HTML per ogni articolo
            var articleHtml = `
                <article>
                    <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
                    <p>${item.description}</p>
                </article>
            `;

            // Aggiungi l'articolo al container
            $container.append(articleHtml);
        });
    }).fail(function () {
        alert('Errore nel caricamento del feed RSS.');
    });
});
