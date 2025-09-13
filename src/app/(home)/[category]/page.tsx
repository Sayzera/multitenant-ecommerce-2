import { ProductFilters } from "@/modules/products/ui/components/product-filters";
import {
  ProductList,
  ProductListSkeleton,
} from "@/modules/products/ui/components/product-list";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    category: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { category } = await params;

  // Veriyi önceden çağırır ve cachler
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({
      category,
    })
  );

  return (
    <div>
      <div className="px-4 lg:px-12 py-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12">
         <div className="lg:col-span-2 xl:col-span-2">
          <ProductFilters />
         </div>
        <div className="lg:col-span-4 xl:col-span-6">
            <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList category={category} />
            </Suspense>
          </HydrationBoundary>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
