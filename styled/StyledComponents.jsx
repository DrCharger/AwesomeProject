import styled from "styled-components/native";

export const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

export const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const PostView = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.5);
  flex-direction: row;
`;

export const PostImg = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

export const PostData = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.5);
`;

export const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;
