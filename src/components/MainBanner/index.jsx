function MainBanner({ bannerText }) {
  // TODO: prendre une image source en entrée
  return (
    <div className="main-banner-container">
      {bannerText && <h1>{bannerText}</h1>}
    </div>
  );
}

export default MainBanner;
