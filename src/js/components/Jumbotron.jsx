import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          felis congue, tempus justo id, vestibulum dui. Nulla maximus vitae
          libero ut egestas. Cras elementum nec ante non accumsan.
        </p>
        {/* <hr className="my-4" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          felis congue, tempus justo id, vestibulum dui. Nulla maximus vitae
          libero ut egestas. Cras elementum nec ante non accumsan.
        </p> */}
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call To Action!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
