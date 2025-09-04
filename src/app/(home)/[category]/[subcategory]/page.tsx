interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { category, subcategory } = await params;
  console.log(category);
  return <div>{category + ' ' + subcategory}</div>;
};

export default Page;
