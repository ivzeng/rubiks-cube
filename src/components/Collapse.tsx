interface Props {
  textMain: string;
  textContent: string;
  btnClassName: string;
  collapseClassName: string;
  id: string;
}

function Collapse({
  textMain,
  textContent,
  btnClassName,
  collapseClassName,
  id,
}: Props) {
  return (
    <div
      className="collapse-container"
      style={{ display: "flex", alignItems: "center", width: "100%" }}
    >
      <p>
        <button
          className={`btn ${btnClassName} btn-block`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {textMain}
        </button>
      </p>
      <div style={{ height: "50px", width: "90%" }}>
        <div className={`collapse ${collapseClassName}`} id={id}>
          <div
            className="card card-body overflow-y-scroll"
            style={{ height: "50px" }}
          >
            {textContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapse;