import Card from "./Card";
import "../data/posts";
import { posts } from "../data/posts";
export default function () {
  return (
    <section>
      <div className="container d-flex align-items-center">
        <div className="row row-cols-2 g-2">
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
    </section>
  );
}
