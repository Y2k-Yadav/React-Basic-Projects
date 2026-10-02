import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Button from "./Button";

function UserCard({ data }) {
  const {
    name,
    job_title,
    image,
    likes,
    comments,
    shares,
    facebook,
    twitter,
    instagram,
    youtube,
  } = data;
  return (
    <>
      <div className=" shadow-2xl rounded-2xl">
        <div className="w-full h-40 relative bg-blue-400 rounded-tl-2xl rounded-tr-2xl aspect-video">
          <img
            className="h-full absolute left-1/2 -translate-x-1/2 translate-y-1/4 rounded-full aspect-square border-4 p-1 bg-white border-blue-400 text-center"
            src={image}
            alt="error loading image"
          />
        </div>
        <div className="flex flex-col items-center pt-15 pb-8">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="font-medium text-gray-600">{job_title}</p>
          <div className="flex justify-between w-[80%]  p-4">
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="p-1.5 text-4xl rounded-full" />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="p-1.5 text-4xl rounded-full " />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="p-1.5 text-4xl rounded-full " />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <BiLogoInstagramAlt className="p-1.5 text-4xl rounded-full " />
            </a>
          </div>
          <div className="flex gap-10 py-2">
            <Button text="Subscribe" />
            <Button text="Message" />
          </div>
          <div className="flex gap-4 text-lg items-center justify-center py-3">
            <div className="flex items-center gap-2">
              <FaHeart />
              <span>{likes}</span>
            </div>
            <Line />
            <div className="flex items-center gap-2">
              <FaComment />
              <span>{comments}</span>
            </div>
            <Line />
            <div className="flex items-center gap-2">
              <FaShare />
              <span>{shares}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Line = () => {
  return <div className="w-0.5 h-5 bg-black/40"></div>;
};

export default UserCard;
