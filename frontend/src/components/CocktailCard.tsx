import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { CocktailProps } from "../../types/cocktailsTypes";
import { categoryType } from "../../types/categoriesTypes";
import { TagArray } from "../../types/tagsTypes";

export type cocktailType = TagArray & CocktailProps & categoryType;

export default function CocktailCard(props: CocktailProps) {
  return (
    <>
      <ImageListItem key="Subheader" cols={1}></ImageListItem>
      <ImageListItem
        key={props.id}
        sx={{ boxShadow: 6, borderRadius: 8, maxWidth: "250px" }}
      >
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
    </>
  );
}
