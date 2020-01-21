<template>
  <div class="3d-plane">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three'
import  GLTFLoader  from 'three-gltf-loader';
export default {
  name: 'Plane',
  props: {
    source: {
      type: String,
      default: 'users'
    }
  },
  components:{
    THREE,
    GLTFLoader
  },
  data() {
    return {
      entities: []
    }
  },
  mounted() {
    const canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF0F8FF);
    const camera = new THREE.PerspectiveCamera(40,canvas.width/canvas.height,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;
    const renderer = new THREE.WebGLRenderer({antialias:true,canvas:canvas});
    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    // renderer.setSize(canvas.width/canvas.height);
    // document.body.appendChild(renderer.domElement);
    const hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);
    const directionalLight = new THREE.DirectionalLight(0xffffff,100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);
    const light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);
    const light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    const light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    scene.add(light4);
    const loader = new GLTFLoader();
    loader.load('https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf', function(gltf){
    let car = gltf.scene.children[0];
    car.scale.set(0.5,0.5,0.5);
    scene.add(gltf.scene);
    // animate();
});
  }
}
</script>

<style lang="scss" scoped>
$background: #eff8ff;
.list {
  background: $background;
  max-height: 550px;
  overflow: auto;
}
</style>
