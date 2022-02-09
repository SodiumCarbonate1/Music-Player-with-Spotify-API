import {signOut, useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";
import {shuffle} from "lodash";
import { useRecoilValue,useRecoilState } from "recoil";
import { playlistIdState,playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";
import Songs from "./Songs";

const setsofcolor=[
    "from-purple-500",
    "from-green-500",
    "from-red-500",
    "from-pink-500",
    "from-yellow-500"
]
function Center() {
    const {data: session} = useSession();
    const [color, setColor] = useState(null);
    const [playlist, setPlaylist] = useRecoilState(playlistState);
    const playlistId = useRecoilValue(playlistIdState);
    const spotifyApi = useSpotify();
    useEffect(() => { 
        setColor(shuffle(setsofcolor).pop())
    }, [playlistId]);

    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) =>{
            setPlaylist(data.body);
        }).catch((err)=>console.log("Wrong",err));
    }, [spotifyApi,playlistId]);

    console.log(playlist);
    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div className="flex items-center space-x-3 opacity-90 hover:opacity-80 rounded-full p-1 pr-2 bg-blue-300 text-white" onClick={signOut}>
                    <img className="rounded-full w-10 h-10" src={session?.user.image} alt=""/>
                    <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="w-5 h-5 cursor-pointer"/>
                </div>
            </header>
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
                <img className="h-44 w-44 shadow-2x" src={playlist?.images?.[0]?.url} alt=""/>
                <div>
                    <p>Playlist</p>
                    <h1 className="text-2xl md:text-3xl xl: text-5xl font-bold">{playlist?.name}</h1>
                </div>
            </section>
            <div>
                <Songs/>
            </div>
        </div>
    )
}

export default Center
