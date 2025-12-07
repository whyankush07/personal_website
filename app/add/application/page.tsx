"use client";

import GetALlLinks from "@/components/projects/ProjectLinks";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

export default function Page() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [github, setGithub] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [send, setSend] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        setSend(true);
        try {
            const formData = new FormData();
            formData.append("file", file as File);
            const response = await axios.post("https://api.devx.whyankush.wtf/service/upload-file", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "API_KEY": process.env.NEXT_PUBLIC_SUDODEV_API_KEY as string
                }
            });
            if (!response.data) {
                toast({
                    title: "Error",
                    description: "An error occurred while uploading the file",
                    variant: "destructive",
                })
                return;
            }
            const url = response.data;
            const data = {
                title,
                description,
                github,
                url
            }
            const res = await axios.post("/api/applications/save", data);
            toast({
                title: "Success",
                description: res.data.message,
            })
        } catch (error) {
            const axiosError = error as AxiosError<string | ApiResponse>;
            toast({
                title: "Error",
                description: typeof axiosError.response?.data === 'string' ? axiosError.response?.data : (axiosError.response?.data as ApiResponse).message,
                variant: "destructive",
            })
        } finally {
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
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700"
                    >
                        GitHub
                    </label>
                    <input
                        type="text"
                        id="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Icon
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
