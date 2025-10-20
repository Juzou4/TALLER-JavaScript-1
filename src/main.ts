    import {Serie} from './serie.js';
    import {dataSeries} from './data.js';

    // Nodos del DOM (usando '!' como en el tuto; ver alternativa segura abajo)
    const seriesTbody= document.getElementById('series')!;
    const avgSeasonsDiv= document.getElementById('avg-seasons')!;

    // // para las cards
    // const card= document.getElementById('detail-card')!;
    // const cardTitle= document.getElementById('detail-title')!;
    // const cardDesc= document.getElementById('detail-description')!;
    // const cardChannel= document.getElementById('detail-channel')!;
    // const cardSeasons= document.getElementById('detail-seasons')!;
    // const cardLink = document.getElementById('detail-link') as HTMLAnchorElement;
    // const cardImg = document.getElementById('detail-image')as HTMLImageElement;
    // const cardClose= document.getElementById('detail-close')!;


    // // pintar tabla
    // function renderSeriesInTable(series: Serie[]):void {
    //     clearSeriesInTable();
    //     series.forEach(s => {
    //         const tr = document.createElement('tr');
    //         tr.innerHTML = `
    //             <td>${s.id}</td>
    //             <td><a href="#" class="series-link" data-id="${s.id}">${s.name}</a></td>
    //             <td>${s.channel}</td>
    //             <td>${s.seasons}</td>`;
    //         seriesTbody.appendChild(tr);
    //     });

    //     attachClickHandlers(series);
    // }

    // function attachClickHandlers(series:Serie[]){
    //     const links = document.querySelectorAll('.series-link')as NodeListOf<HTMLAnchorElement>;
    //     links.forEach(a=> {
    //         a.addEventListener('click', (ev) =>{
    //             ev.preventDefault();
    //             const idStr = ((ev.currentTarget as HTMLAnchorElement).dataset.id);
    //             if (!idStr) return;
    //             const id= Number(idStr);
                
    //         }); 
    //     });
    // }
    
    // //con esto es para toda la interaccion de la carta
    // function showCard(s:Serie) {
    //     //Rellena
    //     cardTitle.textContent =s.name;
    //     cardDesc.textContent = s.description;
    //     cardChannel.textContent = s.channel;
    //     cardSeasons.textContent = String(s.seasons);

    //     //mostrasr y ocultar la carta
    //     if(s.link) {
    //         cardLink.href= s.link;
    //         cardLink.classList.remove('d-none');
    //     } else{
    //         cardLink.classList.add('d-none');
    //     }

    //     //mostrar y ocultar la imagen
    //     if (s.image) {
    //     cardImg.src = s.image;
    //     cardImg.alt = `Poster de ${s.name}`;
    //     cardImg.classList.remove('d-none');
    // } else {
    //     cardImg.classList.add('d-none');
    // }

    // // Mostrar la card
    // card.classList.remove('d-none');
    // }

    // // Botón cerrar
    // cardClose.addEventListener('click', () => {
    //     card.classList.add('d-none');
    // });
    

    // //limpiar la info
    // function clearSeriesInTable(): void{
    //     while (seriesTbody.firstChild){
    //         seriesTbody.removeChild(seriesTbody.firstChild);
    //     }
    // }

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

    // renderSeriesInTable(dataSeries);
    renderAverage (dataSeries);