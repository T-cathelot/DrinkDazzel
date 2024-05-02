import { CategoryProps } from "@/components/Category";
import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Category = () => {
  const router = useRouter();
  const categoryId = router.query.id as string;
  const [category, setCategory] = useState<CategoryProps>();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/categories/${categoryId}`
        );
        setCategory(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <Layout>
      <>
        <main className="main-content">
          {category && (
            <section className="cocktail-list">
              <div>
                {" "}
                <div className="cocktail-card-container">
                  <a
                    className="cocktail-card-link"
                    href={`/categories/${categoryId}`}
                  >
                    <div className="cocktail-card-text">
                      <div className="cocktail-card-title">{category.name}</div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          )}
        </main>
      </>
    </Layout>
  );
};

export default Category;
