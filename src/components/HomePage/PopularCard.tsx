import { Link } from "react-router-dom";

interface PopularCardProps {
  title: string;
  image: string;
  bgColor: string;
  linkTo: string;
}

export default function PopularCard({
  title,
  image,
  bgColor,
  linkTo
}: PopularCardProps) {
  return (
    <Link to={`${linkTo}`}>
      <div
        className={"rounded-lg overflow-hidden min-w-[200px] min-h-[310px] flex flex-col mr-8"}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className="p-4 text-white">
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <div className="mt-auto bg-opacity-20 bg-white rounded-lg m-2">
          <div className="relative h-full w-full">
            <img src={image} alt="" className="h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
}
