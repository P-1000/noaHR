import React from "react";

const Depiction = () => {
  return (
    <div className=" relative">
      <img
        className="  opacity-10     rotate-180 z-[1] absolute w-full h-full"
        src="https://p-1000.vercel.app/texture.png"
      />
      <div className="flex flex-col gap-4 z-[3] mt-10  relative px-5 py-5 border-black/70 rounded-2xl">
        <div className="text-3xl flex flex-col gap-3">
          <div className="  mb-5">
            <h1 className=" text-4xl">Growth Specialist at Devatoms</h1>
          </div>
          <p className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            About Job
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptates provident consectetur officiis quod iusto, ipsum tempore
            recusandae, incidunt molestiae rerum. Odit, voluptatibus temporibus
            assumenda nobis suscipit dignissimos adipisci quasi.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            Sales Enablement:
          </h1>
          <ul className="list-disc list-inside">
            <li>Developing and executing sales enablement programs</li>
            <li>Creating and maintaining sales collateral</li>
            <li>Training sales team on product features and benefits</li>
            <li>Developing sales scripts and objection handling</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            Customer Acquisition:
          </h1>
          <ul className="list-disc list-inside">
            <li>Identifying and targeting new customer segments</li>
            <li>Executing lead generation campaigns</li>
            <li>
              Collaborating with marketing on customer acquisition strategies
            </li>
            <li>Analyzing acquisition data to optimize strategies</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            Market Research:
          </h1>
          <ul className="list-disc list-inside">
            <li>Conducting market research to identify new opportunities</li>
            <li>Analyzing industry trends and customer behavior</li>
            <li>Providing insights to guide product development</li>
            <li>Monitoring competitor activities</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            Required Skills and Qualifications:
          </h1>
          <ul className="list-disc list-inside">
            <li>Bachelor's degree in Business, Marketing, or related field</li>
            <li>3+ years of experience in a growth or sales enablement role</li>
            <li>Strong analytical and problem-solving skills</li>
            <li>Excellent communication and interpersonal skills</li>
            <li>Experience with CRM software and sales analytics tools</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm bg-black text-white w-fit px-2 rounded py-1">
            Preferred Skills:
          </h1>
          <ul className="list-disc list-inside">
            <li>MBA or advanced degree</li>
            <li>Experience in the tech industry</li>
            <li>Knowledge of digital marketing strategies</li>
            <li>Proficiency in data analysis and visualization tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Depiction;
