

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="mx-auto w-10/12 py-4 px-4 bg-transparent border-2 border-[#00af91] mt-4 dark:border-0 dark:shadow-[#00af91] rounded-md shadow-lg flex justify-between items-center">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
};

export default Header;
