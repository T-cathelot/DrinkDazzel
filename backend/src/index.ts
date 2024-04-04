import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("ShakeShare.sqlite");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/cocktails", (req, res) => {
  db.all("SELECT * FROM cocktail", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.get("/cocktails/:cocktailId", (req, res) => {
  db.all(
    "SELECT * FROM cocktail WHERE id = $cocktailId",
    { $cocktailId: Number(req.params.cocktailId) },
    (err, rows) => {
      if (err) {
        console.log(rows);
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

app.post("/cocktails", (req, res) => {
  db.run(
    "INSERT INTO cocktail (name, description, ingredients,category_id) VALUES ($name, $description, $ingredients,$category_id)",
    {
      $name: req.body.name,
      $description: req.body.description,
      $ingredients: req.body.ingredients,
      $category_id: req.body.category_id,
    },
    (err) => {
      if (err) {
        console.log(err, "error");
        res.status(500).send("Error occurred");
      } else {
        res.status(204).send();
      }
    }
  );
});

app.delete("/cocktails/:cocktailId", (req, res) => {
  db.run(
    "DELETE FROM cocktail WHERE id = $id",
    {
      $id: Number(req.params.cocktailId),
    },
    (err) => {
      if (err) {
        res.status(500).send(), console.log(err);
      } else {
        res.status(204).send();
      }
    }
  );
});

app.patch("/cocktails/:cocktailId", (req, res) => {
  // Récupérer les informations actuelles du cocktail depuis la base de données
  db.get(
    "SELECT * FROM cocktail WHERE id = $cocktailId",
    { $cocktailId: Number(req.params.cocktailId) },
    (err, currentCocktail) => {
      if (err) {
        console.log(err, "cocktailFetchError");
        return res.status(500).send(err);
      }

      if (!currentCocktail) {
        return res.status(404).send("Cocktail not found");
      }

      // Fusionner les informations actuelles avec les données envoyées dans la requête PATCH
      const updatedCocktail = Object.assign({}, currentCocktail, req.body);

      // Mettre à jour le cocktail dans la base de données avec les informations fusionnées
      db.run(
        "UPDATE cocktail SET name = $name, description = $description, ingredients = $ingredients, category_id = $category_id WHERE id = $cocktailId",
        {
          $name: updatedCocktail.name,
          $description: updatedCocktail.description,
          $ingredients: updatedCocktail.ingredients,
          $category_id: updatedCocktail.category_id,
          $cocktailId: Number(req.params.cocktailId),
        },
        (err) => {
          if (err) {
            console.log(err, "cocktailUpdateError");
            return res.status(500).send(err);
          } else {
            res
              .status(200)
              .json({ message: `Updated Cocktail ${updatedCocktail.name}` });
          }
        }
      );
    }
  );
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "yo 🎉! Welcome to the API.",
//   });
// });
// app.get("/cocktails", (req, res) => {
//   res.json(cocktails);
// });

// app.post("/cocktails", (req, res) => {
//   const newCocktail = req.body;
//   newCocktail.id = cocktails.length + 1;
//   newCocktail.createdAt = new Date().toJSON();
//   cocktails.push(newCocktail);
//   res.json(newCocktail);
// });

app.listen(port, () => {
  console.log(`We are listening on port ${port}`);
});
