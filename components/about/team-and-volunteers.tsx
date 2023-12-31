import React from "react";
import Header from "../header";

const TeamAndVolunteers = () => {
  return (
    <section className="text-[#111] bg-white flex flex-col padding gapadding ">
      <Header content="Our Team and Volunteers" />
      <section className="max-w-7xl mx-auto w-full grid lg:grid-cols-4 grid-cols-1 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <section key={index}>
            <section className="clip lg:w-[300px] h-[400px] bg-slate-500" />

            <section>
              <p className="text-primary">Name</p>
              <p>Position or Role</p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default TeamAndVolunteers;
