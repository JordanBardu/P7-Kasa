function MainBanner({ bannerText, imageSrc }) {
  return (
    <div
      className="main-banner-container main-container"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {bannerText && <h1>{bannerText}</h1>}
    </div>
  );
}

export default MainBanner;
