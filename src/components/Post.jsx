import React from "react";
import { Col, Row } from "react-grid-system";
import YouTube from "react-youtube";

const Post = ({ post, id, text, imageUrl, videoUrl }) => {
  const opts = {
    height: "270",
    width: "480",
  };

  const showPostsMedia = () => {
    if (imageUrl) {
      return <img className="post__image" src={imageUrl} />;
    } else if (videoUrl) {
      let n = videoUrl.lastIndexOf("/");
      let embCode = videoUrl.substring(n + 1);
      console.log(embCode);
      return (
        <div className="iframe__wrapper">
          <YouTube opts={opts} videoId={embCode} />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const showPostText = () => {
    if (text) {
      return <p>{text}</p>;
    } else {
      return "";
    }
  };
  console.log(post);
  return (
    <Col lg={12} className="post">
      <Row>
        <Col lg={6}>{showPostsMedia()}</Col>
        <Col lg={6}>
          <h2>Post title{id}</h2>
          {showPostText()}
        </Col>
      </Row>
    </Col>
  );
};

export default Post;
