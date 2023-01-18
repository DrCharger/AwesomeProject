import React, { useEffect } from "react";
import { View } from "react-native";
import { PostImage, PostText } from "../styled/StyledComponents";

const FullPost = ({ route, navigation }) => {
  const { title, item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: item.imageUrl,
        }}
      />
      <PostText>{item.summary}</PostText>
    </View>
  );
};

export default FullPost;
