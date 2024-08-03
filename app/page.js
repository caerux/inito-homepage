import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import InitoSteps from "@/components/InitoSteps";
import LandingPage from "@/components/LandingPage/LandingPage";
import PressSection from "@/components/LandingPage/PressSection";
import Predict from "@/components/Predict";
import Promotion from "@/components/Promotion";
import SmarterInito from "@/components/SmarterInito/SmarterInito";
import UserReviews from "@/components/UserReviews/UserReviews";

export default function Home() {
  return (
    <>
      <LandingPage />
      <PressSection />
      <Promotion />
      <Predict />
      <SmarterInito />
      <InitoSteps />
      <UserReviews />
      <Faq />
      <Footer />
    </>
  );
}
