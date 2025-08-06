function HousingRating({ value }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <div
        key={i}
        className={`${i <= value ? "star-active" : "star-inactive"}`}
      />,
    );
  }

  return <div className="stars-container">{stars}</div>;
}

export default HousingRating;
