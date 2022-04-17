
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

function States() {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
          <div>
            <h1>Play Details -  States</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur,
              nisi nunc ultricies nisi, eget consectetur nunc nisi
              euismod nunc.
            </p>
          </div>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default States;