<template>
  <div ref="containerRef" id="webgl" class="webgl-container">
    <video ref="cameraRef" class="camera" autoplay></video>
    <canvas ref="canvasRef" class="webgl"></canvas>
  </div>
</template>

<script>
import { createCameraElement } from "@/shared/lib/onCamera";
import { setVh } from "@/shared/lib/setVh";
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";
import Experience from "@/ar/capture/Experience.js";

let experience;
const selectedCharacter = ref(false);
const cameraRef = ref(null);
const canvasRef = ref(null);
const containerRef = ref(null);
const objects = [];
const isSeleted = ref(false);
const initialPinchDistance = 0;
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const setSticker = (image) => {
  playAudio();
  experience.world.setSticker(image.name);
  experience.world.removeCharacter();
  selectedSticker.value = image.id;
  selectedCharacter.value = false;
};
const setCharacter = (image) => {
  experience.world.removeSticker();
  experience.world.setCharacter(image.id);
  selectedSticker.value = null;
  selectedCharacter.value = image.id;
};

const bellCharacter = new URL("@resource/frame/frame_bell.png", import.meta.url)
  .href;

const sorinaCharacter = new URL(
  "@resource/frame/frame_sorina.png",
  import.meta.url
).href;

const unoCharacter = new URL("@resource/frame/frame_uno.png", import.meta.url)
  .href;

const CHARACTERS = ref([
  { id: 0, src: bellCharacter, name: "bell" },
  { id: 1, src: sorinaCharacter, name: "uno" },
  { id: 2, src: unoCharacter, name: "sorina" },
]);

