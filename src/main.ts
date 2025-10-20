    import {Serie} from './serie.js';
    import {dataSeries} from './data.js';

    // Nodos del DOM (usando '!' como en el tuto; ver alternativa segura abajo)
    const seriesTbody= document.getElementById('series')!;
    const avgSeasonsDiv= document.getElementById('avg-seasons')!;

    //Promedio de temporadas
    function getAverageSeasons(series: Serie []): number {
        return series.length === 0
        ? 0
        : series.reduce((acc, s) => acc + s.seasons, 0) / series.length;

    }

    function renderAverage (series: Serie[]): void {
        const avg = getAverageSeasons(series);
        avgSeasonsDiv.textContent = `Promedio de temporadas: ${avg.toFixed(2)}`;
    }

    //inicializacion ( si tu <script> esta al final del <body>, con esto basta)

    renderAverage (dataSeries);