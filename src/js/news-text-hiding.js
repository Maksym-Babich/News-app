function textHiding(text, textLength) {
  if (text.trim().length > textLength) {
    let newText = text.trim().substring(0, textLength);
    let lastSpace = newText.lastIndexOf(' ');
    return newText.substring(0, lastSpace) + '...';
  }
}
