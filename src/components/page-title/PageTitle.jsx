import './PageTitle.scss'

const PageTitle = ({ page }) => {
  return (
    <div className="page-title">
      <div className="container">
        <div className="title">{page}</div>
        <hr />
      </div>
    </div>
  );
};

export default PageTitle;
