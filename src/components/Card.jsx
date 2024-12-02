import "../data/posts";
import { posts } from "../data/posts";
import Button from "./Button";
import tagslist from "./Tags";
import Tags from "./Tags";
import Title from "./Title";

export default function Card({
  id,
  title,
  image,
  description,
  tags,
  published,
}) {
  if (published) {
    return (
      <div className="card m-5">
        <div className="img-content">
          <img src={image} className="img-fluid card-img-top" alt="" />
        </div>
        <div className="text-content">
          <div className="container p-2">
            <h5>{title}</h5>
            <p>{description}</p>
            <Button text="LEGGI DI PIU'" />
            <p>{`tags: ${tags}`}</p>
          </div>
        </div>
      </div>
    );
  }
}
