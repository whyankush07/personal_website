'use client';
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbLoader2 } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { useToast } from "../ui/use-toast";
import { ApiResponse } from "@/types/ApiResponse";
import ProjectLinksSkeleton from "@/components/skeleton/ProjectLinkSkeleton";
import Loading from "@/components/loading";
import { motion } from "framer-motion";

interface FreelanceProjectsType {
  _id: string;
  name: string;
  link?: string;
  icon?: string;
  shopify?: boolean;
}

export default function FreelanceLinks() {
  const [data, setData] = useState<FreelanceProjectsType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/freelance/get");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  if (loading) {
    return <ProjectLinksSkeleton />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        rotate: -0.5,
        transition: { duration: 0.2 }
      }}
      className="relative transition-all duration-300 p-5 rounded-xl border border-border/60 hover:border-border bg-card hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 w-full"
    >
      {/* Corner accent - different position than other card */}
      <motion.div 
        className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#a0d9ef] rounded-full opacity-70"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <div className="flex flex-col space-y-4">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ x: 5 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <motion.h3 
            className="text-sm text-muted-foreground font-medium tracking-wide"
            whileHover={{ 
              x: -2,
              transition: { duration: 0.2 }
            }}
          >
            <span className="inline-block" style={{ transform: 'rotate(0.5deg)' }}>Freelance</span>
            {' '}
            <span className="inline-block" style={{ transform: 'rotate(-0.5deg)' }}>Projects</span>
          </motion.h3>
          {data && data.length > 0 && (
            <motion.span 
              className="text-xs text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-full"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              {data.length}
            </motion.span>
          )}
        </motion.div>
        
        {data === null ? (
          <Loading>Loading Projects</Loading>
        ) : data.length === 0 ? (
          <motion.p 
            className="text-xs text-muted-foreground/60 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            No projects yet
          </motion.p>
        ) : (
          <div className="flex flex-col space-y-2">
            {data.map((link, index) => (
              <motion.div
                key={link._id}
                initial={{ opacity: 0, x: 20, rotate: 2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  x: -4,
                  rotate: index % 2 === 0 ? -0.5 : 0.5,
                  transition: { duration: 0.2 }
                }}
              >
                <FreelanceLinkCard params={link} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

const FreelanceLinkCard = ({ params }: { params: FreelanceProjectsType }) => {
  const [send, setSend] = useState(false);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const { toast } = useToast();

  const deleteLink = async (id: string) => {
    try {
      setSend(true);
      const res = await axios.get(`/api/freelance/delete/${id}`);
      toast({
        title: "Deleted Successfully",
        description: res?.data.message,
        duration: 2000
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        variant: 'destructive',
        duration: 2000,
        description: axiosError?.response?.data.message
      });
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex items-center justify-between group/item">
      <Link 
        href={params?.link || "/"} 
        target={params.link !== "" ? "_blank" : "_parent"} 
        className="group flex items-center text-sm font-medium flex-1"
      >
        {params?.icon && (
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={params.icon}
              alt={params.name}
              width={18}
              height={18}
              className="mr-2 rounded-sm"
              fetchPriority="high"
            />
          </motion.div>
        )}
        <motion.span 
          className="text-foreground group-hover:text-[#62c1e5] transition-colors"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          {params.name}
        </motion.span>
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaArrowRight 
            className="ml-2 text-muted-foreground group-hover:text-[#62c1e5] transition-colors" 
            size={12}
          />
        </motion.div>
      </Link>
      
      {email === "deshwalankush23@gmail.com" && (
        <motion.button 
          onClick={() => deleteLink(params?._id)}
          className="p-1 rounded-md text-muted-foreground hover:text-red-500 hover:bg-accent transition-colors"
          aria-label="Delete project"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9, rotate: 5 }}
        >
          {send ? (
            <TbLoader2 className="animate-spin" size={16} />
          ) : (
            <motion.div
              whileHover={{ rotate: [0, -15, 15, -15, 0] }}
              transition={{ duration: 0.5 }}
            >
              <MdDelete size={16} />
            </motion.div>
          )}
        </motion.button>
      )}
    </div>
  );
}