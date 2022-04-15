import { Page } from "~/components/Pages.component";
import Card from "~/ui/Cards/Cards.component";
import ProductHover from "~/ui/Cards/ProductHover/ProductHover";

const CardsSection = () => {
  return (
    <Page>
      <h1 className="text-white">Cards Section</h1>
      <div className="space-y-4 mt-4">
        <div className="space-y-4 w-96">
          <h2 className="text-white">Normal Card</h2>
          <Card className="shadow-md bg-white text-black rounded-md">
            Normal card component
          </Card>
        </div>

        <div className="space-y-4 w-96">
          <h2 className="text-white">Card with cool hover</h2>
          <ProductHover />
        </div>
      </div>
    </Page>
  );
};

export default CardsSection;
