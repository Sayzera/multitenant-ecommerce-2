interface Props {
  params: Promise<{
    category: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { category } = await params;
  console.log(category);
  return <div>x</div>;
};

export default Page;
