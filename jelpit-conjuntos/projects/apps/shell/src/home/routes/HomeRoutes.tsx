import { CuotasApp } from "../../container/CuotasApp";
import { Header, Footer, Sidebar } from "../../ui";

export const HomeRoutes = () => {

  //TODO Instanciar containers para los divs 
  //TODO desacoplar sidebar header y footer
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "80vh" }}>
        <Sidebar />
        <div className="" style={{ width: "80%", background: "#e8d7f1" }}>
          <div>
           <div id="single-spa-application:@apps/cuotas"></div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
