import { FunctionComponent, ReactNode, useState } from "react";
import Menu from "./Menu";

interface Props {
  footer?: ReactNode;
  expand?: boolean;
  children: ReactNode;
}

export const Page: FunctionComponent<Props> = ({
  footer,
  expand,
  children,
}) => {
  const [sidebar, toggleSidebar] = useState(
    expand ? "" : "lg:pl-96 sm:pl-72 sm:pt-4 pt-96"
  );

  const setSidebar = function (sidebarStyle: boolean) {
    let tag = "";
    if (sidebarStyle) {
      tag = "lg:pl-96 sm:pl-72 sm:pt-4 pt-96";
    }
    toggleSidebar(tag);
  };

  return (
    <>
      <main>
        {/* Wrapper for background image */}
        <div
          className={
            "absolute flex flex-row justify-center h-screen h-screen-ios w-screen z-0 p-4 transition-all " +
            sidebar
          }
        >
          <div className="relative w-full h-full">{children}</div>
        </div>
        <div>
          <Menu />
        </div>

        {/* Wrapper for bottom elements */}
        <div className=" p-8 z-10 absolute flex flex-col justify-end h-screen h-screen-ios sticky  ">
          {/* TODO: links for social media */}
          <ul className="text-black dark:text-white mt-6 underline italic text-md md:text-lg lg:text-lg transition-all">
            <li>{footer}</li>
            {expand === true ? (
              <li>
                <a
                  className={
                    "h-100 bg-white dark:bg-black hover:font-bold cursor-pointer"
                  }
                  onClick={() => setSidebar(!sidebar)}
                >
                  Expand
                </a>
              </li>
            ) : (
              false
            )}
          </ul>
        </div>
      </main>
    </>
  );
};
