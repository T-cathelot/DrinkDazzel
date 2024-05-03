import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import {} from "@/components/CocktailCard";
import axios from "axios";
import { Box, Chip, Collapse, Grid, Grow } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { CocktailProps } from "../../../types/cocktailsTypes";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CocktailDetails() {
  const router = useRouter();
  const cocktailId = router.query.id as string;
  const [cocktail, setCocktail] = useState<CocktailProps>();

  useEffect(() => {
    const fetchCocktailById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/cocktails/${cocktailId}`
        );
        setCocktail(response.data);
        console.log("fetched cocktail", response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCocktailById();
  }, [cocktailId]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout>
      <Grow in={true} timeout={1000}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh", margin: "2.5rem 0 0 0" }}
        >
          <Grid item>
            <Card
              sx={{
                maxWidth: 500,
                backgroundImage: "url('/images/formImg.jpg')",
                backgroundSize: "cover",
              }}
            >
              <CardHeader title={cocktail ? cocktail.name : "Loading..."} />
              <CardMedia
                component="img"
                height="280"
                image={cocktail ? cocktail.imgUrl : "/images/loading.gif"}
                alt={cocktail ? cocktail.name : ""}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.5)",
                    padding: "1rem",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  {cocktail ? cocktail.description : "Loading..."}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                {cocktail?.tags.map((tag, index) => (
                  <Grid item key={index} spacing={3}>
                    <Chip
                      label={tag.name}
                      variant="outlined"
                      // onClick={handleClick}
                      size="small"
                      sx={{
                        color: "#363537",
                        border: " 2px solid #363537",
                        margin: "0 0 0 1rem",
                      }}
                    />
                  </Grid>
                ))}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      padding: "2rem",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography paragraph sx={{ color: "white" }}>
                      Method:
                    </Typography>
                    <Typography paragraph sx={{ color: "white" }}>
                      {cocktail ? cocktail.ingredients : "Loading..."}
                    </Typography>
                  </Box>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Grow>
    </Layout>
  );
}
