import { useState, useEffect } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { styled } from "@mui/system";
import { CropImageTool } from "components/images/CropImageTool";

const Image = styled("img")({
  borderRadius: 15,
  width: "200px",
  height: "160px",
  objectFit: "cover",
});

interface UploadPictureProps {
  src?: string;
  onChange: (b64: string) => void;
}

export const UploadPicture = ({
  src = "https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg",
  onChange,
}: UploadPictureProps) => {
  const [toCropImg, setToCropImg] = useState("");
  const [imgFile, setImgFile] = useState();
  const [previewImage, setPreviewImage] = useState<string>(src);

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        if (typeof reader.result === "string") {
          setToCropImg(reader.result);
          // onChange(reader.result);
        }
      });
      reader.readAsDataURL(imgFile);
    }
  }, [imgFile]);

  const handlePreviewImage = (b64: string) => {
    setToCropImg("");
    setPreviewImage(b64);
    onChange(b64);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      {Boolean(toCropImg) && (
        <Modal open>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: "700px",
              height: "700px",
              maxHeight: "80vh",
              maxWidth: "90vw",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CropImageTool imgSrc={toCropImg} onConfirm={handlePreviewImage} />
          </Box>
        </Modal>
      )}
      <Image src={previewImage} />
      <Button color="info" component="label">
        Upload
        <input type="file" hidden onChange={onFileChange} />
      </Button>
    </Box>
  );
};
