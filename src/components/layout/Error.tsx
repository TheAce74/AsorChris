import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <section className="error">
      <div className="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        className="logo-404"
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        className="meteor"
      />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You&apos;re either misspelling the URL <br /> or requesting a page
        that&apos;s no longer here.
      </p>
      <div>
        <button className="btn-back" onClick={handleClick}>
          Back to previous page
        </button>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className="spaceship"
      />
    </section>
  );
}
