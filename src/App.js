import { useState } from "react";
import img1 from "./images/year1.jpeg";
import img2 from "./images/year2.jpeg";
import img3 from "./images/year3.jpeg";
import img4 from "./images/year4.jpeg";

export default function Example() {
  const [isNo, setIsNo] = useState(false);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [block4, setBlock4] = useState(false);
  const [block5, setBlock5] = useState(false);
  const [block6, setBlock6] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* This is just the background */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* This is just the background */}
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          {/* This is just the background */}
          <div
            className="relative left-[calc(50%-2rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#d30b5e] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          {/* This is just the background */}
          <div
            className="relative left-[calc(50%+22rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[90deg] bg-gradient-to-tr from-[#d30b5e] to-[#9089fc] opacity-50 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          {/* This is just the background */}
        </div>

        {/* --------Question Block 1------------- */}

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Sabse upar wala text */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-semibold text-indigo-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Hey Aru, It's your Rumm here!{" "}
            </div>
          </div>

          {/* First question */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our journey since 2018
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I have something for you, please start reading...
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              READYYYYYY?????
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => {
                  setBlock1(true);
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 py-1 px-4 bg-violet-50"
              >
                Yes Yes! 🥰
              </button>
              <button
                onClick={() => {
                  setIsNo(true);
                }}
                className="rounded-full text-xl font-semibold text-white bg-indigo-600 py-1 px-4"
              >
                No 🥺
              </button>
            </div>
          </div>

          {/* First Parah */}
          {isNo && (
            <div className="text-center">
              <h1 className="text-2xl p-1 mt-12 font-bold tracking-tight text-gray-900">
                No is not an option 🥲
              </h1>
              <h1 className="text-lg p-1 font-semibold tracking-tight text-gray-900">
                Click yessss 😤
              </h1>
            </div>
          )}
          {block1 && (
            <div className="text-center">
              <h1 className="text-2xl p-1 mt-12 font-bold tracking-tight text-gray-900">
                1st YEAR
              </h1>

              <p className="text-lg font-semibold mt-4">
                The day I met you , I dont exactly remember when , I never
                thought I would ever fall for you. But as time passed as I got
                to know you better I fell in love with you 🥰 . And, without
                giving it a second thought jaise hi mujhe realize hua I
                confessed. And since 11th July 2018 my life changed in a good
                way ofc, I cherish all those memories "HUMARA" bus journey,
                skywalk talks, lakshya ke baad doubt solving session ke naam pe
                rukhna, chinese bhel khana, saare festivals sath celebrate
                karna, shamko 6 baje call pe baatein karna, fir phone rakhte hi
                chat karna , boards ke time pe subhe jaldi uthane ke bahane 1
                ganta baat karna 😂 , ....... there is an endless list of our
                memories. I experienced all "MY FIRST" with you. We were kids
                when we started and today we have grown so much. Since day 1 we
                bonded so well and the bond we share I can never ever have this
                with anyone else. You were and are everything to me. Bohot
                fairytail love story tha humara 1st year toh jaise ideal
                relationship tha no fights, onlyyyy pyaarrr and pyarrrrr❤️ .
                Thennnnnn comes the 2nd year..........
              </p>
              <div className="flex grid-cols-4 content-center justify-center py-10 gap-4">
                <div className="flex w-75 h-75">
                  <img src={img1} alt="" />
                </div>
              </div>
              <button
                onClick={() => {
                  setBlock2(true);
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
              >
                Continue ❤️
              </button>
            </div>
          )}
          {block2 && (
            <div className="text-center w-full min-w-full">
              <button
                onClick={() => {
                  setBlock3(true);
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
              >
                Let's get back to reading 💗
              </button>
            </div>
          )}
          {block3 && (
            <div className="text-center">
              <h1 className="text-2xl p-1 mt-12 font-bold tracking-tight text-gray-900">
                2nd YEAR
              </h1>
              <p className="text-lg font-semibold mt-4">
                We entered the 2nd phase of our life. I was a bit insecure about
                us start mai ki kaise milenge kaise sab phele ki tarah hoga but
                it turned out to be a complete different thing. Everyday meeting
                after college, early morning movies, eating momos 🤤 , herbs and
                cheese maggi of sit down bistro, rishivan mai baith ke khana,
                gharpe chill karna, raatko khabhi khabhi classes ke baad milna.
                Ahhhhhh!!!! still feels like a yesterday thing. Few months were
                really difficult for me and you were there through thick and
                thin. But koi naa voh bhi haste haste pass hogaya. Fir aaya
                MANALI. It was by far the best trip. And all thanks to my travel
                guide. Thenn comes LOCKDOWN , kaise 3 din ek durse ko bina mile
                pagal hone wale log 3 mahina ek durse ko bina dekhe reh liye. It
                was really difficult itne ups and downs the mostly downss but
                still how we managed to get back. Trust me this was the phase
                that gave me confidence if we can survive this phase we can
                handle anything and we even did. I am gladddd you did'nt let me
                go, your one video melted my heart 🥺 . Again sorry tere 2nd
                Bday pe I could'nt make it.
              </p>
              <div className="flex grid-cols-4 content-center justify-center py-10 gap-4">
                <div className="flex w-75 h-75">
                  <img src={img2} alt="" />
                </div>
              </div>
              <button
                onClick={() => {
                  setBlock4(true);
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
              >
                Continue 💟
              </button>
            </div>
          )}
          {block4 && (
            <div className="text-center">
              <h1 className="text-2xl p-1 mt-12 font-bold tracking-tight text-gray-900">
                3rd YEAR
              </h1>
              <p className="text-lg font-semibold mt-4">
                Post lockdown phase was beautiful where again we started meeting
                , mini project ke naam pe. Staycations, movies, ghumna firna but
                one thing we missed the most was gharpe milke chill karna. You
                have made my every birthday special but 18th March 2021 was
                really very special at Taj. Yeh saal mai bohot hotels explore
                kiya your birthday at Trident, 1st Jan Grand Hyatt, LemonTree,
                The Lalit kya ameeri thi. Pondicherry was indeed a sweet trip.
                Ups and down toh yaha bhi the but as always resolved it. I was
                really happy and proud seeing you succeeding. One thing I missed
                post lockdown college was my rapido 😢 , kaam mai busy rehta tha
                naa toh milta hi nai tha college ke baad, but you used to spare
                time for me jhoot wagere bolke. Thankyouuuu 😘
              </p>
              <div className="flex grid-cols-4 content-center justify-center py-10 gap-4">
                <div className="flex w-75 h-75">
                  <img src={img3} alt="" />
                </div>
              </div>

              <button
                onClick={() => {
                  setBlock5(true);
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
              >
                Continue 💟
              </button>
            </div>
          )}
          {block5 && (
            <div className="text-center w-full min-w-full">
              <div className="flex grid-cols-4 content-center justify-center py-10 gap-4">
                <button
                  onClick={() => {
                    setBlock6(true);
                    setIsNo(false);
                  }}
                  className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
                >
                  Let's get back to reading 💟
                </button>
              </div>
            </div>
          )}
          {block6 && (
            <div className="text-center">
              <h1 className="text-2xl p-1 mt-12 font-bold tracking-tight text-gray-900">
                4th YEAR
              </h1>
              <p className="text-lg font-semibold mt-4">
                This year was a bit of a rough patch, where I started taking you
                for granted, I started getting irriated, I started getting bored
                , I started losing interest and rest you know. But as you always
                say aruuu that I dont want to erase any part of our story jaisa
                bhi hai 'AAPNA STORY HAI', similary i dont to undo any of these
                because eventually it made me realise your importance in my
                life. It made me realize 'YOU ARE PERFECT FOR ME 💕 '. It was
                you who got us back on track, your faith in us, your love
                towards me. You accepted me, you loved me the same way infact
                even more than before it really takes alot of courage to do all
                of these. I promise I wont let you down this time. I promise to
                give you all the happiness that you deserve. I promise abbse you
                will only shed tears of joy. Aur yeh ❤️‍🩹 laga le shayad chaiye
                hoga tujhe😂.You're my everythingggggg my bestfriend, my guide,
                my idol, my gossip aunty, my babudi and most importantly you are
                the love of my life. What matters the most is, we are together
                'AGAIN'. Nothing can sperate us aur abb toh mummy ne bhi kar hi
                liya hai accept SHAYAD 😂. I LOVE YOU 💗
              </p>
              <div className="flex grid-cols-4 content-center justify-center py-10 gap-4">
                <div className="flex w-75 h-75">
                  <img src={img4} alt="" />
                </div>
              </div>
              <p>
                This is going to be my last proposal aage se tu karega okay? 😒{" "}
              </p>
              <button
                onClick={() => {
                  setIsNo(false);
                }}
                className="rounded-full text-xl font-semibold text-indigo-600 mt-10 py-1 px-4 bg-violet-50"
              >
                To Be Continued .......
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
