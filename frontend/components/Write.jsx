import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { categoryList } from "../services/categories";

const Write = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleIsAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Select category"
            value={category}
            onChange={handleCategoryChange}
          >
            {categoryList.slice(1).map((category) => (
              <option key={category.key} value={category.key}>
                {category.title}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Mento</FormLabel>
          <Select
            placeholder="Select sub category"
            value={subCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Content</FormLabel>
          <Textarea
            placeholder="Enter content"
            value={content}
            onChange={handleContentChange}
            size="lg"
          />
        </FormControl>
        <Flex alignItems="center" justifyContent="space-between" mb={4}>
          <Checkbox isChecked={isAnonymous} onChange={handleIsAnonymousChange}>
            Post anonymously
          </Checkbox>
          <Button type="submit" colorScheme="blue">
            Write
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Write;
