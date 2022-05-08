import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

import ReactCrop, { centerCrop, makeAspectCrop, Crop } from 'react-image-crop';
import { CheckBold, CloseThick } from 'mdi-material-ui';

import 'react-image-crop/dist/ReactCrop.css';

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

export const CropImageTool = ({ imgSrc, onConfirm }) => {
  console.log('imgSrc', imgSrc);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [aspect, setAspect] = useState<number | undefined>(4 / 3);
  const [b64String, setB64String] = useState('');

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  const makeClientCrop = crop => {
    if (imgRef && crop.width && crop.height) {
      const base64String = getCroppedImg(imgRef.current, crop);
      setB64String(base64String);
    }
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    // @ts-ignore
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    // @ts-ignore
    ctx.imageSmoothingQuality = 'high';

    // @ts-ignore
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY,
    );

    const base64Image = canvas.toDataURL('image/jpeg');
    console.log('base64String', base64Image);
    return base64Image;
  };

  const handleCompleted = (c: Crop) => {
    makeClientCrop(c);
  };

  return (
    <div className='App'>
      {Boolean(imgSrc) && (
        <Box
          sx={{
            backgroundColor: 'transparent',
            height: '600px',
            maxHeight: '80vh',
            width: '400px',
            maxWidth: '90vw',
          }}>
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={c => handleCompleted(c)}
            aspect={aspect}>
            <img
              ref={imgRef}
              alt='Crop me'
              src={imgSrc}
              onLoad={onImageLoad}
              style={{ width: '100%', height: '90%' }}
            />
          </ReactCrop>
          <Box
            sx={{
              height: '10%',
              backgroundColor: theme => theme.palette.background.paper,
              display: 'flex',
              justifyContent: 'space-around',
              borderRadius: 5,
            }}>
            <Box
              onClick={() => onConfirm(b64String)}
              sx={{
                width: '100%',
                backgroundColor: theme => theme.palette.secondary.light,
                color: theme => theme.palette.secondary.contrastText,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme => theme.palette.secondary.main,
                }
              }}>
              <CheckBold fontSize='large' />
            </Box>
            {/* <Box
              sx={{
                width: '50%',
                backgroundColor: theme => theme.palette.error.light,
                color: theme => theme.palette.error.contrastText,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme => theme.palette.error.main,
                }
              }}>
              <CloseThick fontSize='large' />
            </Box> */}
          </Box>
        </Box>
      )}
    </div>
  );
};
