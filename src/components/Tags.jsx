import { posts } from "../data/posts";

export default function tagslist(tag) {
  return (
    <ul className="tag-list">
      <li>{tag}</li>
    </ul>
  );
}
