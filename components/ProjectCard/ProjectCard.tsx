import React, { useState } from 'react';
import { Image } from '@mantine/core';

interface ProjectCardProps {
  imageSrc: string;
  caption: string;
  additionalImages: string[];
}

function ProjectCard({ imageSrc, caption, additionalImages }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-card">
      <Image src={imageSrc} alt={caption} onClick={openModal} />
      <p>{caption}</p>

      {isModalOpen && (
        <div className="modal">
          <button type="button" className="close-button" onClick={closeModal}>
            Close
          </button>
          <div className="modal-content">
            {additionalImages.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Project ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
