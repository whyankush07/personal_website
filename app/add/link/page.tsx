"use client";

import GetALlLinks from "@/components/projects/ProjectLinks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

export default function Page() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [send, setSend] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setSend(true);
      const formdata = new FormData();
      formdata.append("name", input1);
      formdata.append("link", input2);
      formdata.append("favicon", file as File);
      const response = await axios.post("/api/projects/addlink", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        setInput1("");
        setInput2("");
        setFile(null);
        toast({
          title: "Success",
          description: response.data.message,
          duration: 2000,
        })
        setSend(false);
      }
    } catch (error) {
      setSend(false);
    }
  };

  return (
    <div className="h-screen flex px-6 justify-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col rounded-lg shadow-lg space-y-6"
      >
        <div className="space-y-2">
          <label
            htmlFor="input1"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="input2"
            className="block text-sm font-medium text-gray-700"
          >
            Link
          </label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Favicon
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Button
          type="submit"
        //   className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {send ? (
            <span className="flex space-x-2 items-center">
              Sending... <TbLoader2 className="animate-spin" />
            </span>
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </div>
  );
}
