function Card({ item, onClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${item.cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={onClick}
    >
      <p>{item.title}</p>
    </div>
  );
}

export default Card;
