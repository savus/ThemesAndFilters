export const PortFolioCard = ({ image }: { image: string }) => {
  return (
    <>
      <div className="portfolio-card" data-filter="web">
        <div className="card-body">
          <img src={image} alt="" />
          <a href="#" className="popup-box">
            <div>Web Development</div>
            <h3>Food Website</h3>
          </a>
        </div>
      </div>
    </>
  );
};
