import React from "react";
import roomImg1 from "../components/assets/CommunityPage/Frame 32.png";
import roomImg2 from "../components/assets/CommunityPage/Frame 33.png";
import roomImg3 from "../components/assets/CommunityPage/Frame 34.png";
import roomImg4 from "../components/assets/CommunityPage/Frame 35.png";
import CommunityHeroImg from "../components/assets/CommunityPage/image 23.png"

function Community() {
  return (
    <div className="mt-20 max-w-7xl mx-auto space-y-12 py-12">
      <header className="my-20">
        <h2 className="text-black font-bold text-[40px] leading-10">Community Page</h2>
      </header>

      <figure className="h-[510px] bg-purple-400">
        <img src={CommunityHeroImg} alt="" />
      </figure>

      <section className="flex flex-col divide-y divide-black/20">
        {[roomImg3, roomImg2, roomImg1, roomImg4].map((item, index) => (
          <div
            key={`room-${index}`}
            className="py-6 flex justify-start items-center gap-10"
          >
            <figure className="min-w-48 aspect-square bg-purple-300">
              <img src={item} alt="" className="size-full object-cover" />
            </figure>

            <div className="space-y-7">
              <h3 className="text-3xl">Placeholder Title</h3>
              <p className="text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                suscipit asperiores numquam. Ex deserunt officia sed fugiat,
                pariatur odit vero, mollitia perferendis cumque corporis
                incidunt nihil? Dolor fugit facere aliquid?
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Community;
