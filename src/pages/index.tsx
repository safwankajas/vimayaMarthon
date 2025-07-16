import { Box } from "@mui/material";
import { Header } from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Box id="home" sx={{ height: "1000px" }}>
        <>home</>
      </Box>
      <Box id="about" sx={{ height: "1000px" }}>
        <>About</>
      </Box>
      <Box sx={{ height: "1000px" }}>
        <>Register</>
      </Box>
      <Box sx={{ height: "1000px" }}>
        <>Contact</>
      </Box>
    </>
  );
}
