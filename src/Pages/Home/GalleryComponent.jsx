import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../assets/photo";

const GalleryComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const BasicRows = () => <Gallery photos={photos} />;
  return (
    <div className=" mx-4">
      <h2 className="text-2xl pl-2 text-yellow-500 font-bold mb-4">
        Photo Gallery
      </h2>
      <p className="text-gray-700 pl-2">
        Explore our beautiful photo gallery showcasing memorable moments and
        captivating scenes. From stunning landscapes to joyful celebrations,
        browse through the collection and get inspired.
      </p>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default GalleryComponent;
