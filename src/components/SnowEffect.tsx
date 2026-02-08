import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
        <Snowfall
            snowflakeCount={100}
            speed={[0.5, 1.5]}
            wind={[-0.5, 3.0]}
            radius={[0.5, 4.0]}
            color="white"
            style={{
                pointerEvents: "none", // 클릭 방해 X
            }}
        />
    </div>
  );
}
