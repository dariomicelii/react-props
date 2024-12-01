import Card from "./Card";
import "../data/posts";
import { posts } from "../data/posts";
export default function () {
  return (
    <div className="row">
      <div className="col-4">
        <div className="container">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              description={post.content}
              tags={post.tags}
              published={post.published}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
