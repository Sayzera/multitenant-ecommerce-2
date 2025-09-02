"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
   
  const trpc = useTRPC();
  const { data } = useQuery(trpc.auth.session.queryOptions())

  console.log(data, 'data')

  return <div>Home</div>;
};

export default Home;
