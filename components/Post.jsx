import React from "react";
import {
  PostData,
  PostDetails,
  PostImg,
  PostTitle,
  PostView,
} from "../styled/StyledComponents";

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }
  return str;
};

const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImg
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostData>{createdAt}</PostData>
      </PostDetails>
    </PostView>
  );
};

export default Post;
