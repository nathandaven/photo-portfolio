import { GooglePhotoList } from "../components/GooglePhotoList";
import { View } from "../components/GooglePhotoList";
import { Page } from "../components/Page";

export default function Test() {
  return (
    <Page expand={false}>
      {/* <div className="container mx-auto px-4 xl:px-20 min-h-screen flex justify-around items-baseline text-center flex-col "> */}
      <GooglePhotoList
        galleryID={"xfjX2YRWVFd3tWfs7"}
        view={View.LIST}
        cropPreviews={false}
        order={false}
      ></GooglePhotoList>
    </Page>
  );
}
