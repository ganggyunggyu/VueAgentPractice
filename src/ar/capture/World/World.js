import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Model from "./Model.js";

import Sticker from "./Sticker.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera.instance;
    this.renderer = this.experience.renderer.instance;

    // Wait for resources
    this.resources.on("ready", () => {
      this.sticker = new Sticker();
      this.environment = new Environment();
    });
  }

  setSticker(name) {
    console.log(name);
    if (!this.sticker) {
      this.sticker.setTextures(name);
    } else {
      this.sticker.scene.remove(this.sticker.mesh);
      this.sticker.setTextures(name);
    }
  }

  setCharacter(id) {
    if (this.model) {
      this.scene.remove(this.model.model);
      this.model = null;
    }
    if (id == 0) {
      this.model = new Model("bellModel");
    } else if (id == 1) {
      this.model = new Model("sorinaModel");
    } else if (id == 2) {
      this.model = new Model("unoModel");
    }
  }

  removeCharacter() {
    if (!this.model) return;
    this.model.scene.remove(this.model.model);
  }

  removeSticker() {
    if (!this.sticker) return;
    this.sticker.scene.remove(this.sticker.mesh);
  }

  update() {
    if (this.model) {
      this.model.update();
    }
  }
  dispose() {}
}
