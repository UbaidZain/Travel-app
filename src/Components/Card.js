function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img" />
      <div className="card-text-container">
        <div className="card-location">
          <i class="fa-solid fa-location-dot"></i>
          <p>{props.location}</p>

          <a href="#">View on google maps</a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-timeline">{props.timeline} </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
export default Card;
