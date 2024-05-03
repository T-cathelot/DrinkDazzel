import React, { useEffect, useState } from "react";
import CocktailCard, { cocktailType } from "./CocktailCard";
import axios from "axios";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grow,
} from "@mui/material";
import { BootstrapInput } from "@/styles/material_ui/cocktailList_theme";
import { TagArray } from "../../types/tagsTypes";

const CocktailsList = () => {
  const [cocktails, setCocktail] = useState([] as cocktailType[]);
  const [cocktailsByTag, setCocktailByTag] = useState([] as cocktailType[]);
  const [tags, setTags] = useState([] as TagArray[]);
  const [selectedTag, setSelectedTag] = useState("none");

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cocktails");
        setCocktail(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    const fetchTags = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tags");
        setTags(response.data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des tags :",
          error
        );
      }
    };

    fetchCocktails();
    fetchTags();
  }, []);

  const fetchCocktailsByTag = async (tagId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/cocktails/byTag/${tagId}`
      );
      setCocktailByTag(response.data);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des cocktails par tag :",
        error
      );
    }
  };

  const handleTagChange = (event: SelectChangeEvent) => {
    const tagId = event.target.value as string;
    setSelectedTag(tagId);
    if (tagId !== "none") {
      fetchCocktailsByTag(tagId);
    } else {
      setCocktailByTag([]);
    }
  };

  return (
    <Box>
      <main className="main-content">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2>Liste de cocktails</h2>
          <Select
            name="categoryId"
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
            value={selectedTag}
            onChange={handleTagChange}
          >
            <MenuItem value="none">Tous</MenuItem>
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.id}>
                {tag.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <section className="cocktail-list">
          <Grid container spacing={3}>
            {(selectedTag === "none" ? cocktails : cocktailsByTag).map(
              (cocktail) => (
                <Grow key={cocktail.id} in={true} timeout={1000}>
                  <Grid item>
                    <CocktailCard
                      id={cocktail.id}
                      name={cocktail.name}
                      link={`/cocktails/${cocktail.id}`}
                      description={cocktail.description}
                      imgUrl={cocktail.imgUrl}
                      ingredients={cocktail.ingredients}
                      tags={cocktail.tags}
                      category={cocktail.category}
                    />
                  </Grid>
                </Grow>
              )
            )}
          </Grid>
        </section>
      </main>
    </Box>
  );
};

export default CocktailsList;
