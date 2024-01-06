let albumName = document.title; // Replace with the actual album name

fetch(`http://localhost:3000/api/albumByName/${encodeURIComponent(albumName)}`)
    .then(response => response.json())
    .then(album => {
        // Process the album data and render it on the page
        renderAlbum(album);
    })
    .catch(error => {
        console.error('Error fetching album:', error);
    });

function renderAlbum(album) {
    let htmlString = '';

    if (album) {
        htmlString = `<div class="contentTop">
        <div class="albumCover">
            <div class="albumName">${album.name}</div>
            <div class="cover"><img src="${album.albumCover}" alt=""></div>
            <div class="artist">By ${album.artist}</div>
        </div>

        <div class="para">
            <p>${album.description}</p>
        </div>
    </div>

    <div class="contentBottom">
        <div class="tracklist">
        <ul>
        ${album.tracklist.map(track => `<li>${track}</li>`).join('')}
         <a href="${album.spotifyUrl}">
                <button>Listen on Spotify</button>
            </a>
        </ul>
           
           
        </div>
        <div class="artistPic">
            <div class="trackTitle">Tracklist</div>
            <div class="pic"><img src="${album.extraPicture}" alt=""></div>
        </div>
    </div>`;
    } else {
        htmlString = '<p>Album not found.</p>';
    }

    document.getElementById('content').innerHTML = htmlString;
}