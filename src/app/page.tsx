import HeaderComponent from "@Components/HeaderComponent/HeaderComponent";
import CardComponent from "@Components/CardComponent/CardComponent";
import ReleaseCalenderComponent from "@Components/ReleaseCalenderComponent/ReleaseCalenderComponent";

export default function Home() {
  return (
    <div className="">
      <HeaderComponent />

      <div className="container">
        <div className="mt-10">
          <div className="section">
            <div className="section_title weight-600">Trending Games</div>
            <div className="text-sm">See more</div>
          </div>
          <div className="section mt-5">
            <CardComponent />
          </div>
        </div>
        <div className="mt-10">
          <div className="section">
            <div className="section_title weight-600">Out in August</div>
            <div className="text-sm">See more</div>
          </div>
          <div className="section mt-5">
            <CardComponent />
          </div>
        </div>
        <div className="mt-10">
          <div className="release_section">
            <div className="section_title weight-600">Release Calendar</div>
            <div className="section_detail">Whats new, coming soon, and most anticipated</div>
          </div>
          <div className="section mt-5">
            <ReleaseCalenderComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
