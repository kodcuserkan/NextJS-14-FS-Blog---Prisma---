"use client";

import { BlogEntry } from "@/types";
import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const INPUT_CLASS = "border border-gray-300 rounded-md p-2 mb-4 w-full text-gray-800";

const BlogForm = () => {
  const [formData, setFormData] = useState<BlogEntry>({
    title: "",
    content: ""
  });
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <label>
        Title
        <input
          type="text"
          name="title"
          className={INPUT_CLASS}
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Content
        <ReactTextareaAutosize
          name="content"
          className={INPUT_CLASS}
          minRows={5}
          maxRows={10}
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="bg-blue-500 rounded-md">Submit</button>
    </form>
  );
};

export default BlogForm;
