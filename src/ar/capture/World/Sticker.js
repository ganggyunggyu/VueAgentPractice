import * as THREE from "three";
import Experience from "../Experience.js";

export default class Sticker {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.isMoving = false;

    this.initialPinchDistance = 0;
    this.initialScale = new THREE.Vector3();

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);

    // Add event listeners
    window.addEventListener("touchstart", this.onTouchStart.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchEnd.bind(this));

    this.touchStartPosition = new THREE.Vector2();
  }

  setGeometry() {
    this.geometry = new THREE.PlaneGeometry(
      this.texture.image.width,
      this.texture.image.height
    );
  }
  setTextures(name) {
    this.texture = this.resources.items[name];

    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      toneMapped: false,
    });
    this.material.transparent = true;
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.scale.set(0.0005, 0.0005, 0.1);
    this.mesh.position.set(0.75, 1.5, 0);
    this.scene.add(this.mesh);
    this.mesh.name = "stickers";
    this.experience.clickedObject.push(this.mesh);
  }
  onTouchStart(event) {
    if (this.isMoving) {
      this.touchStartPosition.set(
        event.touches[0].clientX,
        event.touches[0].clientY
      );
    }
    if (event.touches.length === 2 && this.isMoving) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      this.initialPinchDistance = Math.sqrt(dx * dx + dy * dy);
      this.initialScale.copy(this.mesh.scale);
    }
  }

  onTouchMove(event) {
    if (this.isMoving) {
      const deltaX = event.touches[0].clientX - this.touchStartPosition.x;
      const deltaY = event.touches[0].clientY - this.touchStartPosition.y;

      const factor = 0.02;
      this.mesh.position.x += deltaX * factor;
      this.mesh.position.y -= deltaY * factor;
      this.touchStartPosition.set(
        event.touches[0].clientX,
        event.touches[0].clientY
      );
    }
    if (event.touches.length === 2 && this.isMoving) {
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = distance / this.initialPinchDistance;
      this.mesh.scale.copy(this.initialScale).multiplyScalar(scale);
    }
  }
  onTouchEnd() {
    this.isMoving = false;
  }

  update() {}
}
