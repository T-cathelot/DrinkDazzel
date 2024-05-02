import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { ThemeProvider, styled } from "@mui/material/styles";
import React, { FormEvent, useEffect, useState } from "react";
import {
  BootstrapInput,
  theme,
} from "../../styles/material_ui/new_cocktail_theme";
import axios from "axios";
import { CategoryType } from "@/components/Category";
import { MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

type cocktailFormData = {
  name: string;
  description: string;
  ingredients: string;
  imgUrl: string;
  category: { id: number };
};

const NewCocktail = () => {
  const router = useRouter();
  // const [name, setName] = React.useState("");
  // const [description, setdescription] = React.useState("");
  // const [ingredients, setIngredient] = React.useState("");
  const [categories, setcategories] = useState<CategoryType[]>();
  const [error, setError] = useState("");

  // const [data, setData] = useState<CategoryType[]>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = Object.fromEntries(
        formData.entries()
      ) as unknown as cocktailFormData;
      console.log(data);

      if ("categoryId" in data) {
        data.category = { id: Number(data.categoryId) };
        delete data.categoryId;
      }
      if (data.name.trim().length < 3) {
        return toast.error("Le nom doit faire plus de 3 caractère !");
      } else if (data.description.trim().length < 10) {
        return toast.error("La description doit contenir au moins  10 mots!");
      } else {
        const result = await axios.post(
          "http://localhost:5000/cocktails",
          data
        );
        const NewCocktailId = await result.data.id;
        router.push(`/cocktails/${NewCocktailId}`);
        toast.success("Cocktail ajouté avec succès !");
      }
    } catch (err) {
      console.log(err, "erreur d'ajout");
    }
  };

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get<CategoryType[]>(
          "http://localhost:5000/categories "
        );
        setcategories(response.data);
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
    <Layout>
      <div className="new-cocktail-form">
        <Box
          sx={{
            width: "400px",
            height: "80vh",
            bgcolor: "#f5f5f5",
            borderRadius: "15px",
            boxShadow: 5,
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            backgroundImage: "url('/images/formImg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <h2>Ajouter votre cocktail</h2>{" "}
            <img style={{ width: "8%" }} src="/images/cocktail.png" alt="" />
          </div>{" "}
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
            }}
            onSubmit={onSubmit}
          >
            <ThemeProvider theme={theme}>
              <TextField
                name="name"
                id="outlined-basic"
                label="Nom"
                variant="outlined"
                color="primary"
                size="small"
                sx={{
                  width: "55%",
                  bgcolor: "white",
                  borderRadius: "4px",
                }}
              />
              <TextField
                name="description"
                id="outlined-basic"
                label="Description"
                variant="outlined"
                size="small"
                sx={{ width: "55%", bgcolor: "white", borderRadius: "4px" }}
              />
              <TextField
                name="ingredients"
                id="outlined-basic"
                label="Ingredients"
                variant="outlined"
                size="small"
                sx={{ width: "55%", bgcolor: "white", borderRadius: "4px" }}
              />
              <TextField
                name="imgUrl"
                id="outlined-basic"
                label="images"
                variant="outlined"
                size="small"
                sx={{ width: "55%", bgcolor: "white", borderRadius: "4px" }}
              />
            </ThemeProvider>
            <FormControl sx={{ m: 1 }} variant="standard">
              <ThemeProvider theme={theme}>
                <InputLabel
                  id="demo-customized-select-label"
                  sx={{ fontSize: "20px", margin: "0 0 0 1rem" }}
                >
                  <strong>Catégorie</strong>
                </InputLabel>
              </ThemeProvider>
              <Select
                name="categoryId"
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<BootstrapInput />}
              >
                {categories?.map((category) => (
                  <MenuItem key={category?.id} value={category?.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                bgcolor: "#ac701d",
                "&:hover": {
                  bgcolor: "#7e4f0d",
                },
              }}
            >
              Ajouter
            </Button>
          </form>
        </Box>
      </div>
    </Layout>
  );
};

export default NewCocktail;
