import { defineStore } from "pinia";

export const useImageDataStore = defineStore("image", {
  state: () => ({
    imageData: null,
    eventName: null,
    width: null,
    height: null,
  }),
  actions: {
    setImageData(data) {
      this.imageData = data;
    },
    setEventName(name) {
      this.eventName = name;
    },
    setCanvasSize(width, height) {
      this.width = width;
      this.height = height;
    },
    getImageData() {
      return this.imageData;
    },
    getEventName() {
      return this.eventName;
    },
  },
});
