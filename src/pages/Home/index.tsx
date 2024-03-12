import { /*MainContentIndex,*/ HeaderIndex } from "../../components/RouteRender/index";
import { MainContent, mainContent } from "../../mocks/mainContent";

const HomePage = () => {
  return (
    <section>
      <HeaderIndex />
      {/*
      <MainContentIndex />
      */}
      <h1>{mainContent.name}</h1>
    </section>
  );
};

export default HomePage;
