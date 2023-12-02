import { useState } from "react";
import Vectors from "./arrays.tsx";

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

export function Content() {
  const [dimension, setDimension] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [visible, setButtonVisible] = useState(false);

  const unhideButton = () => {
    setButtonVisible(true);
  };

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

      <div>
        {visible && (
          <button
            id="calculate"
            style={{
              float: "right",
              marginRight: "135px",
              backgroundColor: "rgb(50, 20, 51)",
              color: "antiquewhite",
              fontSize: "16px",
              boxShadow: "2px 2px 4px 2px black",
            }}
          >
            Calculate
          </button>
        )}
      </div>

      <div style={{ width: "220px" }}>
        <label>Amount of vectors? </label>
        <input
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          type="number"
          min="0"
          max="10"
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
          value={dimension}
          onChange={(e) => setDimension(parseInt(e.target.value))}
          type="number"
          min="0"
          max="20"
          style={{
            marginTop: "25px",
            width: "40px",
          }}
        />
      </div>

      <div>
        <button
          id="operation"
          onClick={unhideButton}
          style={{
            margin: "20px",
            backgroundColor: "rgb(50, 20, 51)",
            color: "antiquewhite",
            fontSize: "16px",
            boxShadow: "2px 2px 4px 2px black",
          }}
        >
          Select operation:
        </button>
      </div>
      <div>
        <div style={{ marginTop: "20px" }}>
          <label>Enter values for each vector:</label>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Array(quantity)
            .fill(0)
            .map((_, quantity) => (
              <Vectors dimension={dimension} key={quantity} />
            ))}
        </div>
      </div>
    </div>
  );
}
