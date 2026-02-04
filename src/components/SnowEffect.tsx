import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <Snowfall
      snowflakeCount={120}
      color="white"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none", // 클릭 방해 X
      }}
    />
  );
}
