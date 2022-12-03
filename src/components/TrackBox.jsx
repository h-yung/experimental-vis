import { useMousePosition } from "../hooks/positionHook";

export default function TrackBox() {
  const [mousePosition, handleMouseMove] = useMousePosition();

  return (
    <>
      <div className="trackbox__wrapper wrapper">
        <div className="comment">
          <p>Mouse position: {JSON.stringify(mousePosition)}</p>
        </div>
        <div className="tracked-area" onMouseMove={handleMouseMove}></div>
      </div>
    </>
  );
}
