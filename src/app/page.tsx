import PricingTable from "./services/page";
import Home from "./home/page";
import Footer from "../components/footer";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-3xl font-bold underline">Main Page</h1>
      <a className="text-center mt-4 text-blue-500" href="/auth/signin">Go to Login</a> */}
      {/* <PricingTable /> */}

      <Home />

      <Footer />

    </div>
  );
}
