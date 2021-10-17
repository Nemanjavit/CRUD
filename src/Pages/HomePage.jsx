import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { getPosts } from "../Api/Api";
import Post from "../components/Post";

function HomePage() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => {
      setAllPosts(res.data);
    });
  }, []);

  //   console.log(allPosts);
  return (
    <Container lg>
      <h2>Home page</h2>
      <Row>
        <Col lg={8}>
          {allPosts !== []
            ? allPosts.map((post) => {
                console.log(post.videoUrl, "map");
                return (
                  <Post
                    key={post.id}
                    text={post.text}
                    id={post.id}
                    post={post}
                    imageUrl={post.imageUrl}
                    videoUrl={post.videoUrl}
                  />
                );
              })
            : null}
          <Row>
            <Post />
          </Row>
        </Col>
        <Col lg={4}>
          <h3>sidebar</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
