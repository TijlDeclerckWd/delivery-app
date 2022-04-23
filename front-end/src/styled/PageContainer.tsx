import { styled } from "@mui/system";
import { maxWidth, responsivePadding } from "helpers";

type PageContainerProps = {
    theme: any;
    vertical?: boolean;
};

const PageContainer = styled("div")(({ theme, vertical }: PageContainerProps) => ({
    ...responsivePadding(theme , vertical),
    ...maxWidth,
}));

export default PageContainer;
