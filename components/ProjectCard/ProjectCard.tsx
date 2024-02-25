import React, { useState } from 'react';

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
      <img src={imageSrc} alt={caption} onClick={openModal} />
      <p>{caption}</p>

      {isModalOpen && (
        <div className="modal">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <div className="modal-content">
            {additionalImages.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Project ${index}`} />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        /* Add your CSS styles here for the project card, modal, and modal content */
        .project-card {
          /* Add styles for the project card */
        }

        img {
          cursor: pointer;
        }

        .modal {
          /* Add styles for the modal */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          /* Add styles for the modal content */
          background-color: white;
          padding: 20px;
          max-width: 80%;
          max-height: 80%;
          overflow-y: auto;
          border-radius: 5px;
        }

        .close-button {
          /* Add styles for the close button */
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default ProjectCard;
