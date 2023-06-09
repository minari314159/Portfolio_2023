import {Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } =  useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        fontSize: 14,
        color: '#4A4A4A',
        fontWeight: 300,
        marginTop: 40
      }}>
        {progress.toFixed(1)}%</p> 
    </Html>
  )
}

export default Loader