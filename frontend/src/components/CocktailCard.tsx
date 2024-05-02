import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export type CocktailProps = {
  id: number;
  link: string;
  imgUrl: string;
  name: string;
  description: string;
  ingredients: string;
  tags: TagArray[];
  category: categoryType;
};

export type TagArray = {
  id: number;
  name: string;
};

type categoryType = {
  name: string;
};

export type cocktailType = TagArray & CocktailProps & categoryType;

export default function CocktailCard(props: CocktailProps) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <ImageList sx={{ width: 800 }} cols={3}>
      <ImageListItem key="Subheader" cols={4}></ImageListItem>
      <ImageListItem key={props.id} sx={{ boxShadow: 6, borderRadius: 8 }}>
        <img
          srcSet={`${props.imgUrl}`}
          src={`${props.imgUrl}`}
          alt={props.name}
          loading="lazy"
          style={{ borderRadius: 8, height: "400px", objectFit: "cover" }}
        />
        <ImageListItemBar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "150px",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            "& .MuiImageListItemBar-title": { textWrap: "wrap" },
          }}
          title={props.name}
          actionIcon={
            <IconButton
              sx={{
                color: "rgba(255, 255, 255, 0.54)",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              aria-label={`info about ${props.name}`}
              href={props.link}
            >
              <InfoIcon sx={{ fontSize: "35px" }} />
            </IconButton>
          }
        />
      </ImageListItem>
    </ImageList>
  );
}
