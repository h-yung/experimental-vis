//stuck...https://blog.devgenius.io/how-to-use-three-js-in-a-react-app-to-render-a-3d-model-4a1d31ead00c

import { useMousePosition } from "../../hooks/positionHook";
import { useEffect, useRef, useState } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PMREMGenerator,
  CubeTextureLoader,
  Mesh,
  Color,
  ImageUtils,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./track-box.css";
/**Other popular parts of the library — such as controls, loaders, and post-processing effects — must be imported from the examples/jsm subfolder */

export default function TrackBox() {
  const [mousePosition, handleMouseMove] = useMousePosition();

  //scene setup
  // const [renderer, setRenderer] = useState(new WebGLRenderer());
  const sceneRef = useRef(); //to attach rendered scene to comp element output
  const sceneWidth = window.innerWidth;
  const sceneHeight = window.innerHeight;

  const camera = new PerspectiveCamera(
    50, //field of view: cam frustrum vertical view, default=50
    window.innerWidth / window.innerHeight, //cam frus aspect ratio, default=1
    0.1, //near plane, default=0.1
    5000 //far plane, default=2000; lower = too small
  );

  const renderer = new WebGLRenderer();
  //sizing - adjust as needed
  renderer.setSize(sceneWidth, sceneHeight, false); //(width, height, depth? OR false + lower res sizing by denominator)
  const render = () => {
    renderer.render(scene, camera);
  };
  //be aware that you must hard reload vite here

  //subject
  const geometry = new BoxGeometry(1, 1, 1); //params: points/vertices and faces/fill
  // const material = new MeshBasicMaterial({ color: 0x00ff00 }); //hex colors and some built-in materials options
  const material = new MeshPhysicalMaterial({});
  material.reflectivity = 0.5;
  material.transmission = 1.0;
  material.roughness = 1.0;
  material.metalness = 0;
  material.clearcoat = 0.8;
  material.clearcoatRoughness = 0.25;
  material.color = new Color(0xffffff);
  material.ior = 1.2;
  material.thickness = 10.0;

  const pmremGenerator = new PMREMGenerator(renderer);
  const envTexture = new CubeTextureLoader().load(
    [
      "/1-px_ai.png",
      "/2-nx_ai.png",
      "/3-py_ai_b.png",
      "/4-ny_ai.png",
      "/5-pz_ai.png",
      "/6-nz_ai.png",
    ],
    () => {
      material.envMap = pmremGenerator.fromCubemap(envTexture).texture;
      pmremGenerator.dispose();
      scene.background = material.envMap;
    }
  );
  const cube = new Mesh(geometry, material); //apply material to the geometry

  //camera orbits around target
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render);

  const scene = new Scene();

  useEffect(() => {
    if (sceneRef.current /*&& !renderer*/) {
      sceneRef.current.appendChild(renderer.domElement);

      scene.add(cube); //insert subject into scene, defaults at coord (0,0,0)...
      // camera.position.z = 6; //... so some separation of camera position is specified. Higher num = farther from subject

      camera.position.set(0, 5, 6);
      controls.update();

      animate();
      // render draws scene on every screen refresh
      function animate() {
        requestAnimationFrame(animate);
        //add mvmt
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // cube.rotation.x += mousePosition.x * 0.0001;
        // cube.rotation.y += mousePosition.y * 0.0001;
        render();
      }
    }
    return () => {
      sceneRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="wrapper">
      <div>
        <div className="comment">
          <p>Mouse position: {JSON.stringify(mousePosition)}</p>
        </div>
        <div
          // className="rendered-scene"
          className="tracked-area"
          onMouseMove={handleMouseMove}
          id="rendered-cube"
          style={{
            width: sceneWidth,

            // width: sceneWidth,
            // height: sceneHeight,
            // width: sceneWidth,
            // height: sceneHeight - 100,
            border: "1px solid red",
          }}
          ref={sceneRef}
        ></div>
      </div>
    </div>
  );
}
