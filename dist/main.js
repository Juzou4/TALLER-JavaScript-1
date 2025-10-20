import { Serie } from './serie.js';
import { dataSeries } from './data.js';
// Nodos del DOM (usando '!' como en el tuto; ver alternativa segura abajo)
var seriesTbody = document.getElementById('series');
var avgSeasonsDiv = document.getElementById('avg-seasons');
// para las cards
var card = document.getElementById('detail-card');
var cardTitle = document.getElementById('detail-title');
var cardDesc = document.getElementById('detail-description');
var cardChannel = document.getElementById('detail-channel');
var cardSeasons = document.getElementById('detail-seasons');
var cardLink = document.getElementById('detail-link');
var cardImg = document.getElementById('detail-image');
var cardClose = document.getElementById('detail-close');
// pintar tabla
function renderSeriesInTable(series) {
    clearSeriesInTable();
    series.forEach(function (s) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n                <td>".concat(s.id, "</td>\n                <td><a href=\"#\" class=\"series-link\" data-id=\"").concat(s.id, "\">").concat(s.name, "</a></td>\n                <td>").concat(s.channel, "</td>\n                <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(tr);
    });
    attachClickHandlers(series);
}
function attachClickHandlers(series) {
    var links = document.querySelectorAll('.series-link');
    links.forEach(function (a) {
        a.addEventListener('click', function (ev) {
            ev.preventDefault();
            var idStr = (ev.currentTarget.dataset.id);
            if (!idStr)
                return;
            var id = Number(idStr);
        });
    });
}
//con esto es para toda la interaccion de la carta
function showCard(s) {
    //Rellena
    cardTitle.textContent = s.name;
    cardDesc.textContent = s.description;
    cardChannel.textContent = s.channel;
    cardSeasons.textContent = String(s.seasons);
    //mostrasr y ocultar la carta
    if (s.link) {
        cardLink.href = s.link;
        cardLink.classList.remove('d-none');
    }
    else {
        cardLink.classList.add('d-none');
    }
    //mostrar y ocultar la imagen
    if (s.image) {
        cardImg.src = s.image;
        cardImg.alt = "Poster de ".concat(s.name);
        cardImg.classList.remove('d-none');
    }
    else {
        cardImg.classList.add('d-none');
    }
    // Mostrar la card
    card.classList.remove('d-none');
}
// Botón cerrar
cardClose.addEventListener('click', function () {
    card.classList.add('d-none');
});
//limpiar la info
function clearSeriesInTable() {
    while (seriesTbody.firstChild) {
        seriesTbody.removeChild(seriesTbody.firstChild);
    }
}
//Promedio de temporadas
function getAverageSeasons(series) {
    return series.length === 0
        ? 0
        : series.reduce(function (acc, s) { return acc + s.seasons; }, 0) / series.length;
}
function renderAverage(series) {
    var avg = getAverageSeasons(series);
    avgSeasonsDiv.textContent = "Promedio de temporadas: ".concat(avg.toFixed(2));
}
//inicializacion ( si tu <script> esta al final del <body>, con esto basta)
renderSeriesInTable(dataSeries);
renderAverage(dataSeries);
//# sourceMappingURL=main.js.map