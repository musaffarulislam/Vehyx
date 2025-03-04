import FooterComponent from "@/components/footer/FooterCompoenent";
import BannerComponent from "@/components/landingPage/banner/BannerComponent";
import ClientSatisfactionComponent from "@/components/landingPage/ClientSatisfactionComponent";
import DetailsFormComponent from "@/components/landingPage/DetailsFormComponent";
import DropdownComponent from "@/components/landingPage/DropdownComponent";
import FAQComponent from "@/components/landingPage/FAQComponent";

export default function Home() {
  return (
    <main>
      <BannerComponent />
      <DropdownComponent />
      <DetailsFormComponent />
      <FAQComponent />
      <ClientSatisfactionComponent />
      <FooterComponent />
    </main>
  );
}
