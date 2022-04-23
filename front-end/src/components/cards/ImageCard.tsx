import {
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@mui/material";

  type ImageCardProps = {
      url: string;
      title: string;
      description: string;
  }

const ImageCard = ({ url, title, description }: ImageCardProps) => {
  return (
    <Card raised sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={url}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
