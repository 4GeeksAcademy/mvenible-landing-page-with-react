import React from "react";

const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4">
      <div className="card h-100">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          style={{ width: "100%", height: "325px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer p-3 bg-light text-center border-top">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
