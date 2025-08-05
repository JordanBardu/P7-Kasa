function MainBanner({ bannerText, imageSrc }) {
  return (
    <div
      className="main-banner-container main-container"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grey-filter">{bannerText && <h1>{bannerText}</h1>}</div>
    </div>
  );
}

export default MainBanner;
