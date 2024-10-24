$(document).ready(function () {
    // URL del feed RSS
    var feedUrl = "https://www.ansa.it/sito/ansait_rss.xml";

    // Esegui una richiesta AJAX per ottenere il feed RSS
    $.ajax({
        url: feedUrl,
        method: 'GET',
        dataType: 'xml',
        success: function (data) {
            var $items = $(data).find("item");
            var $container = $('#news-container');

            // Cicla tra gli articoli nel feed
            $items.each(function () {
                var $item = $(this);
                var title = $item.find("title").text();
                var link = $item.find("link").text();
                var description = $item.find("description").text();

                // Crea un elemento HTML per ogni articolo
                var articleHtml = `
                    <article>
                        <h2><a href="${link}" target="_blank">${title}</a></h2>
                        <p>${description}</p>
                    </article>
                `;

                // Aggiungi l'articolo al container
                $container.append(articleHtml);
            });
        },
        error: function () {
            alert('Errore nel caricamento del feed RSS.');
        }
    });
});
