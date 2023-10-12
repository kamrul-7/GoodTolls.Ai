
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons"; // Import the unlock icon

const Card = () => {
  return (
    <div>
      <div className="card size bg-base-100 shadow-xl mb-24 md:mx-0 mx-auto">

          <figure className="relative">
            <img
              src="https://images.ctfassets.net/7bkqs8vgq34y/42mnpPRa0kPvgZ4tMynP9O/85562d29f3bc54d6c20c3ee4d211c2ca/Website_Insight_Adobe_An-AI-for-design.jpg?w=1200&h=800&fit=fill&f=faces"
              alt="Image"
              className="rounded-xl"
              style={{ width: "344px", height: "240px" }}
            />

            <div className="bg-white md:w-[46px] md:h-[46px] p-[10px] rounded-full flex items-center justify-center absolute top-[16px] left-[268px]">
              <div className="">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1203_1345)">
                    <path d="M14.5833 1.59711C13.6449 1.6117 12.727 1.87365 11.9223 2.3565C11.1175 2.83935 10.4544 3.526 9.99998 4.34711C9.54551 3.526 8.88242 2.83935 8.07767 2.3565C7.27293 1.87365 6.35502 1.6117 5.41664 1.59711C3.92076 1.6621 2.5114 2.31649 1.49646 3.4173C0.481525 4.51812 -0.0564834 5.97588 -2.45855e-05 7.47211C-2.45855e-05 11.2613 3.98831 15.3996 7.33331 18.2054C8.08016 18.833 9.02444 19.1771 9.99998 19.1771C10.9755 19.1771 11.9198 18.833 12.6666 18.2054C16.0116 15.3996 20 11.2613 20 7.47211C20.0564 5.97588 19.5184 4.51812 18.5035 3.4173C17.4886 2.31649 16.0792 1.6621 14.5833 1.59711ZM11.5958 16.9304C11.1491 17.3066 10.5839 17.5129 9.99998 17.5129C9.41601 17.5129 8.85082 17.3066 8.40414 16.9304C4.12248 13.3379 1.66664 9.89127 1.66664 7.47211C1.60968 6.4177 1.97195 5.38355 2.67444 4.59519C3.37694 3.80683 4.36267 3.32823 5.41664 3.26377C6.47061 3.32823 7.45634 3.80683 8.15884 4.59519C8.86134 5.38355 9.22361 6.4177 9.16664 7.47211C9.16664 7.69312 9.25444 7.90508 9.41072 8.06136C9.567 8.21764 9.77896 8.30544 9.99998 8.30544C10.221 8.30544 10.433 8.21764 10.5892 8.06136C10.7455 7.90508 10.8333 7.69312 10.8333 7.47211C10.7763 6.4177 11.1386 5.38355 11.8411 4.59519C12.5436 3.80683 13.5293 3.32823 14.5833 3.26377C15.6373 3.32823 16.623 3.80683 17.3255 4.59519C18.028 5.38355 18.3903 6.4177 18.3333 7.47211C18.3333 9.89127 15.8775 13.3379 11.5958 16.9271V16.9304Z" fill="#081120" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1203_1345">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </figure>
        <div className="h-[243] mt-8">
          <div className="flex justify-between">
            <div className="Title">
              <h2>Tools</h2>
            </div>
            <div className="flex justify-between  subscription items-center">
              <div className="">
                <FontAwesomeIcon icon={faUnlock} />
              </div>
              <div className="pr-4">
                <button className="">Free Trial</button>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4">
            In contrast, formatted text, like a Microsoft Word document or an HTML webpage, includes instructions.
          </div>

          <div className="flex justify-between grid-cols-4 gap-1">
            <div className="card-category-item"> <p className="card-category-text px-3 py-2">Photos</p></div>
            <div className="card-category-item"><p className="card-category-text px-3 py-2">Transcriber</p></div>
            <div className="card-category-item "><p className="card-category-text px-3 py-2">Audioedeting</p></div>
            <div className="card-category-item"><p className="card-category-text px-3 py-2">See more</p></div>
          </div>
          <button className="button flex justify-center items-center mt-6">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.326264 1.44821L0.293197 1.35842C0.149147 0.967665 0.171282 0.632891 0.359162 0.363644C0.517834 0.135893 0.780414 0 1.06141 0C1.28966 0 1.51244 0.084108 1.74134 0.256758L15.2421 8.89944L15.3054 8.94469C15.62 9.19366 15.801 9.55545 15.8023 9.9372C15.8035 10.319 15.6246 10.6818 15.3118 10.9329L15.2813 10.9574L1.74273 19.7389C1.51302 19.9145 1.28899 20 1.05887 20C0.778992 20 0.517191 19.8646 0.358418 19.6381C0.170639 19.3699 0.147352 19.036 0.289439 18.6453L0.321763 18.5563L5.94803 10.1871C5.9772 10.0466 5.97683 9.83535 5.94711 9.69472L0.326264 1.44821ZM3.34024 16.8509L13.9905 9.94278L13.9181 9.89638H7.52103C7.52601 10.2117 7.48292 10.5297 7.3893 10.7873L7.35688 10.8763L3.34024 16.8509Z"
                fill="#4D5761"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
