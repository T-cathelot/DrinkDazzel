import React, { useEffect, useState } from "react";
import CocktailCard, { CocktailProps, cocktailType } from "./CocktailCard";
import axios from "axios";
import { Box, Checkbox, MenuItem, Select } from "@mui/material";
import { BootstrapInput } from "@/styles/material_ui/cocktailList_theme";

const CocktailsList = () => {
  const [cocktails, setCocktail] = useState([] as cocktailType[]);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cocktails ");
        setCocktail(response.data);
        console.log(response);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    fetchCocktail();
  }, []);
  return (
    <div>
      <main className="main-content">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2>Liste de cocktails</h2>
          <Select
            name="categoryId"
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
          >
            <MenuItem value="">aucun</MenuItem>
            {cocktails.map((cocktail) =>
              cocktail.tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))
            )}
          </Select>
          <Select
            name="categoryId"
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
          >
            <MenuItem value="">aucun</MenuItem>
            {cocktails.map((cocktail) =>
              cocktail.tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))
            )}
          </Select>
          <Select
            name="categoryId"
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            input={<BootstrapInput />}
          >
            <MenuItem value="">aucun</MenuItem>
            {cocktails.map((cocktail) =>
              cocktail.tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.name}>
                  {tag.name}
                </MenuItem>
              ))
            )}
          </Select>
        </Box>
        <section className="cocktail-list">
          {cocktails.map((cocktail) => (
            <CocktailCard
              id={cocktail.id}
              key={cocktail.id}
              name={cocktail.name}
              link={`/cocktails/${cocktail.id}`}
              description={cocktail.description}
              imgUrl={cocktail.imgUrl}
              ingredients={cocktail.ingredients}
              tags={cocktail.tags}
              category={cocktail.category}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default CocktailsList;
