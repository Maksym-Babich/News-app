function descriptionHiding() {
  const descriptionText = document.querySelectorAll('.text'); //тут змінемо на клас опису новини, коли буде розмітка готова
  const descriptionLength = 120; // кількість символів

  descriptionText.forEach(card => {
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
descriptionHiding();
