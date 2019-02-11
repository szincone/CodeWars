function songDecoder(song) {
  const result = [];
  song.split('WUB').forEach((element) => {
    if (element !== '') {
      result.push(element, ' ');
    }
  });
  return result.join('').trim();
}
