

export const SignInView = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-[#F3F4EF] h-screen w-full lg:col-span-3 overflow-y-auto">
                Form column
            </div>

            <div className="h-screen w-full lg:col-span-2 hidden lg:block">
                Background column
            </div>


        </div>
    )
}