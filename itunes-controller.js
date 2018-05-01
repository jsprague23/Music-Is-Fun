function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(songs){
    console.log(songs)  
    var template= ''
    for (var i = 0; i < songs.length; i++) {
      var song = songs[i];
      template+=`<div>
      <h3>Title: ${song.title}</h3>
        <img src="song.img" alt="">
        <h3>Artist: ${song.artist}</h3>
        <h3>Collection:${song.collection}</h3>
        <h3>Price: ${song.price}</h3>
        <audio src="song.preview"></audio>
      </div>`
      
    }
    document.getElementById('songs').innerHTML=template

  }

this.addSong = function addSong(event){
  event.preventDefault();
  var data=event.target
  var newSong={
    title: data.title.value,
    img:  data.img.value,
    artist: data.artist.value,
    collection: data.collection.value,
    price: data.price.value,
    preview: data.preview.value

  }
  itunesService.addSong(newSong)
  drawSongs()
}
  
}
