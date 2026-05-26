import Banner from "@/components/Banner";
import ShowProducts from "@/components/ShowProducts";
import Image from "next/image";
import SummerCareTips from "../../SummerCareTips";
import TopBrands from "@/components/TopBrands";

export default function Home() {
  return (
    <div>
       <Banner/>
      <ShowProducts/>
      <SummerCareTips/>
      <TopBrands/>
    </div>
  );
}
