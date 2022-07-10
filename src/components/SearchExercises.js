import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const SearchExercises = () => {

    const [search, setSearch] = useState("")
    const handleSearch = async () => {
       if(search) {
        
       }
    }



    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "30px" },
                    mb: "20px",
                    textAlign: "center"
                }}
            >
                Awesome Exercises You <br />
                should know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: 500,
                            border: "none",
                            borderRadius: "4px"
                        },
                        width: { lg: "800px", xs: "90vw" },
                    }}
                    height="76px"
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                    label="Search Exercises"
                    variant='outlined'
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: {lg: '175px', xs: "90vw"},
                        fontSize: {lg: '20px', xs: "14px"},
                        height: "56px",
                        position: {lg: "absolute", xs: "relative"},
                        marginTop: {lg: "0", xs: "20px"},
                        marginLeft: {lg: "20px", xs: "00px"},                        rigth: "0"
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises