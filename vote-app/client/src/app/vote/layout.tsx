import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Voting App | Bibhash"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full w-full  bg-light-black">
            {/* 
          layouts are used to create common elements like nav,headers etc
      */}
            <div className='flex flex-col flex-wrap  justify-center min-h-80 bg-white px-20'>
                <p className='text-xxl text-slate-500'>Language Vote App  !!</p>
                <p className='text-xl '>Made with <span className="text-red-500">❤</span> by <span className="text-slate-500">Bibhash Singh</span></p>
            </div>
            <div >{children}</div>
        </div>
    );
}
