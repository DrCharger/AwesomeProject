import Post from "../components/Post";
import { View, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { fetcher } from "../utilits.ts/gateways";

export default function Home({ navigation }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetcher()
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Go");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetcher} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                title: item.title,
                item,
              })
            }
          >
            <Post
              title={item.title}
              createdAt={new Date(item.publishedAt).toDateString()}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
