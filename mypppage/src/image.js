import React, { useState } from 'react';
import { Image, Dimension } from 'react-native';

function ImageTestModule({ imagePath }) {
  const [height, setHeight] = useState(0);
  const { width } = Dimension.get('window');
  Image.getSize(imagePath, (w, h) => {
    setHeight(h * (width / w));
  });
  
  return (
    <Image
      style={{ width: '100%' }}
      source={{ uri: imagePath, height }}
      resizeMode='cover'
    />
  );
}
