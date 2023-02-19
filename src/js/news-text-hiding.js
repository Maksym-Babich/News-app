function textHiding(elementClass, textLength) {
  const elementText = document.querySelectorAll(`${elementClass}`);
  const descriptionLength = textLength;

  elementText.forEach(card => {
    let text = card.innerHTML.trim();

    if (card.innerHTML.length > descriptionLength) {
      text = text.substring(0, descriptionLength);
      let lastSpace = text.lastIndexOf(' ');
      if (lastSpace > 0) {
        text = text.substring(0, lastSpace);
      }
      card.innerHTML = text + '...';
    }
  });
}
textHiding('.news-card__description', 120);
textHiding('.news-card__title', 65);
