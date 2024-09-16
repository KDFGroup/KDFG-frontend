import React from "react";

function Community() {
  return (
    <div className="mt-20 max-w-7xl mx-auto space-y-12 py-12">
      <header className="my-20">
        <h2 className="text-black font-bold text-[40px] leading-10">Community Page</h2>
      </header>

      <figure className="h-[510px] bg-purple-400"></figure>

      <section className="flex flex-col divide-y divide-black/20">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="py-6 flex justify-start items-center gap-10"
          >
            <figure className="min-w-48 aspect-square bg-purple-300"></figure>

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
