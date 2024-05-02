import CocktailsList from "@/components/CocktailsList";
import Layout from "@/components/Layout";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Layout>
        <CocktailsList />;
      </Layout>
    </>
  );
}
