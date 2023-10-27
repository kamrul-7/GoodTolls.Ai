import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import Login from "../Shared/Signup/Login";
const Navbar = () => {
  const ourNavOption = (
    <>
      <li className='mx-6'>

        <NavLink to="/" style={{ background: 'transparent', }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block hover:bg-transparent"}>AI Tools Finder</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink>
      </li>
      <li className='mx-6'>
        <NavLink to="/about" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>About</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink>
      </li>
      <li className='mx-6'>
        <NavLink to="/contact" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold " : "block"}>Contact</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink></li>
      <li className='mx-6'>
        <NavLink to="/news" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "block remove" : "removes"}>
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#2970FF] font-semibold" : "block"}>News</span>
              <hr className={isActive ? "border-[1.5px] rounded-full w-4 mx-auto border-[#2970FF]" : "hidden"} />
            </>
          )}

        </NavLink></li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to='/' className="w-[168px] h-[40px] flex items-center">
            <svg width="172" height="48" viewBox="0 0 172 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.1378 35.6229H39.1691C39.04 35.6229 38.9755 35.5512 38.9755 35.4078V10.2845H33.2539C33.1105 10.2845 33.0388 10.2128 33.0388 10.0694L33.0818 5.14369C33.0818 5.02897 33.1392 4.97161 33.2539 4.97161H49.9885C50.1462 4.97161 50.2251 5.02897 50.2251 5.14369V10.0694C50.2251 10.2128 50.1677 10.2845 50.053 10.2845H44.2669L44.3099 35.4078C44.3099 35.5512 44.2525 35.6229 44.1378 35.6229Z" fill="#081120" />
            <path d="M59.1946 36.0531C57.6316 36.0531 56.1904 35.6516 54.8712 34.8486C53.5662 34.0455 52.5123 32.9772 51.7092 31.6436C50.9205 30.2957 50.5262 28.8187 50.5262 27.2126L50.5692 13.2528C50.5692 11.6181 50.9636 10.1483 51.7522 8.84336C52.5266 7.5241 53.5734 6.47012 54.8927 5.68143C56.2119 4.8784 57.6459 4.47689 59.1946 4.47689C60.8007 4.47689 62.2418 4.87123 63.518 5.65992C64.8086 6.44861 65.8411 7.50976 66.6154 8.84336C67.4041 10.1626 67.7985 11.6324 67.7985 13.2528L67.8415 27.2126C67.8415 28.8187 67.4543 30.2885 66.68 31.6221C65.8913 32.9701 64.8445 34.0455 63.5396 34.8486C62.2346 35.6516 60.7863 36.0531 59.1946 36.0531ZM59.1946 30.7402C60.0837 30.7402 60.858 30.3817 61.5176 29.6647C62.1773 28.9334 62.5071 28.116 62.5071 27.2126L62.4641 13.2528C62.4641 12.2777 62.1558 11.4532 61.5392 10.7792C60.9225 10.1053 60.141 9.76827 59.1946 9.76827C58.2912 9.76827 57.5168 10.0981 56.8716 10.7577C56.2263 11.4173 55.9036 12.2491 55.9036 13.2528V27.2126C55.9036 28.1734 56.2263 29.0051 56.8716 29.7078C57.5168 30.3961 58.2912 30.7402 59.1946 30.7402Z" fill="#081120" />
            <path d="M79.3277 36.0531C77.7646 36.0531 76.3235 35.6516 75.0042 34.8486C73.6993 34.0455 72.6453 32.9772 71.8423 31.6436C71.0536 30.2957 70.6593 28.8187 70.6593 27.2126L70.7023 13.2528C70.7023 11.6181 71.0966 10.1483 71.8853 8.84336C72.6597 7.5241 73.7065 6.47012 75.0257 5.68143C76.345 4.8784 77.779 4.47689 79.3277 4.47689C80.9337 4.47689 82.3749 4.87123 83.6511 5.65992C84.9417 6.44861 85.9742 7.50976 86.7485 8.84336C87.5372 10.1626 87.9315 11.6324 87.9315 13.2528L87.9746 27.2126C87.9746 28.8187 87.5874 30.2885 86.813 31.6221C86.0244 32.9701 84.9776 34.0455 83.6726 34.8486C82.3677 35.6516 80.9194 36.0531 79.3277 36.0531ZM79.3277 30.7402C80.2167 30.7402 80.9911 30.3817 81.6507 29.6647C82.3103 28.9334 82.6402 28.116 82.6402 27.2126L82.5971 13.2528C82.5971 12.2777 82.2888 11.4532 81.6722 10.7792C81.0556 10.1053 80.2741 9.76827 79.3277 9.76827C78.4243 9.76827 77.6499 10.0981 77.0046 10.7577C76.3593 11.4173 76.0367 12.2491 76.0367 13.2528V27.2126C76.0367 28.1734 76.3593 29.0051 77.0046 29.7078C77.6499 30.3961 78.4243 30.7402 79.3277 30.7402Z" fill="#081120" />
            <path d="M105.72 35.6229H91.4806C91.3659 35.6229 91.3086 35.5512 91.3086 35.4078L91.3516 5.18671C91.3516 5.04331 91.4233 4.97161 91.5667 4.97161H96.4709C96.6143 4.97161 96.686 5.04331 96.686 5.18671L96.643 30.2025H105.72C105.863 30.2025 105.935 30.2742 105.935 30.4176V35.4078C105.935 35.5512 105.863 35.6229 105.72 35.6229Z" fill="#081120" />
            <path d="M116.303 36.0531C114.74 36.0531 113.299 35.6516 111.979 34.8486C110.674 34.0455 109.628 32.9772 108.839 31.6436C108.065 30.2957 107.677 28.8187 107.677 27.2126V25.1907C107.677 25.033 107.749 24.9541 107.893 24.9541H112.84C112.954 24.9541 113.012 25.033 113.012 25.1907V27.2126C113.012 28.1734 113.334 29.0051 113.98 29.7078C114.625 30.3961 115.399 30.7402 116.303 30.7402C117.221 30.7402 118.002 30.3889 118.647 29.6862C119.293 28.9693 119.615 28.1447 119.615 27.2126C119.615 26.1371 118.913 25.1979 117.507 24.3949C117.278 24.2515 116.977 24.0794 116.604 23.8786C116.245 23.6635 115.815 23.4198 115.313 23.1473C114.811 22.8748 114.324 22.6096 113.851 22.3514C113.378 22.079 112.919 21.8209 112.474 21.5771C110.868 20.6307 109.671 19.4476 108.882 18.028C108.108 16.594 107.72 14.988 107.72 13.2098C107.72 11.5751 108.122 10.0981 108.925 8.77883C109.728 7.47391 110.775 6.44144 112.065 5.68143C113.37 4.90708 114.783 4.51991 116.303 4.51991C117.866 4.51991 119.3 4.90708 120.605 5.68143C121.91 6.47012 122.949 7.51693 123.724 8.82185C124.512 10.1268 124.907 11.5894 124.907 13.2098V16.8235C124.907 16.9382 124.849 16.9955 124.735 16.9955H119.787C119.673 16.9955 119.615 16.9382 119.615 16.8235L119.572 13.2098C119.572 12.1774 119.25 11.3385 118.604 10.6932C117.959 10.0479 117.192 9.72525 116.303 9.72525C115.399 9.72525 114.625 10.0694 113.98 10.7577C113.334 11.446 113.012 12.2634 113.012 13.2098C113.012 14.1706 113.213 14.9736 113.614 15.6189C114.03 16.2642 114.783 16.8808 115.873 17.4687C115.987 17.5261 116.253 17.6695 116.668 17.8989C117.084 18.1284 117.543 18.3865 118.045 18.6733C118.561 18.9457 119.027 19.1967 119.443 19.4261C119.859 19.6412 120.11 19.7703 120.196 19.8133C121.659 20.6307 122.813 21.6345 123.659 22.8247C124.52 24.0149 124.95 25.4775 124.95 27.2126C124.95 28.8904 124.563 30.3961 123.788 31.7297C123 33.0633 121.953 34.1172 120.648 34.8916C119.343 35.6659 117.895 36.0531 116.303 36.0531Z" fill="#081120" />
            <path d="M95.3216 47.2768C93.9756 47.2768 93.0872 46.8596 92.6564 46.025C92.1988 45.1905 91.97 44.1944 91.97 43.0369C91.97 42.2292 92.0911 41.3543 92.3334 40.4121C92.5757 39.4968 92.8718 38.5815 93.2218 37.6662C93.5717 36.7509 93.9083 35.9298 94.2313 35.203C95.0928 33.2108 96.0484 31.2456 97.0983 29.3074C98.1752 27.3691 99.427 25.2693 100.854 23.008C101.069 22.6311 101.433 22.0523 101.944 21.2716C102.482 20.464 103.075 19.5756 103.721 18.6064C104.367 17.6104 105.013 16.6412 105.659 15.699C106.332 14.7299 106.924 13.9088 107.436 13.2358C107.947 12.5359 108.324 12.0917 108.566 11.9032C108.836 11.6879 109.132 11.5129 109.455 11.3783C109.805 11.2167 110.155 11.136 110.505 11.136C111.151 11.136 111.474 11.4456 111.474 12.0647C111.474 12.1724 111.259 12.5359 110.828 13.155C110.397 13.7473 109.832 14.5145 109.132 15.4567C108.432 16.372 107.678 17.3546 106.871 18.4045C106.063 19.4275 105.269 20.437 104.488 21.4331C103.734 22.4022 103.075 23.2637 102.509 24.0175C101.944 24.7443 101.567 25.2558 101.379 25.5519H101.459C102.052 25.525 102.55 25.7942 102.954 26.3596C103.357 26.9249 103.68 27.571 103.923 28.2978C104.165 28.9978 104.34 29.5766 104.448 30.0342C104.744 30.2227 105.053 30.3573 105.376 30.438C105.699 30.4919 106.036 30.5188 106.386 30.5188C107.247 30.5188 108.028 30.3303 108.728 29.9535C109.455 29.5766 110.074 29.1593 110.586 28.7017C111.124 28.2171 111.501 27.8402 111.716 27.571C111.797 27.4633 111.891 27.4095 111.999 27.4095C112.187 27.4095 112.282 27.5306 112.282 27.7729C112.282 27.9883 111.932 28.419 111.232 29.0651C110.559 29.6843 109.832 30.2227 109.051 30.6803C108.297 31.138 107.476 31.4341 106.588 31.5687C106.507 31.5956 106.413 31.6091 106.305 31.6091C106.224 31.6091 106.117 31.6091 105.982 31.6091C105.713 31.6091 105.457 31.5956 105.215 31.5687C104.973 31.5418 104.784 31.5149 104.65 31.4879C104.73 32.134 104.771 32.7667 104.771 33.3858C104.771 34.355 104.623 35.4453 104.327 36.6567C104.057 37.895 103.64 39.1334 103.075 40.3717C102.536 41.6101 101.877 42.7542 101.096 43.8041C100.342 44.854 99.4808 45.6885 98.5117 46.3077C97.5425 46.9538 96.4792 47.2768 95.3216 47.2768ZM95.9677 46.1462C96.8291 46.1462 97.6233 45.8366 98.3501 45.2174C99.1039 44.5983 99.7769 43.7906 100.369 42.7946C100.988 41.7985 101.513 40.7351 101.944 39.6045C102.375 38.4738 102.698 37.3835 102.913 36.3336C103.155 35.2837 103.277 34.4088 103.277 33.7089C103.277 33.2243 103.236 32.7532 103.155 32.2956C103.102 31.811 103.021 31.3399 102.913 30.8822L102.873 30.8015C102.281 30.4515 101.715 30.0073 101.177 29.4689C100.638 28.9036 100.262 28.2844 100.046 27.6114C99.4808 28.6613 98.8482 29.8727 98.1482 31.2456C97.4752 32.5917 96.8291 34.0185 96.21 35.526C95.5908 37.0336 95.0793 38.5142 94.6755 39.9679C94.2717 41.4216 94.0698 42.7542 94.0698 43.9656C94.0698 44.6117 94.2178 45.1367 94.514 45.5405C94.7832 45.9443 95.2677 46.1462 95.9677 46.1462Z" fill="#2970FF" />
            <path d="M119.835 33.1435C117.735 33.1435 116.685 32.0936 116.685 29.9938C116.685 29.3477 116.833 28.594 117.129 27.7325C117.452 26.8441 117.789 26.0904 118.139 25.4712C116.631 26.6288 115.42 27.7325 114.505 28.7824C113.589 29.8054 112.93 30.5592 112.526 31.0437C112.418 31.1514 112.284 31.3802 112.122 31.7302C111.961 32.0533 111.772 32.3629 111.557 32.659C111.342 32.9282 111.099 33.0628 110.83 33.0628C110.561 33.0628 110.372 32.9551 110.265 32.7397C110.157 32.5244 110.103 32.309 110.103 32.0936C110.103 31.959 110.144 31.811 110.224 31.6495C110.574 31.0303 110.978 30.0881 111.436 28.8228C111.92 27.5306 112.311 26.225 112.607 24.9059C112.661 24.6905 112.701 24.5155 112.728 24.3809C112.782 24.2463 112.849 24.0982 112.93 23.9367C113.064 23.6406 113.347 23.3983 113.778 23.2099C114.235 23.0214 114.599 22.9272 114.868 22.9272C115.003 22.9272 115.137 22.9676 115.272 23.0483C115.433 23.1022 115.514 23.2233 115.514 23.4118C115.514 23.5464 115.433 23.8425 115.272 24.3001C115.11 24.7578 114.909 25.2693 114.666 25.8346C114.451 26.3999 114.235 26.9384 114.02 27.4498C113.832 27.9344 113.697 28.2709 113.616 28.4594C113.832 28.2709 114.168 27.9613 114.626 27.5306C115.083 27.073 115.595 26.5884 116.16 26.0769C116.753 25.5385 117.345 25.027 117.937 24.5424C118.529 24.0579 119.054 23.654 119.512 23.331C119.97 23.008 120.306 22.8464 120.521 22.8464C120.898 22.8464 121.221 22.9407 121.491 23.1291C121.787 23.2906 121.935 23.5867 121.935 24.0175C121.935 24.2059 121.787 24.5155 121.491 24.9462C121.194 25.377 120.844 25.8885 120.441 26.4807C120.037 27.073 119.687 27.7056 119.391 28.3786C119.095 29.0516 118.947 29.7246 118.947 30.3976C118.947 30.8822 119.068 31.2995 119.31 31.6495C119.579 31.9725 119.943 32.134 120.4 32.134C121.127 32.134 121.827 31.9725 122.5 31.6495C123.173 31.2995 123.792 30.8822 124.358 30.3976C124.923 29.9131 125.421 29.442 125.852 28.9843C126.282 28.4997 126.619 28.1229 126.861 27.8537C126.888 27.8267 126.915 27.8133 126.942 27.8133C126.996 27.8133 127.063 27.8537 127.144 27.9344C127.225 27.9883 127.265 28.0825 127.265 28.2171C127.265 28.3517 127.211 28.4728 127.104 28.5805C126.484 29.3074 125.798 30.0208 125.044 30.7207C124.317 31.4206 123.523 31.9994 122.662 32.4571C121.8 32.9147 120.858 33.1435 119.835 33.1435Z" fill="#2970FF" />
            <path d="M128.327 32.9013C127.816 32.9013 127.385 32.7801 127.035 32.5378C126.685 32.2686 126.51 31.8514 126.51 31.286C126.51 30.5323 126.712 29.7246 127.116 28.8632C127.547 28.0017 128.098 27.1537 128.771 26.3192C129.471 25.4846 130.239 24.7309 131.073 24.0579C131.935 23.3579 132.796 22.8195 133.658 22.4426C134.546 22.0388 135.367 21.8504 136.121 21.8773C136.417 21.0697 136.807 20.0871 137.292 18.9295C137.776 17.7719 138.342 16.5739 138.988 15.3356C139.634 14.0703 140.347 12.8993 141.128 11.8225C141.936 10.7187 142.797 9.83033 143.712 9.15732C144.655 8.4843 145.637 8.1478 146.66 8.1478C147.387 8.1478 147.966 8.32278 148.397 8.67275C148.827 9.02272 149.043 9.57459 149.043 10.3284C149.043 11.1898 148.746 12.1455 148.154 13.1954C147.562 14.2453 146.795 15.3356 145.853 16.4663C144.91 17.57 143.901 18.6603 142.824 19.7371C141.774 20.8139 140.765 21.81 139.795 22.7253C138.826 23.6137 138.032 24.354 137.413 24.9462C137.144 25.8615 136.969 26.6153 136.888 27.2076C136.834 27.7998 136.807 28.3113 136.807 28.742C136.807 29.0651 136.821 29.442 136.848 29.8727C136.901 30.2765 137.023 30.6399 137.211 30.963C137.399 31.2591 137.709 31.4072 138.14 31.4072C138.571 31.4072 139.055 31.2187 139.594 30.8418C140.132 30.465 140.67 30.0208 141.209 29.5093C141.747 28.9709 142.218 28.4863 142.622 28.0556C143.026 27.6248 143.322 27.3556 143.51 27.2479H143.591C143.672 27.2479 143.739 27.3287 143.793 27.4902C143.847 27.6248 143.847 27.7325 143.793 27.8133C143.551 28.1094 143.174 28.5401 142.662 29.1055C142.151 29.6439 141.572 30.2092 140.926 30.8015C140.28 31.3668 139.62 31.8514 138.947 32.2552C138.301 32.6321 137.709 32.8205 137.171 32.8205C136.067 32.8205 135.313 32.4705 134.909 31.7706C134.506 31.0707 134.304 30.2765 134.304 29.3881C134.304 29.1728 134.304 28.9709 134.304 28.7824C134.331 28.594 134.357 28.4055 134.384 28.2171C133.954 28.7824 133.415 29.4285 132.769 30.1554C132.123 30.8822 131.41 31.5283 130.629 32.0936C129.875 32.6321 129.108 32.9013 128.327 32.9013ZM137.736 23.6944C138.194 23.1829 138.813 22.5099 139.594 21.6754C140.374 20.8408 141.209 19.9121 142.097 18.8891C142.985 17.8661 143.82 16.8297 144.601 15.7798C145.381 14.703 146.014 13.6665 146.499 12.6705C147.01 11.6744 147.266 10.786 147.266 10.0053C147.266 9.49383 147.037 9.23808 146.579 9.23808C145.96 9.23808 145.328 9.52075 144.681 10.0861C144.035 10.6514 143.403 11.4052 142.784 12.3474C142.191 13.2896 141.613 14.3126 141.047 15.4164C140.509 16.5201 140.011 17.6238 139.553 18.7276C139.122 19.8044 138.746 20.787 138.422 21.6754C138.126 22.5368 137.898 23.2099 137.736 23.6944ZM130.508 31.0437C131.127 30.6938 131.746 30.1419 132.365 29.3881C133.011 28.6344 133.617 27.7729 134.182 26.8038C134.775 25.8346 135.273 24.8655 135.677 23.8963C135.03 23.8963 134.304 24.1386 133.496 24.6232C132.688 25.0808 131.921 25.6731 131.194 26.3999C130.467 27.0999 129.862 27.8402 129.377 28.6209C128.919 29.3747 128.691 30.0611 128.691 30.6803C128.691 31.1918 128.893 31.4476 129.296 31.4476C129.593 31.4476 129.996 31.313 130.508 31.0437Z" fill="#2970FF" />
            <path d="M147.307 33.1435C146.123 33.1435 145.086 32.8609 144.198 32.2956C143.309 31.7302 142.865 30.788 142.865 29.4689C142.865 28.6613 143.081 27.8267 143.511 26.9653C143.969 26.0769 144.561 25.2558 145.288 24.502C146.015 23.7483 146.796 23.1426 147.63 22.6849C148.492 22.2003 149.34 21.9581 150.174 21.9581C150.605 21.9581 150.968 22.0792 151.265 22.3215C151.561 22.5368 151.709 22.8733 151.709 23.331C151.709 23.8694 151.466 24.4213 150.982 24.9866C150.524 25.5519 149.945 26.0904 149.245 26.6018C148.572 27.0864 147.886 27.5171 147.186 27.894C146.486 28.244 145.907 28.4997 145.45 28.6613C145.369 28.9843 145.329 29.3208 145.329 29.6708C145.329 30.29 145.49 30.8418 145.813 31.3264C146.163 31.811 146.755 32.0533 147.59 32.0533C148.424 32.0533 149.178 31.8917 149.851 31.5687C150.551 31.2187 151.184 30.8015 151.749 30.3169C152.314 29.8054 152.826 29.3208 153.284 28.8632C153.66 28.4863 153.97 28.1767 154.212 27.9344C154.455 27.6652 154.67 27.4364 154.858 27.2479C154.939 27.1672 155.06 27.1268 155.222 27.1268C155.356 27.1268 155.464 27.1806 155.545 27.2883C155.626 27.3691 155.599 27.4768 155.464 27.6114C155.356 27.746 155.168 27.9479 154.899 28.2171C154.657 28.4594 154.414 28.7151 154.172 28.9843C153.957 29.2266 153.795 29.4016 153.687 29.5093C152.503 30.7745 151.372 31.7033 150.295 32.2956C149.219 32.8609 148.222 33.1435 147.307 33.1435ZM145.571 27.8537C145.84 27.7998 146.217 27.6383 146.701 27.3691C147.213 27.073 147.711 26.7365 148.196 26.3596C148.411 26.1711 148.707 25.8885 149.084 25.5116C149.461 25.1347 149.717 24.8116 149.851 24.5424C150.04 24.1925 150.134 23.9098 150.134 23.6944C150.134 23.3714 149.959 23.2099 149.609 23.2099C149.42 23.2099 149.219 23.2502 149.003 23.331C148.734 23.4387 148.411 23.7079 148.034 24.1386C147.657 24.5693 147.361 24.9059 147.146 25.1481C146.823 25.5519 146.513 25.9961 146.217 26.4807C145.948 26.9384 145.732 27.396 145.571 27.8537Z" fill="#2970FF" />
            <path d="M162.881 33.5474C161.939 33.5474 161.145 33.332 160.498 32.9013C159.852 32.4705 159.529 31.7437 159.529 30.7207C159.529 30.0746 159.785 29.2131 160.297 28.1363C160.808 27.0595 161.441 26.0634 162.194 25.1481C162.06 25.1751 161.885 25.202 161.67 25.2289C161.481 25.2289 161.266 25.2289 161.023 25.2289C160.62 25.2289 160.216 25.1751 159.812 25.0674C159.408 24.9328 159.139 24.6905 159.004 24.3405C158.897 24.4751 158.628 24.8116 158.197 25.35C157.766 25.8885 157.268 26.4807 156.703 27.1268C156.164 27.746 155.666 28.2844 155.209 28.742C154.751 29.1997 154.441 29.4285 154.28 29.4285C154.226 29.4285 154.159 29.4016 154.078 29.3477C153.997 29.2939 153.957 29.2266 153.957 29.1458C153.957 29.0112 154.091 28.8093 154.361 28.5401C154.657 28.2709 154.872 28.069 155.007 27.9344C156.03 26.8307 156.783 25.9288 157.268 25.2289C157.78 24.502 158.129 23.9636 158.318 23.6137C158.156 23.3714 158.076 22.9945 158.076 22.483C158.076 21.9177 158.156 21.3254 158.318 20.7062C158.506 20.0602 158.749 19.5083 159.045 19.0506C159.368 18.593 159.731 18.3642 160.135 18.3642C160.593 18.3642 160.97 18.6064 161.266 19.091C161.562 19.5756 161.71 20.0198 161.71 20.4236C161.71 20.7466 161.589 21.0966 161.346 21.4735C161.104 21.8504 160.822 22.2138 160.498 22.5638C160.202 22.9137 159.947 23.1964 159.731 23.4118C159.974 24.0579 160.445 24.3809 161.145 24.3809C161.629 24.3809 162.033 24.2463 162.356 23.9771C162.679 23.7079 162.975 23.4521 163.244 23.2099C163.514 22.9407 163.796 22.806 164.092 22.806C164.469 22.806 164.806 22.9407 165.102 23.2099C165.398 23.4521 165.533 23.7617 165.506 24.1386C165.048 24.6232 164.537 25.2827 163.971 26.1173C163.433 26.9249 162.975 27.7729 162.598 28.6613C162.221 29.5227 162.033 30.3034 162.033 31.0034C162.033 31.5149 162.181 31.8648 162.477 32.0533C162.8 32.2417 163.217 32.3359 163.729 32.3359C164.214 32.3359 164.725 32.2013 165.263 31.9321C165.802 31.6629 166.34 31.3399 166.879 30.963C167.229 30.7207 167.74 30.2765 168.413 29.6304C169.113 28.9843 169.921 28.1632 170.836 27.1672C170.89 27.1133 170.944 27.0864 170.997 27.0864C171.213 27.0864 171.321 27.2345 171.321 27.5306C171.321 27.6114 171.159 27.8402 170.836 28.2171C170.513 28.5671 170.123 28.9709 169.665 29.4285C169.234 29.8862 168.817 30.3169 168.413 30.7207C168.009 31.0976 167.713 31.3533 167.525 31.4879C166.852 31.9994 166.125 32.4705 165.344 32.9013C164.59 33.332 163.769 33.5474 162.881 33.5474Z" fill="#2970FF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.67099 8.14796H22.0259V30.1739H14.6839V26.5028H11.013V30.1739H3.67099V8.14796ZM11.013 33.8449H0V4.47697H25.6969V33.8449H14.6839V41.1868H11.013V33.8449Z" fill="#2970FF" />
            </svg>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            {ourNavOption}
          </ul>
        </div>
        <div className="navbar-end">
          <div className='hidden lg:block'>
              <Login/>
          </div>

        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="hide-menu btn-ghost btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base gap-1 ">
            <li className='mx-6'>
              <NavLink to="/" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] font-semibold p-0 hover:text-[#2970FF]" : "p-0"}>
                AI Tools Finder
              </NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/about" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] font-semibold p-0 hover:text-[#2970FF]" : "p-0"}>
                About
              </NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/contact" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] font-semibold p-0 hover:text-[#2970FF]" : "p-0"}>
                Contacts
              </NavLink>
            </li>
            <li className='mx-6'>
              <NavLink to="/news" style={{ background: 'transparent' }} className={({ isActive }) => isActive ? "text-[#2970FF] font-semibold p-0 hover:text-[#2970FF]" : "p-0"}>
                News
              </NavLink>
            </li>
            <li className='ml-4 mr-10'>
              <Login></Login>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
