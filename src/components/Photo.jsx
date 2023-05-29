import React from 'react';
import { useInView } from 'react-intersection-observer';

const Photo = ({ imageUrl, name }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="photo-card">
      {inView ? (
        <img src={imageUrl} alt="nature" />
      ) : (
        <div className="photo-card__skeleton" />
      )}

      <h4>{name}</h4>
    </div>
  );
};

export default Photo;
