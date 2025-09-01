"use client";
// import { getQueryClient, trpc } from "@/trpc/server";
import { useTRPC } from "@/trpc/client";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const queryClient  =  getQueryClient();
  // const categoires = await queryClient.fetchQuery(trpc.categories.getMany.queryOptions())

  const trpc = useTRPC();
  const categories = useQuery(trpc.categories.getMany.queryOptions());

  console.log(categories.data, "categories");

  return <div>Home</div>;
};

export default Home;
