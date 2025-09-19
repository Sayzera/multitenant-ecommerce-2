import { DEFAULT_LIMIT } from "@/constants";
import { loadProductFilters } from "@/modules/products/searchParams";

import { ProductListView } from "@/modules/products/view/product-list-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { SearchParams } from "nuqs";

interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
  searchParams: Promise<SearchParams>;
}
const Page = async ({ params, searchParams }: Props) => {
  const { subcategory } = await params;
  const filters = loadProductFilters(searchParams);
  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      ...filters,
      category: subcategory,
      limit: DEFAULT_LIMIT
    })
  );
  <div>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView category={subcategory} />
    </HydrationBoundary>
  </div>;
};

export default Page;
