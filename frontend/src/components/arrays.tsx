type Keys = {
  dimension: number;
};

export default function Vectors({ dimension }: Keys) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Array(dimension)
        .fill(0)
        .map((_, dimension) => (
          <input
            style={{ margin: "3px", width: "18px", height: "18px" }}
            key={dimension}
          />
        ))}
    </div>
  );
}
