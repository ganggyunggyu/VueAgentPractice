export const playAudio = () => {
  import("../../../static/resource/sounds/generaltap.wav")
    .then((module) => {
      const audio = new Audio(module.default);
      audio.play();
    })
    .catch((error) => {
      console.error("Failed to load audio:", error);
    });
};