export default {
  name: "capture",

  setup() {
    onMounted(() => {
      createCameraElement(cameraRef.value);
      setVh();
      setCharacter(CHARACTERS[1]);
      window.addEventListener("resize", setVh);

      const saveImage = (image) => {
        imageDataStore.setImageData(image);
        imageDataStore.setEventName(eventName.value);
        let canvas = document.querySelector("canvas.webgl");
        let width = canvas.style.width;
        let height = canvas.style.height;
        imageDataStore.setCanvasSize(width, height);

        router.push({ path: "/busan3" });
      };

      const experience = new Experience(
        document.querySelector(".webgl", saveImage)
      );

      console.log(experience);
      experience.resources.on("ready", () => {
        setTimeout(() => {
          showLoading.value = false;
        }, 1000);
      });

      // const scene = new THREE.Scene();
      // const videoTexture = new THREE.VideoTexture(cameraRef.value);
      // videoTexture.minFilter = THREE.NearestFilter;
      // videoTexture.magFilter = THREE.NearestFilter;
      // videoTexture.format = THREE.RGBAFormat;
      // videoTexture.colorSpace = THREE.SRGBColorSpace;
      // scene.background = videoTexture;
      // const camera = new THREE.PerspectiveCamera(
      //   50,
      //   window.innerWidth / window.innerHeight,
      //   0.1,
      //   1000
      // );
      // camera.position.set(0, 2.3, 8);
      // const renderer = new THREE.WebGLRenderer({
      //   canvas: canvasRef.value,
      //   antialias: true,
      //   alpha: true,
      //   webgl2: true,
      // });
      // renderer.setSize(window.innerWidth, containerRef.value.clientHeight);
      // const light = new THREE.DirectionalLight(0xffffff, 5);
      // light.position.set(0, 2.3, 8).normalize();
      // scene.add(light);
      // const group = new THREE.Group();
      // scene.add(group);
      // const loader = new GLTFLoader();
      // const bellModelObject = {
      //   name: "bellModel",
      //   type: "gltfModel",
      //   path: "../../../static/models/Bell/Bell_new.gltf",
      // };
      // loader.load(bellModelObject.path, (gltf) => {
      //   const model = gltf.scene;
      //   const touchStartPosition = new THREE.Vector2();
      //   const cloneModel =
      //     SkeletonUtils.clone(gltf.scene) ||
      //     SkeletonUtils.clone(gltf.scene.children[0]);
      //   const mixer = new THREE.AnimationMixer(cloneModel);
      //   gltf.animations.forEach((clip) => {
      //     console.log(clip);
      //     const action = mixer.clipAction(clip);
      //     action.play();
      //   });
      //   group.add(cloneModel);
      //   cloneModel.scale.set(1.5, 1.5, 1.5);
      //   //size
      //   cloneModel.position.set(0, 2, 0);
      //   cloneModel.rotation.set(0, 0, 0);
      //   scene.add(cloneModel);
      //   console.log(cloneModel);
      //   cloneModel.traverse((child) => {
      //     if (child instanceof THREE.Mesh) {
      //       child.name = "model";
      //       child.material.depthWrite = !child.material.transparent;
      //       objects.push(child);
      //     }
      //   });
      //   objects.push(cloneModel);
      //   const onTouchStart = (event) => {
      //     touchStartPosition.set(
      //       event.touches[0].clientX,
      //       event.touches[0].clientY
      //     );
      //   };
      //   const onTouchMove = (event) => {
      //     const curX = event.touches[0].clientX - touchStartPosition.x;
      //     const curY = event.touches[0].clientY - touchStartPosition.y;
      //     const factor = 0.015;
      //     model.position.x += curX * factor;
      //     model.position.y -= curY * factor;
      //     const rotationFactor = 0.002; // Adjust this value to change rotation sensitivity
      //     model.rotation.y -= curX * rotationFactor;
      //     model.rotation.x -= curY * rotationFactor;
      //     touchStartPosition.set(
      //       event.touches[0].clientX,
      //       event.touches[0].clientY
      //     );
      //     if (event.touches.length === 2 && isMoving) {
      //       const dx = event.touches[0].clientX - event.touches[1].clientX;
      //       const dy = event.touches[0].clientY - event.touches[1].clientY;
      //       const distance = Math.sqrt(dx * dx + dy * dy);
      //       const scale = distance / initialPinchDistance;
      //       model.scale.copy(this.initialScale).multiplyScalar(scale);
      //     }
      //   };
      //   const onTouchEnd = (event) => {
      //     isSeleted.value = false;
      //   };
      //   window.addEventListener("touchstart", onTouchStart.bind(model));
      //   window.addEventListener("touchmove", onTouchMove.bind(model));
      //   window.addEventListener("touchend", onTouchEnd.bind(model));
      // });
      // const controls = new DragControls(objects, camera, renderer.domElement);
      // document.addEventListener("click", onClick);
      // window.addEventListener("resize", onWindowResize);
      // window.addEventListener("keydown", onKeyDown);
      // window.addEventListener("keyup", onKeyUp);
      // function animate() {
      //   requestAnimationFrame(animate);
      //   render();
      // }
      // function render() {
      //   renderer.render(scene, camera);
      // }
      // function onWindowResize() {
      //   camera.aspect = window.innerWidth / window.innerHeight;
      //   camera.updateProjectionMatrix();
      //   renderer.setSize(window.innerWidth, window.innerHeight);
      // }
      // function onClick(event) {
      //   event.preventDefault();
      //   if (isSeleted) {
      //     const draggableObjects = controls.getObjects();
      //     draggableObjects.length = 0;
      //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      //     raycaster.setFromCamera(mouse, camera);
      //     const intersections = raycaster.intersectObjects(objects, true);
      //     if (intersections.length > 0) {
      //       const object = intersections[0].object;
      //       if (group.children.includes(object)) {
      //         object.material.emissive.set(0x000000);
      //         scene.attach(object);
      //       } else {
      //         object.material.emissive.set(0xaaaaaa);
      //         group.attach(object);
      //       }
      //       controls.transformGroup = true;
      //       draggableObjects.push(group);
      //     }
      //     if (group.children.length === 0) {
      //       controls.transformGroup = false;
      //       draggableObjects.push(...objects);
      //     }
      //   }
      // }
      // function onKeyDown(event) {
      //   isSeleted = event.keyCode === 16;
      //   if (event.keyCode === 77) {
      //     controls.mode =
      //       controls.mode === "translate" ? "rotate" : "translate";
      //   }
      // }
      // function onKeyUp() {
      //   isSeleted.value = false;
      // }
      // animate();
    });

    return {
      cameraRef,
      containerRef,
      canvasRef,
      createCameraElement,
      setCharacter,
    };
  },
};
</script>

<style scoped>
.webgl-container {
  position: relative;
  width: 100%;
  height: calc(75 * var(--vh));
}
.camera {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(75 * var(--vh));
  object-fit: fill;
}
.webgl {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(75 * var(--vh));
  z-index: 2;
}
</style>
