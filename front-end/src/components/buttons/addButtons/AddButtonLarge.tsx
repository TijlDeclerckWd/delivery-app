import { Box } from "@mui/material";
import { Plus } from "mdi-material-ui";

type AddButtonLargeProps = {
  Icon?: any;
  onClick?: () => void;
};

const AddButtonLarge = ({ Icon = Plus, onClick }: AddButtonLargeProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: 200,
        borderRadius: 1,
        border: (theme) => `2px solid ${theme.palette.info.light}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: (theme) => `${theme.palette.info.light} !important`,
        "&:hover": {
          border: (theme) => `2px solid ${theme.palette.primary.light}`,
          color: (theme) => `${theme.palette.primary.light} !important`,
        },
      }}
    >
      <Icon fontSize="large" />
    </Box>
  );
};

export default AddButtonLarge;
