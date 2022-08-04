import PlayHeader from "common/playlists/PlayHeader";
import GradientComponent from "./GradientComponent";
import "./styles.css";
import gradients from "./gradients.json";

// WARNING: Do not change the entry componenet name
function ReactGradients(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="grid grid-cols-3 gap-10">
            {gradients.map((gradient) => (
              <GradientComponent
                name={gradient.name}
                css={gradient.css}
                tailwind={gradient.tailwind}
              />
            ))}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
