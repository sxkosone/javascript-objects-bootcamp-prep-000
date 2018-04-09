var playlist = { Kesha: "Tick Tock" };

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}