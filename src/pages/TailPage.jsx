import React from "react"
const TailPage = () => {
    const border = 0
    return (
        <div className="w-full min-h-screen bg-gradient-to-t from-slate-700 to-slate-950 ">
            <nav className="flex justify-around items-center h-20 p-10">
                <div className="flex justify-between items-center gap-4">
                    <div>
                        <h1 className="text-slate-50 font-bold text-xl">YASSINE <span className="text-red-800 font-bold text-xl">ENNAYA</span></h1>

                    </div>
                    <div className="w-px h-6 bg-slate-50"></div>
                    <div className="flex justify-between gap-4">
                        <button className={`px-4 py-2 mx-2 rounded-full ${
                            border === 0
                            ? 'bg-slate-600 text-white'
                            : 'bg-gray-700 text-blue-300 hover:bg-gray-600'
                        } transition-all duration-300`}>HOME</button>
                        <button className="font-bold border-b-2">ABOUT</button>
                        <button className="font-bold">CONTACT</button>
                    </div>

                </div>
                
                <div className="flex justify-between items-center gap-4">
                    <button className="font-bold">login</button>
                    <button className="font-bold bg-green-800 rounded-md p-2">sign up</button>
                </div>
            </nav>
            <div className="flex flex-col justify-center h-[calc(100vh-5rem)] w-full items-center gap-4">
                <div>
                    <img src="/Picture1.png" alt="re"/>
                    <div className="absolute w-48 h-48 bg-cyan-400 top-1/2 left-1/2 blur-[10rem] rounded-lg"></div>
                    <div className="absolute w-48 h-48 bg-cyan-400 bottom-1/2 right-1/2 blur-[10rem] rounded-lg"></div>
                </div>
                <div className="text-[3rem] m-4 flex flex-col justify-center border-b-2">
                    <h1 className="font-medium">THIS IS THE <span className=" font-bold text-cyan-400">FUTURE</span> </h1>
                    <h1 className="font-bold text-end">START NOW !</h1>
                </div>
                
            </div>
        </div>
    )
}
export default TailPage;