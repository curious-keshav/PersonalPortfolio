import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";
// import * as random from "maath/random/dist/maath-random.esm";
function isDarkModeEnabled() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  // const starColor = darkMode ? "white" : "black";
  console.log("heyyyyyyyyyyyyyy");
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const userPref = window.localStorage.getItem('theme');

  const mediaQuery = window.matchMedia(userPref);
  const colorPref = (mediaQuery.media==="dark"?"white":"black")
  
console.log(mediaQuery.media);
console.log("yooooooooooooooooooooo");
console.log(document.documentElement.scrollHeight);
const maxHeight = document.documentElement.scrollHeight;
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colorPref}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {

  return (
    <div className='w-full h-full absolute inset-0 z-[-1] '>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;