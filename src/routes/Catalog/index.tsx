import "./styles.css";
import Header from "../../components/Header ";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";

export default function Catalog() {
    return(
        <>
        <Header/>
        <main className="inst-catalog-main">
            <section id="inst-catalog-section" className="ins-top-container">

                <div className="inst-search-bar-container">
                   <SearchBar/>
                </div>

                <div className="inst-catalog-card-container">
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                    <CatalogCard/>
                </div>

            </section>
        </main>
        </>
        
    );
}