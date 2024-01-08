import React, { useEffect, useState } from "react";
import { Card, FormField, Loader } from "../components";
import { Spinner, Box, Heading, Text, Flex, Spacer } from "@chakra-ui/react";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <Heading
      as="h2"
      mt={5}
      fontSize="xl"
      fontWeight="bold"
      color="#009e66"
      textTransform="uppercase"
    >
      {title}
    </Heading>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/create-post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = allPosts.filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedResults(searchResult);
  };

  return (
    <Box as="section" maxW="7xl" mx="auto">
      <Flex w="90%">
        <Box>
          <Heading as="h1" fontWeight="bold" color="#f0f0f0" fontSize="37px">
            The Community Showcase
          </Heading>
          <Text mt={2} color="#9f9f9f" fontSize="15px" maxW="500px">
            Browse through a collection of imaginative and visually stunning
            memes generated by AIMemesGallery 1.0
          </Text>
        </Box>
        <Spacer />
      </Flex>

      <Box mt={16}>
        <FormField
          color="#9f9f9f"
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </Box>

      <Box mt={10}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Loader />
          </Box>
        ) : (
          <>
            {searchText && (
              <Heading
                as="h2"
                fontWeight="medium"
                fontSize="xl"
                mb={3}
                color="#9f9f9f"
              >
                Showing Results for &nbsp;
                <Text as="span" color="#fff">
                  {searchText}
                </Text>
                :
              </Heading>
            )}
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={3}
            >
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards data={allPosts} title="No Posts Yet" />
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
