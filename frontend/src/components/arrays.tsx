type Keys = {
  dimension: number;
};

export default function Vectors({ dimension }: Keys) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array(dimension)
        .fill(0)
        .map((_, y) => (
          <input
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              width: "18px",
              height: "18px",
            }}
            key={y}
          />
        ))}
    </div>
  );
}
