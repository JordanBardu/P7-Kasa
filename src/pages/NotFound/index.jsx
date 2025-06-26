import "../../assets/style/notfound.css";

function NotFound() {
  return (
    <>
      <div className="not-found-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
    </>
  );
}

export default NotFound;
