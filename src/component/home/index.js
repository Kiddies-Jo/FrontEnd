import { Grid, Typography } from "@mui/material";
import SearchAppBar from "./navbar";
import ItemCard from "./item/itemCard";
import { data } from "../allData";
import ImageSlider from "./item/slider/slider";
import HomeMainSlider from "./main";

export const HomePage = () => {

  return (
    <Grid item container>
      <SearchAppBar />
      <HomeMainSlider />
      <Grid
        sx={{ backgroundImage: "linear-gradient(to right, #DAF5F8, #F8E5E5)" }}
        item
        container
        paddingTop={"6rem"}
      >
        <Grid
          item
          container
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Typography variant="h4">Best Silling</Typography>
        </Grid>
        <Grid item xs={12}>
          <ImageSlider />
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={"space-between"}
        gap={"2rem"}
        padding={"3rem"}
        sx={{ backgroundImage: "linear-gradient(to left, #F8E5E5, #DAF5F8)" }}
      >
        {data?.map((i, index) => (
          <ItemCard
            src={i.src}
            desc={i.desc}
            price={i.price}
            title={i.title}
            key={index}
          />
        ))}
      </Grid>
    </Grid>
  );
};
