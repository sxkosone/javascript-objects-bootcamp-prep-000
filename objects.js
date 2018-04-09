var playlist = { Kesha: "Tick Tock" };

function updatePlaylist(object, artist, song) {
  object[artist] = song;
  return object;
}