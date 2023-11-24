import { Box, Typography, IconButton } from "@mui/material"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";


export const Accordians = ({ label, types, setReturnType, returnType }) => {
    const [buttonAct, setButtonAct] = useState("0deg");
    // const [value, setValue] = useState('type');
    const [categoryStatus, setCategoryStatus] = useState(false);
    const handleChange = (event) => {
        // setValue(event.target.value);
        // console.log(event.target.value);
        setReturnType(event.target.value)
    };
    function handleButton() {
        if (buttonAct === "0deg") {
            setButtonAct("-90deg");
            setCategoryStatus(true);
        } else {
            setButtonAct("0deg");
            setCategoryStatus(false);
        }
    }


    return (
        <>
            <Box sx={{ width: "100%", backgroundColor: "white", borderTop: "2px solid #396781" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ width: "40%", margin: "0 5%", height: "inherit", display: "flex", alignItems: "center", fontWeight: "bold", color: "primary.light" }}>{label}</Typography>
                    <Box sx={{ width: "40%", margin: "0 5%", display: "flex", justifyContent: "end" }}>
                        <IconButton aria-label="Category" onClick={handleButton}><ChevronLeftIcon sx={{ rotate: `${buttonAct}`, fontWeight: "bold", color: "primary.light" }} /></IconButton>
                    </Box>
                </Box>

                {categoryStatus ?
                    <Box sx={{ width: "84%", margin: "8%" }}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={returnType}
                                onChange={handleChange}
                            >
                                {types.map((type, index) => (
                                    <FormControlLabel key={index} value={`${type}`} control={<Radio />} label={`${type}`} />
                                ))}
                            </RadioGroup>
                        </FormControl>



                    </Box>
                    : null
                }
            </Box>
        </>
    )
}