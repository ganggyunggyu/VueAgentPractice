const typing = (string) => {
  let typingTimer;

  watch(
    () => char.value.intro[0].text,
    (newText) => {
      startTyping(newText);
    },
  );
  const startTyping = (text) => {
    clearInterval(typingTimer);
    typedText.value = '';
    let index = 0;

    typingTimer = setInterval(() => {
      if (index < text.length) {
        typedText.value += text[index];
        index++;
        if (text[index - 1] === '.') {
          typedText.value += '<br>';
        }
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    startTyping(char.value.intro[0].text);

    clearInterval(typingTimer);
  };
};
