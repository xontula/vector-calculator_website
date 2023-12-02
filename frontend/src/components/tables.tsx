export function ContentBody() {
  return (
    <div
      style={{
        backgroundColor: "antiquewhite",
        padding: "2px",
        maxWidth: "800px",
      }}
    >
      <div
        style={{
          border: "6px ridge rgb(85, 39, 83)",
          padding: "30px",
          paddingBottom: "100px",
        }}
      >
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div>
      <h1 id="table1_h1">Vector Calculator</h1>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>

      <div style={{ width: "220px" }}>
        <label>Amount of vectors? </label>
        <input
          id="quantity"
          type="number"
          min="0"
          max="23"
          style={{
            marginTop: "25px",
            width: "40px",
          }}
        />
      </div>
      <div style={{ width: "270px" }}>
        <label>Dimension of the vectors? </label>
        <input
          id="dimension"
          type="number"
          min="0"
          max="40"
          style={{
            marginTop: "25px",
            width: "40px",
          }}
        />
      </div>
      <div style={{ marginTop: "35px" }}>
        <button id="generate">Generate vectors</button>

        <div style={{ marginTop: "35px" }}>
          <label>Enter values for each vector:</label>
        </div>

        <div style={{ width: "728px", marginTop: "25px" }}>...</div>
      </div>
    </div>
  );
}
