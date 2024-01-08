import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useToast,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { getRandomPrompt } from "../utils";
import { preview } from "../components/assets";
import { FormField, Loader } from "../components";
import { ImMagicWand } from "react-icons/im";
import { createPost, gererateImage } from "../api/api";

const CreatePost = () => {
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await gererateImage(form.prompt);
        // fetch("http://localhost:8080/generate-image", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     prompt: form.prompt,
        //   }),
        // });
        console.log("generating image resoinse :", response);

        const data = await response.json();
        console.log("data ", data);
        setForm({ ...form, photo: data.photo });
      } catch (err) {
        toast({
          title: "Error",
          description:
            "An error occurred while generating the image, please try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        <Loader />;
      } finally {
        setGeneratingImg(false);
      }
    } else {
      toast({
        title: "Warning",
        description: "Please provide a proper prompt",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await createPost(form);
        toast({
          title: "Success",
          description: "post was created successfully ",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate("/");
      } catch (err) {
        toast({
          title: "Error",
          description:
            "An error occurred while creating the meme, please try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        <Loader />;
      } finally {
        setLoading(false);
      }
    } else {
      toast({
        title: "Warning",
        description: "Please generate an image with proper details",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box maxW="7xl" mx="auto">
      <Box>
        <Heading as="h1" fontWeight="bold" color="#f0f0f0" fontSize="37px">
          Create
        </Heading>
        <Text mt="2" color="#9f9f9f" fontSize="15px" maxW="500px">
          Generate an imaginative image through AIMemesGallery 1.0 and share it
          with the community
        </Text>
      </Box>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <Flex flexDir="column" gap="5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., anass bentaib"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <Box
            bg="gray.50"
            border="1px"
            borderColor="gray.300"
            color="gray.900"
            fontSize="sm"
            rounded="lg"
            focusBorderColor="blue.500"
            w="64"
            p="3"
            h="64"
            flex="1"
            justify="center"
            align="center"
            pos="relative"
          >
            {form.photo ? (
              <Image
                src={form.photo}
                alt={form.prompt}
                w="full"
                h="full"
                objectFit="contain"
              />
            ) : (
              <Image
                src={preview}
                alt="preview"
                w="9/12"
                h="9/12"
                objectFit="contain"
                opacity="01"
              />
            )}

            {generatingImg && (
              <Flex
                pos="absolute"
                inset="0"
                zIndex="0"
                justify="center"
                align="center"
                bg="rgba(0,0,0,0.5)"
                rounded="lg"
              >
                <Spinner />
              </Flex>
            )}
          </Box>
        </Flex>

        <Box mt="5">
          <Text color="#9f9f9f" fontSize="15px">
            {generatingImg ? "in less than a minute... please wait" : ""}
          </Text>
        </Box>

        <Box mt="10">
          <Button
            type="button"
            mt="3"
            color="white"
            bg="#009e66"
            _hover={{ bg: "#009e66" }}
            fontWeight="medium"
            rounded="md"
            fontSize="sm"
            w={{ base: "100%", sm: "auto" }}
            px="10"
            py="6"
            textAlign="center"
            onClick={generateImage}
          >
            {generatingImg ? "Generating..." : "Generate"}
          </Button>
        </Box>

        <Box mt="10">
          <Text mt="2" color="#666e75" fontSize="14px">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </Text>
          <Button
            type="submit"
            mt="3"
            color="white"
            bg="#6469ff"
            _hover={{ bg: "#6469ff" }}
            fontWeight="medium"
            rounded="md"
            fontSize="sm"
            w={{ base: "100%", sm: "auto" }}
            px="10"
            py="6"
            textAlign="center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
