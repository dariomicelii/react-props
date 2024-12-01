export default function Card() {
  return (
    <div className="card my-5">
      <div className="img-content">
        <img
          src="https://i.ytimg.com/vi/kZ0NosptZd8/maxresdefault.jpg"
          className="img-fluid card-img-top"
          alt=""
        />
      </div>
      <div className="text-content">
        <div className="container p-2">
          <h5>Title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            reprehenderit aperiam repellat impedit!
          </p>
          <div className="btn btn-primary">Leggi di più</div>
        </div>
      </div>
    </div>
  );
}
