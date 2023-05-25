import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="relative z-50 mx-auto flex max-w-screen-md flex-col items-center justify-center">
      <div className="flex items-center justify-center p-4">
        <a
          href="https://github.com/charles5991"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="contact icon"
          className="mr-2 rounded-lg text-base text-white drop-shadow-xl transition-all duration-150 hover:scale-110"
        >
          <AiOutlineGithub className="text-lg" />
        </a>
        <a
          href="https://charlesdev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="contact icon"
          className="rounded-lg text-base text-white drop-shadow-xl transition-all duration-150 hover:scale-110"
        >
          by Charles Chan
        </a>
      </div>
    </div>
  );
};
export { Footer };
