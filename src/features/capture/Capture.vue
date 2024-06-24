<template>
  <div ref="containerRef" id="webgl" class="webgl-container">
    <video ref="cameraRef" class="camera" autoplay></video>
    <canvas ref="canvasRef" class="webgl"></canvas>
  </div>
</template>

<script>
import { createCameraElement } from '@/shared/lib/onCamera';
import { setVh } from '@/shared/lib/setVh';
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

export default {
  setup() {
    const cameraRef = ref(null);
    const canvasRef = ref(null);
    const containerRef = ref(null);
    const objects = [];
    let isSeleted = false;

    onMounted(() => {
      createCameraElement(cameraRef.value);
      setVh();

      const scene = new THREE.Scene();
      const videoTexture = new THREE.VideoTexture(cameraRef.value);
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.value,
        antialias: true,
        alpha: true,
      });
      const light = new THREE.DirectionalLight(0xffffff, 2);

      videoTexture.minFilter = THREE.NearestFilter;
      videoTexture.magFilter = THREE.NearestFilter;
      videoTexture.format = THREE.RGBAFormat;
      videoTexture.colorSpace = THREE.SRGBColorSpace;
      scene.background = videoTexture;

      const spotLight = new THREE.SpotLight(0xffffff, 10000);
      spotLight.position.set(0, 25, 50);
      spotLight.angle = Math.PI / 1;

      // spotLight.castShadow = true;
      // spotLight.shadow.camera.near = 10;
      // spotLight.shadow.camera.far = 100;
      // spotLight.shadow.mapSize.width = 1024;
      // spotLight.shadow.mapSize.height = 1024;

      scene.add(spotLight);

      const group = new THREE.Group();
      scene.add(group);

      const loader = new GLTFLoader();
      loader.load(
        '../../../static/models/Bell/Bell_new.gltf',
        function (gltf) {
          const model = gltf.scene;
          scene.add(model);
          objects.push(model); // 모델을 objects 배열에 추가
          controls.transformGroup = true; // 모델을 드래그 가능하도록 설정
          controls.getObjects().push(model);
        },
        undefined,
        function (error) {
          console.error(error);
        },
      );

      renderer.setSize(window.innerWidth, containerRef.value.clientHeight);

      camera.position.set(0, 2.3, 8);

      light.position.set(0, 2.3, 8).normalize();
      scene.add(light);

      const controls = new DragControls(objects, camera, renderer.domElement);

      document.addEventListener('click', onClick);
      window.addEventListener('resize', onWindowResize);
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);

      function animate() {
        requestAnimationFrame(animate);
        render();
      }

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function onClick(event) {
        event.preventDefault();
        if (isSeleted) {
          const draggableObjects = controls.getObjects();
          draggableObjects.length = 0;

          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);

          const intersections = raycaster.intersectObjects(objects, true);

          if (intersections.length > 0) {
            const object = intersections[0].object;

            if (group.children.includes(object)) {
              object.material.emissive.set(0x000000);
              scene.attach(object);
            } else {
              object.material.emissive.set(0xaaaaaa);
              group.attach(object);
            }

            controls.transformGroup = true;
            draggableObjects.push(group);
          }

          if (group.children.length === 0) {
            controls.transformGroup = false;
            draggableObjects.push(...objects);
          }
        }
      }

      function onKeyDown(event) {
        isSeleted = event.keyCode === 16;

        if (event.keyCode === 77) {
          controls.mode = controls.mode === 'translate' ? 'rotate' : 'translate';
        }
      }

      function onKeyUp() {
        isSeleted = false;
      }

      function render() {
        renderer.render(scene, camera);
      }

      animate();
    });

    return { cameraRef, containerRef, canvasRef, createCameraElement };
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
