import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, View, FlatList } from "react-native";
import { Stack } from "native-base";
import { getPosts } from "../../api/posts";
import { Wrapper, Loading, NoResults, ErrorMessage } from "../../styles";
import { type Post } from "../../types";
import PostCard from "./components/PostCard";
import { ERRORS } from "../../constants/errors";

const Title = styled.Text`
  font-family: "Prompt-Medium";
  font-size: 21px;
`;

const Results = styled.Text`
  font-family: "Prompt-Regular";
  font-size: 12px;
  margin-bottom: 20px;
`;

const Index = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((res) => {
        setLoading(false);
        setPosts(res);
      })
      .catch((error) => {
        setLoading(false);
        setError(ERRORS.NETWORK);
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Stack
        direction="row"
        space={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <Title>Posts</Title>
          {posts && <Results>{posts.length} Encontrados</Results>}
        </View>
      </Stack>

      {loading ? (
        <Loading>Cargando...</Loading>
      ) : (
        <View>
          {posts && posts.length ? (
            <SafeAreaView>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={posts}
                renderItem={({ item }: any) => <PostCard {...item} />}
                keyExtractor={(item: any) => item.id}
              />
            </SafeAreaView>
          ) : (
            <NoResults>No hay empleados</NoResults>
          )}
          {error !== null && <ErrorMessage>{error}</ErrorMessage>}
        </View>
      )}
    </Wrapper>
  );
};

export default Index;
