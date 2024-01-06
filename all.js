fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(album => {
        console.log(album)

        let htmlString = '';

        if (album && album.length > 0) {
            htmlString = album.map(album => {

                return `<div class="card">
                    <div class="pic"><a href="${album.name}.html"><img src="${album.albumCover}" alt=""></a></div>
                    <div class="albumName">${album.name}</div>
                    <div class="artist">${album.artist}</div>
                </div>`;
            }).join('');
        } else {
            htmlString = '<p>Album not found.</p>';
        }

        document.getElementById('cards').innerHTML = htmlString;
    })
    .catch(error => {
        console.error('Error fetching albums:', error);
    });