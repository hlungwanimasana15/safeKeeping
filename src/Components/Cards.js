import { Box, Container, Typography, useMediaQuery } from "@mui/material"

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export const CourseCard = ({ courseName, courseType, shortDescrip, video, cardFunction }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)");


    return (
        <>
            <Box sx={{ width: "100%", height: isSmallScreen ? "400px" : "200px", display: "flex", flexDirection: isSmallScreen ? "column" : "row", margin:"10px 0" }}>
                <Box sx={{ width: isSmallScreen ? "100%" : "30%", height: isSmallScreen ? "80%" : "100%", backgroundColor: "primary.light", position: "relative", cursor: "pointer" }} onClick={cardFunction}>
                    <video
                        muted
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                    <Box sx={{ width: "70px", height: "70px", backgroundColor: "white", borderRadius: "100%", position: "absolute", zIndex: "20", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <PlayArrowIcon sx={{ width: "40px", height: "40px", color: "primary.light", }} />
                    </Box>
                </Box>
                <Box sx={{ width: isSmallScreen ? "100%" : "70%", height: isSmallScreen ? "auto" : "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: isSmallScreen ? "10px" : "0" }}>
                    <Box sx={{
                        width: isSmallScreen ? "90%" : "95%", height: "90%", position: "relative"
                    }}>
                        <Box sx={{ position: "absolute", top: "0", right: "10px" }}>
                            <Typography variant="h5" sx={{ color: "primary.light", fontWeight: "bold" }}>{courseType}</Typography>
                        </Box>
                        <Typography variant="h5" sx={{ color: "primary.light", fontWeight: "bold" }}>{courseName}</Typography>
                        <Typography variant="body2" sx={{ width: isSmallScreen ? "100%" : "80%", marginTop: "20px" }} >
                            {shortDescrip}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "primary.light", marginTop: "20px" }}>by: Company name</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}