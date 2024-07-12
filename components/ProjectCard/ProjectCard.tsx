import React, { useState } from 'react';
import { Image } from '@mantine/core';
import prefix from '@/app/prefix';

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
      <Image src={`${prefix}${imageSrc}`} alt={caption} onClick={openModal} />
      <p>{caption}</p>

      {isModalOpen && (
        <div className="modal">
          <button type="button" className="close-button" onClick={closeModal}>
            Close
          </button>
          <div className="modal-content">
            {additionalImages.map((imgSrc, index) => (
              <Image key={index} src={`${prefix}${imgSrc}`} alt={`Project ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
