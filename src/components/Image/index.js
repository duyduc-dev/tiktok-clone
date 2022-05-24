import { useState } from 'react';
import images from '~/assets/images';

const Image = ({
  src,
  alt,
  fallBack = images.noImage,
  className,
  ...props
}) => {
  const [srcImage, setSrcImage] = useState(src);
  return (
    <img
      className={className}
      src={srcImage}
      alt={alt}
      {...props}
      onError={(e) => setSrcImage(fallBack)}
    />
  );
};

export default Image;
