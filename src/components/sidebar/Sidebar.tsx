import { Stack, Typography } from "@mui/material"
import { Artist } from "../../types/types"

export const Sidebar = () => {
  const artists: Array<Artist> = [
    {
      name: "Artist 1",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 2",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 3",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 4",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 5",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 6",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 7",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 8",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 9",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 10",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 11",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 12",
      image: "https://via.placeholder.com/30"
    },
    {
      name: "Artist 13",
      image: "https://via.placeholder.com/30"
    }
  ]
  return (
    <Stack direction={"column"} p={1} spacing={2}>
      {artists.map((artist: Artist, index: number) => {
        // TODO: artist "card" component
        return <Stack border={1} borderColor={"red"} direction={"row"} p={1} spacing={0.5} key={index}>
            <img src={artist.image} alt={artist.name} />
            <Typography flexGrow={1} p={1} textAlign={"center"}>{artist.name}</Typography>
          </Stack>
      })}
    </Stack>
  )
}