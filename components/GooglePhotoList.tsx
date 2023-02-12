import React, { FunctionComponent } from "react"; // importing FunctionComponent
import axios from "axios";
import Image from "next/image";

// import ImageViewer from "../components/ImageViewer";
import { Gallery, Image as GalleryImage } from "react-grid-gallery";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  galleryID: string;
  view: View;
  cropPreviews: boolean;
  order: boolean;
  className?: string;
  id?: string;
};

// View types
export enum View {
  LIST = 4,
  GRIDSMALL = 8,
  GRIDLARGE = 16,
}

// exporting component with OPTIONAL children
export const GooglePhotoList: FunctionComponent<Props> = ({
  galleryID,
  view,
  cropPreviews,
  order,
  className,
  id,
}) => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await axios.get("../api/" + galleryID);

      if (!shouldCancel && response.data && response.data.length > 0) {
        let fetched = response.data;

        if (order) {
          fetched = response.data.reverse();
        }

        setImages(fetched);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, [galleryID, view]);

  if (galleryID) {
    return images ? (
      <div className="w-full ">
        <div
          className={
            view === View.LIST
              ? "grid gap-4 grid-cols-1 "
              : view === View.GRIDSMALL
              ? "grid gap-4 grid-cols-1 md:grid-cols-2"
              : "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }
        >
          {images.map((image: GalleryImage, index) => (
            <div
              className="text-center justify-center h-full flex justify-content-center flex-col"
              key={index}
            >
              <Image
                className={"cursor-pointer object-cover relative w-full h-auto"}
                width={image.width}
                height={image.height}
                src={`${image.src}=w1200`}
                alt="Retrieved from Google Photos"
                key={index}
                quality={100}
              />
              {/* <img
                    className={" w-full cursor-pointer object-cover " + cropPreviews ? "min-h-full" : ""}
                    src={`${src}=w1200`}
                    alt="Retrieved from Google Photos"
                    loading="lazy"
                    key={index}
                  /> */}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="w-full flex justify-center text-5xl">loading...</div>
    );
  }
};
