import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Responsive__.css";
import "./Article.css";

function Article() {
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/article/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/")
      .then((response) => response.json())
      .then((data) => {
        const random = Math.floor(Math.random() * data.length);
        random + 4 > data.length
          ? setBlogs(data.slice(random - 4, random))
          : setBlogs(data.slice(random, random + 4));
        console.log(random);
      });
  }, [id]);

  return (
    <>
      <div className="article">
        <img src={blog.image} alt="" />
        <h2>{blog.title}</h2>
        <span>{blog.created_date}</span>
        <br />
        <hr />
        <br />
        <h4>{blog.comments}</h4>
        <br />
        <div className="social__media">
          <a href="https://www.facebook.com" target="_blank">
            <div className="face">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fblog.zomato.com%2Ffrom-the-streets-of-bharat"
            target="_blank"
          >
            <div className="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <div className="twitter">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>
        </div>
      </div>
      <br />
      <div className="blog-four-maps">
        <h3>More for you to read</h3>
        <div className="blog-maps">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog__ones">
              <Link to={`/blog/${blog.id}`}>
                <div>
                  <img src={blog.image} alt="" />
                </div>
                <br />
                <div>
                  <p>{blog.category}</p>
                  <h4>{blog.title}</h4>
                  <p>{blog.created_date}</p>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Article;
