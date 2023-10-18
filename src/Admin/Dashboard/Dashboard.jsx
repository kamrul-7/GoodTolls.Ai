import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from 'react-router-dom';
import { FaImage, FaLayerGroup, FaTools, FaNewspaper,  } from 'react-icons/fa';
import { BsLayers  } from 'react-icons/bs';
import { FiUsers, FiLogOut } from 'react-icons/fi';
import './Dashboard.css'
import { useEffect } from "react";
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(()=>navigate('/dashboard/db'),[])
    return (
        <div className='h-screen overflow-y-scroll hide-scrollbar'>
            <div className="drawer lg:drawer-open sm:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="sidebar w-[280px] h-[960px]">
                    <div className='logo mt-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="136" height="35" viewBox="0 0 136 35" fill="none">
                            <path d="M35.0248 25.588H31.0819C30.9795 25.588 30.9283 25.5312 30.9283 25.4176V5.50846H26.3881C26.2743 5.50846 26.2174 5.45164 26.2174 5.33801L26.2515 1.4346C26.2515 1.34369 26.297 1.29823 26.3881 1.29823H39.6675C39.7926 1.29823 39.8552 1.34369 39.8552 1.4346V5.33801C39.8552 5.45164 39.8097 5.50846 39.7187 5.50846H35.1272L35.1613 25.4176C35.1613 25.5312 35.1158 25.588 35.0248 25.588Z" fill="#081120" />
                            <path d="M46.9728 25.9289C45.7325 25.9289 44.5889 25.6107 43.542 24.9744C42.5065 24.338 41.6702 23.4914 41.033 22.4346C40.4071 21.3664 40.0942 20.196 40.0942 18.9232L40.1283 7.86073C40.1283 6.56528 40.4412 5.40051 41.0671 4.36642C41.6816 3.32096 42.5122 2.48573 43.5591 1.86073C44.606 1.22437 45.7439 0.906189 46.9728 0.906189C48.2473 0.906189 49.3909 1.21869 50.4036 1.84369C51.4277 2.46869 52.247 3.3096 52.8615 4.36642C53.4874 5.41187 53.8003 6.57664 53.8003 7.86073L53.8344 18.9232C53.8344 20.196 53.5272 21.3607 52.9127 22.4176C52.2869 23.4857 51.4562 24.338 50.4207 24.9744C49.3852 25.6107 48.2359 25.9289 46.9728 25.9289ZM46.9728 21.7187C47.6783 21.7187 48.2928 21.4346 48.8162 20.8664C49.3397 20.2869 49.6014 19.6391 49.6014 18.9232L49.5673 7.86073C49.5673 7.08801 49.3226 6.4346 48.8333 5.90051C48.344 5.36642 47.7238 5.09937 46.9728 5.09937C46.2559 5.09937 45.6415 5.36073 45.1294 5.88346C44.6174 6.40619 44.3613 7.06528 44.3613 7.86073V18.9232C44.3613 19.6846 44.6174 20.3437 45.1294 20.9005C45.6415 21.446 46.2559 21.7187 46.9728 21.7187Z" fill="#081120" />
                            <path d="M62.9491 25.9289C61.7087 25.9289 60.5651 25.6107 59.5183 24.9744C58.4828 24.338 57.6464 23.4914 57.0092 22.4346C56.3833 21.3664 56.0704 20.196 56.0704 18.9232L56.1045 7.86073C56.1045 6.56528 56.4175 5.40051 57.0433 4.36642C57.6578 3.32096 58.4885 2.48573 59.5353 1.86073C60.5822 1.22437 61.7201 0.906189 62.9491 0.906189C64.2235 0.906189 65.3671 1.21869 66.3798 1.84369C67.404 2.46869 68.2233 3.3096 68.8377 4.36642C69.4636 5.41187 69.7765 6.57664 69.7765 7.86073L69.8106 18.9232C69.8106 20.196 69.5034 21.3607 68.8889 22.4176C68.2631 23.4857 67.4324 24.338 66.3969 24.9744C65.3614 25.6107 64.2121 25.9289 62.9491 25.9289ZM62.9491 21.7187C63.6546 21.7187 64.269 21.4346 64.7925 20.8664C65.3159 20.2869 65.5776 19.6391 65.5776 18.9232L65.5435 7.86073C65.5435 7.08801 65.2988 6.4346 64.8095 5.90051C64.3202 5.36642 63.7001 5.09937 62.9491 5.09937C62.2322 5.09937 61.6177 5.36073 61.1056 5.88346C60.5936 6.40619 60.3376 7.06528 60.3376 7.86073V18.9232C60.3376 19.6846 60.5936 20.3437 61.1056 20.9005C61.6177 21.446 62.2322 21.7187 62.9491 21.7187Z" fill="#081120" />
                            <path d="M83.8922 25.588H72.5928C72.5018 25.588 72.4563 25.5312 72.4563 25.4176L72.4904 1.46869C72.4904 1.35505 72.5473 1.29823 72.6611 1.29823H76.5527C76.6665 1.29823 76.7234 1.35505 76.7234 1.46869L76.6893 21.2926H83.8922C84.006 21.2926 84.0629 21.3494 84.0629 21.463V25.4176C84.0629 25.5312 84.006 25.588 83.8922 25.588Z" fill="#081120" />
                            <path d="M92.29 25.9289C91.0497 25.9289 89.9061 25.6107 88.8592 24.9744C87.8237 24.338 86.993 23.4914 86.3672 22.4346C85.7527 21.3664 85.4455 20.196 85.4455 18.9232V17.321C85.4455 17.196 85.5024 17.1335 85.6162 17.1335H89.542C89.633 17.1335 89.6785 17.196 89.6785 17.321V18.9232C89.6785 19.6846 89.9345 20.3437 90.4466 20.9005C90.9586 21.446 91.5731 21.7187 92.29 21.7187C93.0183 21.7187 93.6384 21.4403 94.1505 20.8835C94.6625 20.3153 94.9186 19.6619 94.9186 18.9232C94.9186 18.071 94.361 17.3266 93.2458 16.6903C93.0638 16.5766 92.8248 16.4403 92.529 16.2812C92.2445 16.1107 91.9031 15.9176 91.5048 15.7016C91.1066 15.4857 90.7197 15.2755 90.3442 15.071C89.9687 14.8551 89.6045 14.6505 89.2518 14.4573C87.9773 13.7073 87.0272 12.7698 86.4013 11.6448C85.7869 10.5085 85.4796 9.23573 85.4796 7.82664C85.4796 6.53119 85.7982 5.36073 86.4355 4.31528C87.0727 3.28119 87.9034 2.46301 88.9275 1.86073C89.963 1.2471 91.0838 0.94028 92.29 0.94028C93.5303 0.94028 94.6682 1.2471 95.7037 1.86073C96.7392 2.48573 97.5642 3.31528 98.1787 4.34937C98.8045 5.38346 99.1174 6.54255 99.1174 7.82664V10.6903C99.1174 10.7812 99.0719 10.8266 98.9809 10.8266H95.0551C94.9641 10.8266 94.9186 10.7812 94.9186 10.6903L94.8844 7.82664C94.8844 7.00846 94.6284 6.34369 94.1163 5.83232C93.6043 5.32096 92.9955 5.06528 92.29 5.06528C91.5731 5.06528 90.9586 5.33801 90.4466 5.88346C89.9345 6.42892 89.6785 7.07664 89.6785 7.82664C89.6785 8.58801 89.8378 9.22437 90.1564 9.73573C90.4864 10.2471 91.0838 10.7357 91.9486 11.2016C92.0397 11.2471 92.2502 11.3607 92.5802 11.5426C92.9102 11.7244 93.2743 11.9289 93.6726 12.1562C94.0822 12.3721 94.452 12.571 94.782 12.7528C95.112 12.9232 95.3111 13.0255 95.3794 13.0596C96.5401 13.7073 97.4561 14.5028 98.1275 15.446C98.8102 16.3891 99.1516 17.5482 99.1516 18.9232C99.1516 20.2528 98.8444 21.446 98.2299 22.5028C97.604 23.5596 96.7734 24.3948 95.7379 25.0085C94.7024 25.6221 93.5531 25.9289 92.29 25.9289Z" fill="#081120" />
                            <path d="M75.6407 34.8232C74.5726 34.8232 73.8677 34.4926 73.5259 33.8312C73.1627 33.1699 72.9811 32.3806 72.9811 31.4632C72.9811 30.8232 73.0773 30.1299 73.2695 29.3832C73.4618 28.6579 73.6968 27.9326 73.9745 27.2072C74.2522 26.4819 74.5192 25.8312 74.7756 25.2552C75.4592 23.6766 76.2175 22.1192 77.0506 20.5832C77.9051 19.0472 78.8985 17.3832 80.0307 15.5912C80.2016 15.2926 80.49 14.8339 80.8959 14.2152C81.3231 13.5752 81.7931 12.8712 82.3058 12.1032C82.8185 11.3139 83.3312 10.5459 83.8439 9.79922C84.3779 9.03122 84.8479 8.38055 85.2538 7.84722C85.6597 7.29255 85.9587 6.94055 86.151 6.79122C86.3646 6.62055 86.5996 6.48188 86.856 6.37522C87.1337 6.24722 87.4114 6.18322 87.6891 6.18322C88.2018 6.18322 88.4581 6.42855 88.4581 6.91922C88.4581 7.00455 88.2872 7.29255 87.9454 7.78322C87.6036 8.25255 87.155 8.86055 86.5996 9.60722C86.0442 10.3326 85.446 11.1112 84.8052 11.9432C84.1643 12.7539 83.5341 13.5539 82.9146 14.3432C82.3165 15.1112 81.7931 15.7939 81.3445 16.3912C80.8959 16.9672 80.5968 17.3726 80.4473 17.6072H80.5113C80.9813 17.5859 81.3765 17.7992 81.6969 18.2472C82.0174 18.6952 82.2737 19.2072 82.466 19.7832C82.6583 20.3379 82.7971 20.7966 82.8826 21.1592C83.1175 21.3086 83.3632 21.4152 83.6196 21.4792C83.8759 21.5219 84.1429 21.5432 84.4206 21.5432C85.1042 21.5432 85.7237 21.3939 86.2792 21.0952C86.8559 20.7966 87.3473 20.4659 87.7532 20.1032C88.1804 19.7192 88.4795 19.4206 88.6504 19.2072C88.7145 19.1219 88.7892 19.0792 88.8747 19.0792C89.0242 19.0792 89.099 19.1752 89.099 19.3672C89.099 19.5379 88.8213 19.8792 88.2659 20.3912C87.7318 20.8819 87.155 21.3086 86.5355 21.6712C85.9374 22.0339 85.2858 22.2686 84.5809 22.3752C84.5168 22.3966 84.442 22.4072 84.3566 22.4072C84.2925 22.4072 84.207 22.4072 84.1002 22.4072C83.8866 22.4072 83.6836 22.3966 83.4914 22.3752C83.2991 22.3539 83.1496 22.3326 83.0428 22.3112C83.1069 22.8232 83.1389 23.3246 83.1389 23.8152C83.1389 24.5832 83.0214 25.4472 82.7864 26.4072C82.5728 27.3886 82.2417 28.3699 81.7931 29.3512C81.3658 30.3326 80.8425 31.2392 80.2229 32.0712C79.6248 32.9032 78.9412 33.5646 78.1722 34.0552C77.4031 34.5672 76.5593 34.8232 75.6407 34.8232ZM76.1534 33.9272C76.837 33.9272 77.4672 33.6819 78.044 33.1912C78.6421 32.7006 79.1762 32.0606 79.6462 31.2712C80.1375 30.4819 80.5541 29.6392 80.8959 28.7432C81.2377 27.8472 81.494 26.9832 81.6649 26.1512C81.8572 25.3192 81.9533 24.6259 81.9533 24.0712C81.9533 23.6872 81.9213 23.3139 81.8572 22.9512C81.8144 22.5672 81.7504 22.1939 81.6649 21.8312L81.6329 21.7672C81.1629 21.4899 80.7143 21.1379 80.287 20.7112C79.8598 20.2632 79.5607 19.7726 79.3898 19.2392C78.9412 20.0712 78.4392 21.0312 77.8838 22.1192C77.3497 23.1859 76.837 24.3166 76.3457 25.5112C75.8544 26.7059 75.4485 27.8792 75.128 29.0312C74.8076 30.1832 74.6474 31.2392 74.6474 32.1992C74.6474 32.7112 74.7649 33.1272 74.9999 33.4472C75.2135 33.7672 75.598 33.9272 76.1534 33.9272Z" fill="#2970FF" />
                            <path d="M95.0929 23.6232C93.4266 23.6232 92.5935 22.7912 92.5935 21.1272C92.5935 20.6152 92.711 20.0179 92.946 19.3352C93.2023 18.6312 93.4693 18.0339 93.747 17.5432C92.5508 18.4606 91.5895 19.3352 90.8631 20.1672C90.1368 20.9779 89.6134 21.5752 89.293 21.9592C89.2076 22.0446 89.1007 22.2259 88.9726 22.5032C88.8444 22.7592 88.6949 23.0046 88.524 23.2392C88.3531 23.4526 88.1608 23.5592 87.9472 23.5592C87.7336 23.5592 87.584 23.4739 87.4986 23.3032C87.4131 23.1326 87.3704 22.9619 87.3704 22.7912C87.3704 22.6846 87.4024 22.5672 87.4665 22.4392C87.7442 21.9486 88.0647 21.2019 88.4278 20.1992C88.8124 19.1752 89.1221 18.1406 89.3571 17.0952C89.3998 16.9246 89.4319 16.7859 89.4532 16.6792C89.4959 16.5726 89.5494 16.4552 89.6134 16.3272C89.7203 16.0926 89.9446 15.9005 90.2864 15.7512C90.6495 15.6019 90.9379 15.5272 91.1515 15.5272C91.2583 15.5272 91.3651 15.5592 91.472 15.6232C91.6001 15.6659 91.6642 15.7619 91.6642 15.9112C91.6642 16.0179 91.6001 16.2526 91.472 16.6152C91.3438 16.9779 91.1836 17.3832 90.9913 17.8312C90.8204 18.2792 90.6495 18.7059 90.4786 19.1112C90.3291 19.4952 90.2223 19.7619 90.1582 19.9112C90.3291 19.7619 90.5961 19.5166 90.9593 19.1752C91.3224 18.8126 91.7283 18.4286 92.1769 18.0232C92.6469 17.5966 93.1169 17.1912 93.5868 16.8072C94.0568 16.4232 94.4734 16.1032 94.8365 15.8472C95.1997 15.5912 95.4667 15.4632 95.6376 15.4632C95.9367 15.4632 96.193 15.5379 96.4067 15.6872C96.6416 15.8152 96.7591 16.0499 96.7591 16.3912C96.7591 16.5406 96.6416 16.7859 96.4067 17.1272C96.1717 17.4686 95.894 17.8739 95.5735 18.3432C95.2531 18.8126 94.9754 19.3139 94.7404 19.8472C94.5054 20.3806 94.3879 20.9139 94.3879 21.4472C94.3879 21.8312 94.484 22.1619 94.6763 22.4392C94.8899 22.6952 95.1783 22.8232 95.5415 22.8232C96.1183 22.8232 96.6737 22.6952 97.2077 22.4392C97.7418 22.1619 98.2331 21.8312 98.6817 21.4472C99.1304 21.0632 99.5256 20.6899 99.8674 20.3272C100.209 19.9432 100.476 19.6446 100.668 19.4312C100.69 19.4099 100.711 19.3992 100.733 19.3992C100.775 19.3992 100.829 19.4312 100.893 19.4952C100.957 19.5379 100.989 19.6126 100.989 19.7192C100.989 19.8259 100.946 19.9219 100.861 20.0072C100.369 20.5832 99.8246 21.1486 99.2265 21.7032C98.6497 22.2579 98.0195 22.7166 97.3359 23.0792C96.6523 23.4419 95.9046 23.6232 95.0929 23.6232Z" fill="#2970FF" />
                            <path d="M101.832 23.4312C101.426 23.4312 101.084 23.3352 100.806 23.1432C100.529 22.9299 100.39 22.5992 100.39 22.1512C100.39 21.5539 100.55 20.9139 100.87 20.2312C101.212 19.5485 101.65 18.8766 102.184 18.2152C102.74 17.5539 103.348 16.9566 104.011 16.4232C104.694 15.8686 105.378 15.4419 106.062 15.1432C106.766 14.8232 107.418 14.6739 108.016 14.6952C108.251 14.0552 108.561 13.2766 108.945 12.3592C109.33 11.4419 109.779 10.4926 110.291 9.51122C110.804 8.50855 111.37 7.58055 111.99 6.72722C112.63 5.85255 113.314 5.14855 114.04 4.61522C114.788 4.08188 115.568 3.81522 116.38 3.81522C116.956 3.81522 117.416 3.95388 117.757 4.23122C118.099 4.50855 118.27 4.94588 118.27 5.54322C118.27 6.22588 118.035 6.98322 117.565 7.81522C117.095 8.64722 116.486 9.51122 115.739 10.4072C114.991 11.2819 114.19 12.1459 113.335 12.9992C112.502 13.8526 111.701 14.6419 110.932 15.3672C110.163 16.0712 109.533 16.6579 109.042 17.1272C108.828 17.8526 108.689 18.4499 108.625 18.9192C108.582 19.3886 108.561 19.7939 108.561 20.1352C108.561 20.3912 108.572 20.6899 108.593 21.0312C108.636 21.3512 108.732 21.6392 108.881 21.8952C109.031 22.1299 109.277 22.2472 109.618 22.2472C109.96 22.2472 110.345 22.0979 110.772 21.7992C111.199 21.5006 111.626 21.1486 112.054 20.7432C112.481 20.3166 112.855 19.9326 113.175 19.5912C113.496 19.2499 113.731 19.0366 113.88 18.9512H113.944C114.008 18.9512 114.062 19.0152 114.104 19.1432C114.147 19.2499 114.147 19.3352 114.104 19.3992C113.912 19.6339 113.613 19.9752 113.207 20.4232C112.801 20.8499 112.342 21.2979 111.829 21.7672C111.317 22.2152 110.793 22.5992 110.259 22.9192C109.747 23.2179 109.277 23.3672 108.849 23.3672C107.973 23.3672 107.375 23.0899 107.055 22.5352C106.734 21.9806 106.574 21.3512 106.574 20.6472C106.574 20.4766 106.574 20.3166 106.574 20.1672C106.596 20.0179 106.617 19.8686 106.638 19.7192C106.296 20.1672 105.869 20.6792 105.357 21.2552C104.844 21.8312 104.278 22.3432 103.658 22.7912C103.06 23.2179 102.451 23.4312 101.832 23.4312ZM109.298 16.1352C109.661 15.7299 110.152 15.1966 110.772 14.5352C111.391 13.8739 112.054 13.1379 112.759 12.3272C113.464 11.5166 114.126 10.6952 114.745 9.86322C115.365 9.00988 115.867 8.18855 116.251 7.39922C116.657 6.60988 116.86 5.90588 116.86 5.28722C116.86 4.88188 116.679 4.67922 116.315 4.67922C115.824 4.67922 115.322 4.90322 114.809 5.35122C114.297 5.79922 113.795 6.39655 113.303 7.14322C112.833 7.88988 112.374 8.70055 111.925 9.57522C111.498 10.4499 111.103 11.3246 110.74 12.1992C110.398 13.0526 110.099 13.8312 109.843 14.5352C109.608 15.2179 109.426 15.7512 109.298 16.1352ZM103.562 21.9592C104.053 21.6819 104.545 21.2446 105.036 20.6472C105.549 20.0499 106.029 19.3672 106.478 18.5992C106.948 17.8312 107.343 17.0632 107.664 16.2952C107.151 16.2952 106.574 16.4872 105.933 16.8712C105.292 17.2339 104.684 17.7032 104.107 18.2792C103.53 18.8339 103.049 19.4206 102.665 20.0392C102.302 20.6366 102.12 21.1806 102.12 21.6712C102.12 22.0766 102.28 22.2792 102.601 22.2792C102.836 22.2792 103.156 22.1726 103.562 21.9592Z" fill="#2970FF" />
                            <path d="M116.893 23.6232C115.953 23.6232 115.131 23.3992 114.426 22.9512C113.721 22.5032 113.368 21.7565 113.368 20.7112C113.368 20.0712 113.539 19.4099 113.881 18.7272C114.244 18.0232 114.714 17.3726 115.291 16.7752C115.868 16.1779 116.487 15.6979 117.149 15.3352C117.833 14.9512 118.506 14.7592 119.168 14.7592C119.51 14.7592 119.798 14.8552 120.033 15.0472C120.268 15.2179 120.386 15.4846 120.386 15.8472C120.386 16.2739 120.193 16.7112 119.809 17.1592C119.446 17.6072 118.986 18.0339 118.431 18.4392C117.897 18.8232 117.352 19.1645 116.797 19.4632C116.241 19.7406 115.782 19.9432 115.419 20.0712C115.355 20.3272 115.323 20.5939 115.323 20.8712C115.323 21.3619 115.451 21.7992 115.707 22.1832C115.985 22.5672 116.455 22.7592 117.117 22.7592C117.779 22.7592 118.378 22.6312 118.912 22.3752C119.467 22.0979 119.969 21.7672 120.418 21.3832C120.866 20.9779 121.272 20.5939 121.635 20.2312C121.934 19.9326 122.18 19.6872 122.372 19.4952C122.565 19.2819 122.736 19.1006 122.885 18.9512C122.949 18.8872 123.045 18.8552 123.173 18.8552C123.28 18.8552 123.366 18.8979 123.43 18.9832C123.494 19.0472 123.473 19.1326 123.366 19.2392C123.28 19.3459 123.131 19.5059 122.917 19.7192C122.725 19.9112 122.533 20.1139 122.34 20.3272C122.169 20.5192 122.041 20.6579 121.956 20.7432C121.016 21.7459 120.119 22.4819 119.264 22.9512C118.41 23.3992 117.619 23.6232 116.893 23.6232ZM115.515 19.4312C115.729 19.3886 116.028 19.2606 116.412 19.0472C116.818 18.8126 117.213 18.5459 117.598 18.2472C117.769 18.0979 118.004 17.8739 118.303 17.5752C118.602 17.2766 118.805 17.0205 118.912 16.8072C119.061 16.5299 119.136 16.3059 119.136 16.1352C119.136 15.8792 118.997 15.7512 118.719 15.7512C118.57 15.7512 118.41 15.7832 118.239 15.8472C118.025 15.9326 117.769 16.1459 117.47 16.4872C117.171 16.8286 116.936 17.0952 116.765 17.2872C116.508 17.6072 116.263 17.9592 116.028 18.3432C115.814 18.7059 115.643 19.0686 115.515 19.4312Z" fill="#2970FF" />
                            <path d="M129.251 23.9432C128.504 23.9432 127.873 23.7726 127.361 23.4312C126.848 23.0899 126.592 22.5139 126.592 21.7032C126.592 21.1912 126.795 20.5086 127.2 19.6552C127.606 18.8019 128.108 18.0126 128.706 17.2872C128.6 17.3086 128.461 17.3299 128.29 17.3512C128.14 17.3512 127.969 17.3512 127.777 17.3512C127.457 17.3512 127.136 17.3085 126.816 17.2232C126.495 17.1166 126.282 16.9246 126.175 16.6472C126.09 16.7539 125.876 17.0206 125.534 17.4472C125.192 17.8739 124.797 18.3432 124.349 18.8552C123.921 19.3459 123.526 19.7726 123.163 20.1352C122.8 20.4979 122.554 20.6792 122.426 20.6792C122.383 20.6792 122.33 20.6579 122.266 20.6152C122.202 20.5725 122.17 20.5192 122.17 20.4552C122.17 20.3486 122.276 20.1886 122.49 19.9752C122.725 19.7619 122.896 19.6019 123.003 19.4952C123.815 18.6206 124.413 17.9059 124.797 17.3512C125.203 16.7752 125.481 16.3486 125.63 16.0712C125.502 15.8792 125.438 15.5806 125.438 15.1752C125.438 14.7272 125.502 14.2579 125.63 13.7672C125.78 13.2552 125.972 12.8179 126.207 12.4552C126.463 12.0926 126.752 11.9112 127.072 11.9112C127.435 11.9112 127.734 12.1032 127.969 12.4872C128.204 12.8712 128.322 13.2232 128.322 13.5432C128.322 13.7992 128.226 14.0766 128.034 14.3752C127.841 14.6739 127.617 14.9619 127.361 15.2392C127.126 15.5166 126.923 15.7406 126.752 15.9112C126.944 16.4232 127.318 16.6792 127.873 16.6792C128.258 16.6792 128.578 16.5726 128.835 16.3592C129.091 16.1459 129.326 15.9432 129.54 15.7512C129.753 15.5379 129.978 15.4312 130.213 15.4312C130.512 15.4312 130.779 15.5379 131.014 15.7512C131.249 15.9432 131.355 16.1886 131.334 16.4872C130.971 16.8712 130.565 17.3939 130.116 18.0552C129.689 18.6952 129.326 19.3672 129.027 20.0712C128.728 20.7539 128.578 21.3726 128.578 21.9272C128.578 22.3326 128.696 22.6099 128.931 22.7592C129.187 22.9086 129.518 22.9832 129.924 22.9832C130.309 22.9832 130.715 22.8766 131.142 22.6632C131.569 22.4499 131.996 22.1939 132.424 21.8952C132.701 21.7032 133.107 21.3512 133.641 20.8392C134.197 20.3272 134.837 19.6766 135.564 18.8872C135.607 18.8446 135.649 18.8232 135.692 18.8232C135.863 18.8232 135.948 18.9405 135.948 19.1752C135.948 19.2392 135.82 19.4206 135.564 19.7192C135.307 19.9966 134.998 20.3166 134.635 20.6792C134.293 21.0419 133.962 21.3832 133.641 21.7032C133.321 22.0019 133.086 22.2046 132.936 22.3112C132.402 22.7166 131.825 23.0899 131.206 23.4312C130.608 23.7726 129.956 23.9432 129.251 23.9432Z" fill="#2970FF" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.91304 3.81534H17.4783V21.2699H11.6522V18.3607H8.73913V21.2699H2.91304V3.81534ZM8.73913 24.179H0V0.90625H20.3913V24.179H11.6522V29.9971H8.73913V24.179Z" fill="#2970FF" />
                        </svg>
                    </div>
                    <div className='mt-16'>
                    <div className="menu-section mx-4">
                        {/* Sidebar content here */}
                        <div className='flex items-center '>
                        <FaImage style={{ height: '24px', width: '24px' }} />
                            <NavLink to="/dashboard/db" className="ms-3">Dashboard</NavLink>
                        </div>
                        <div className='flex items-center '>
                        <BsLayers style={{ height: '24px', width: '24px' }} />
                            <NavLink to="/dashboard/category" className="ms-3">Categories</NavLink>
                        </div> 
                        <div className='flex items-center '>
                        <FaLayerGroup style={{ height: '24px', width: '24px' }} />
                            <NavLink to='/dashboard/subcategory' className="ms-3">Sub Categories</NavLink>
                        </div> 
                        <div className='flex items-center '>
                        <FaTools style={{ height: '24px', width: '24px' }} />
                            <NavLink to='/dashboard/manageTools' className="ms-3">Manage Tools</NavLink>
                        </div> 
                        <div className='flex items-center '>
                        <FaNewspaper style={{ height: '24px', width: '24px' }} />
                            <NavLink to='/dashboard/manageNews' className="ms-3">Manage News</NavLink>
                        </div> 
                        <div className='flex items-center '>
                        <FiUsers style={{ height: '24px', width: '24px' }} />
                            <NavLink to='/dashboard/userManagement' className="ms-3">Users</NavLink>
                        </div> 
                        
                        {/* User */}
                    
                    </div>
                    </div>
                    <div className='user fixed bottom-0 left-0 mx-4'>
                         <div className='user-item'>
                               <div>
                               <img className='img-section' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                               </div>
                               <div className='info'>
                                    <div><b>Olivia Rhye</b></div>
                                    <div>olivia@untitledui.com</div>
                               </div>
                               <div className=''>
                                <FiLogOut></FiLogOut>
                               </div>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;