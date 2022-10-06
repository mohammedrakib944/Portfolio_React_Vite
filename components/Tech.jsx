import Image from "next/image";

const Tech = ({ data }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 duration-300 border-2 dark:bg-gray-800 dark:border-none">
      <div className="text-center">
        <div className="relative">
          <Image
            className="rounded-lg"
            width="100%"
            height="100%"
            src={data.img}
            alt="image"
          />
        </div>
        <p className="font-semibold text-xl mt-2 dark:text-gray-200">
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default Tech;
