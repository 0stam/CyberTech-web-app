import { useTheme } from "../../Theme/useTheme";
import "./WelcomeMessage.css";

export const LogoText = () => {
  const { theme } = useTheme();

  const getFillColor = (color1, color2) => {
    return theme === "green" ? color1 : color2;
  };

  return (
    <div className="svg-container">
      <svg
        className="svg-logo"
        width="545.42969"
        height="134.09557"
        version="1.1"
        viewBox="174.453 0 370.977 126.235"
        id="svg48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs52" />
        <path
          d="m 387.75102,31.93448 v 9.28 h 16 v 44.8 h 10.56 v -54.08 h -26.56 m 28.87732,0.02616 4.74185,9.218087 8.94083,0.03575 v -9.28 m 25.2798,46.3994 c -1.9968,-1.0656 -6.0288,-3.6448 -8.32,-3.4432 -1.1904,0.1024 -2.1472,1.3696 -3.2,1.8688 -2.352,1.1168 -5.2608,1.168 -7.68,0.2528 -1.8976,-0.7168 -3.5616,-2.1824 -4.7488,-3.7984 -4.0672,-5.5392 -2.2688,-14.205 4.4288,-16.81 5.2576,-2.048 12.496,1.1648 13.12,7.2096 h -14.08 c 0.8608,1.9936 2.624,5.9104 4.5472,7.0304 1.424,0.832 4.0896,0.3296 5.6928,0.3296 h 13.76 c 0.7904,-6.2528 -0.2336,-12.387 -4.5376,-17.28 -9.984,-11.341 -28.918,-7.6224 -33.837,6.72 -7.088,20.669 22.131,35.981 34.854,17.92 m 36.16,-6.72 c -4.0992,8.6144 -16.707,7.1648 -18.714,-2.24 -1.5808,-7.408 4.88,-16.25 12.954,-13.261 2.6784,0.992 4.3264,3.248 5.76,5.5808 l 8,-4.8 c -2.9728,-8.9664 -15.837,-11.594 -23.68,-8.736 -10.643,3.8752 -16.109,16.358 -11.27,26.656 1.4272,3.0368 3.44,5.7408 6.1504,7.7568 3.1904,2.3744 6.9472,3.6544 10.88,4.0288 5.0848,0.4832 10.637,-1.8656 14.397,-5.1616 0.9888,-0.8704 3.5392,-3.12 3.0688,-4.6432 -0.5888,-1.9008 -5.8016,-4.3552 -7.5456,-5.1808 m 28.66472,-14.241889 c 0,0 2.34567,-1.191821 5.42737,-1.190754 3.0817,0.0011 4.42185,0.762966 5.68563,2.438463 1.26378,1.675497 1.5271,4.316501 1.54,6.375626 l -0.003,21.050261 10.3192,0.113224 c 0,0 -0.0804,-18.445352 -0.0804,-20.931752 0,-2.4864 -0.40158,-9.838374 -3.45927,-13.151701 -3.0577,-3.313328 -6.34088,-5.070453 -12.99126,-5.019603 -6.65038,0.05085 -8.7839,2.326537 -10.22022,3.619216"
          fill={getFillColor("#00ff77", "#f85c2c")}
          fillOpacity="1"
          id="path6"
        />
        <g id="g46" transform="translate(-255.44918,-340.86552)">
          <path
            d="m 534.49,443.8 h 3.7018 v -2.1634 h -4.9632 z"
            id="path8"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="553.27002"
            y="432.35999"
            width="2.266"
            height="11.547"
            opacity="0.997"
            id="rect10"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 555.54,432.36 7.37,10.513 v 0.92168 h -2.0981 l -5.4244,-7.4514 -1.0617,-2.2581 z"
            id="path12"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 560.8,439.28 v -6.9341 h 2.2044 v 8.3464 z"
            id="path14"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="544.34003"
            y="432.34"
            width="2.4045999"
            height="11.509"
            opacity="0.997"
            id="rect16"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="530.44"
            y="432.32001"
            width="2.3624001"
            height="11.546"
            opacity="0.997"
            id="rect18"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="585.38"
            y="441.92001"
            width="7.5457001"
            height="1.8936"
            opacity="0.997"
            id="rect20"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="585.27002"
            y="432.35001"
            width="7.6841002"
            height="1.8896"
            opacity="0.997"
            id="rect22"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="585.27002"
            y="432.35001"
            width="2.0804"
            height="11.464"
            ry="0"
            opacity="0.997"
            id="rect24"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 588,437.17 h 3.4809 v 1.9444 h -2.469 z"
            id="path26"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="569.59003"
            y="432.25"
            width="2.2272999"
            height="11.466"
            opacity="0.997"
            id="rect28"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 575.82,432.33 h 2.9029 l -7.1496,9.0526 -0.1492,-3.4678 z"
            id="path30"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 575.91,443.83 h 2.7611 l -4.0907,-5.2777 -0.81288,2.4068 z"
            id="path32"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 643.85,439.83 v 3.9258 h 2.218 v -3.846 l 4.2472,-7.547 h -2.8029 z"
            id="path34"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 639.7,432.35 h 2.6408 l 2.3732,4.7394 -1.6858,1.411 z"
            id="path36"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="625.06"
            y="432.25"
            width="2.2277999"
            height="11.511"
            opacity="0.997"
            id="rect38"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="625.06"
            y="432.25"
            width="5.8120999"
            height="2.0014"
            opacity="0.997"
            id="rect40"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="625.15997"
            y="437"
            width="5.8120999"
            height="2.0014"
            opacity="0.997"
            id="rect42"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 630.8,434.25 c 0.19936,-0.005 0.98456,0.46858 0.9558,1.33 -0.033,0.99001 -0.73198,1.3948 -1.0075,1.4175 h -1.0426 v 2.0011 h 1.2689 c 0.90218,0 1.743,0.83543 1.749,1.5419 0.006,0.69462 -0.55164,1.3154 -1.2254,1.3154 l -3.3609,0.0568 1.0907,1.8892 h 2.4645 c 2.1114,0 3.2324,-2.2203 3.2566,-3.419 0.0259,-1.2863 -0.4025,-1.9065 -1.3805,-2.8654 0.38378,-0.80047 0.68544,-1.2656 0.66961,-1.8114 -0.0363,-1.2516 -1.1541,-3.4574 -3.3599,-3.4574 h -0.96394 v 1.9941 z"
            id="path44"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="697.87738"
            y="432.26483"
            width="2.2277999"
            height="11.511"
            opacity="0.997"
            id="rect38-3"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="697.87738"
            y="432.26483"
            width="5.8120999"
            height="2.0014"
            opacity="0.997"
            id="rect40-6"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="697.97736"
            y="437.01483"
            width="5.8120999"
            height="2.0014"
            opacity="0.997"
            id="rect42-7"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 703.61731,434.26483 c 0.19936,-0.005 0.98456,0.46858 0.9558,1.33 -0.033,0.99001 -0.73198,1.3948 -1.0075,1.4175 h -1.0426 v 2.0011 h 1.2689 c 0.90218,0 1.743,0.83543 1.749,1.5419 0.006,0.69462 -0.55164,1.3154 -1.2254,1.3154 l -3.3609,0.0568 1.0907,1.8892 h 2.4645 c 2.1114,0 3.2324,-2.2203 3.2566,-3.419 0.0259,-1.2863 -0.4025,-1.9065 -1.3805,-2.8654 0.38378,-0.80047 0.68544,-1.2656 0.66961,-1.8114 -0.0363,-1.2516 -1.1541,-3.4574 -3.3599,-3.4574 h -0.96394 v 1.9941 z"
            id="path44-5"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 685.27832,439.96429 v 3.9258 h 2.218 v -3.846 l 4.2472,-7.547 h -2.8029 z"
            id="path34-3"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 681.12832,432.48429 h 2.6408 l 2.3732,4.7394 -1.6858,1.411 z"
            id="path36-5"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="714.48859"
            y="442.01877"
            width="7.5457001"
            height="1.8936"
            opacity="0.997"
            id="rect20-2"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="714.3786"
            y="432.44876"
            width="7.6841002"
            height="1.8896"
            opacity="0.997"
            id="rect22-9"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="714.3786"
            y="432.44876"
            width="2.0804"
            height="11.464"
            ry="0"
            opacity="0.997"
            id="rect24-1"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 717.10855,437.26876 h 3.4809 v 1.9444 h -2.469 z"
            id="path26-2"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="758.9032"
            y="441.90445"
            width="7.5457001"
            height="1.8936"
            opacity="0.997"
            id="rect20-2-0"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="758.79321"
            y="432.33444"
            width="7.6841002"
            height="1.8896"
            opacity="0.997"
            id="rect22-9-9"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <rect
            x="758.79321"
            y="432.33444"
            width="2.0804"
            height="11.464"
            ry="0"
            opacity="0.997"
            id="rect24-1-3"
            fill={getFillColor("#ffffff", "#000000")}
          />
          <path
            d="m 761.52315,437.15445 h 3.4809 v 1.9444 h -2.469 z"
            id="path26-2-6"
            fill={getFillColor("#ffffff", "#000000")}
          />
        </g>
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 418.5055,95.30596 1.88132,-1.33842 c -0.72768,-0.94949 -2.66455,-2.78075 -5.21598,-2.7378 -2.55142,0.043 -5.89928,2.15427 -5.90147,5.98703 -0.002,3.83277 4.14123,5.98983 6.12836,5.91908 1.98713,-0.0708 3.72148,-1.27322 4.81437,-2.739 l -1.57961,-1.35016 c -1.01492,1.1331 -1.4602,2.12256 -3.32116,2.08016 -0.92257,-0.021 -1.98679,-0.62268 -2.63184,-1.41281 -0.6561,-0.80367 -0.88524,-1.80232 -0.89155,-2.58325 -0.007,-0.84054 0.39229,-1.96707 1.12999,-2.7506 0.62153,-0.66014 1.50327,-1.05474 2.38635,-1.0506 1.93122,0.009 2.69557,1.38055 3.20122,1.97637 z"
          id="path879"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 525.2924,95.30036 1.88132,-1.33842 c -0.72768,-0.94949 -2.66455,-2.78075 -5.21598,-2.7378 -2.55142,0.043 -5.89928,2.15427 -5.90147,5.98703 -0.002,3.83277 4.14123,5.98983 6.12836,5.91908 1.98713,-0.0708 3.72148,-1.27322 4.81437,-2.739 l -1.57961,-1.35016 c -1.01492,1.1331 -1.4602,2.12256 -3.32116,2.08016 -0.92257,-0.021 -1.98679,-0.62268 -2.63184,-1.41281 -0.6561,-0.80367 -0.88524,-1.80232 -0.89155,-2.58325 -0.007,-0.84054 0.39229,-1.96707 1.12999,-2.7506 0.62153,-0.66014 1.50327,-1.05474 2.38635,-1.0506 1.93122,0.009 2.69557,1.38055 3.20122,1.97637 z"
          id="path879-6"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect989"
          width="2.4511108"
          height="11.674912"
          x="343.88681"
          y="91.365929"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect991"
          width="5.3859682"
          height="2.0210857"
          x="343.88681"
          y="91.365929"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 349.2728,93.38701 c 1.34703,0.005 3.11425,1.60822 3.08853,3.64778 -0.0257,2.03955 -1.20525,3.94934 -2.90397,3.94934 -1.1541,0 -2.49609,0.0118 -2.49609,0.0118 l 1.02059,1.923 c 0,0 1.21897,0.0264 1.94294,0.01 2.5058,-0.0567 4.9214,-2.94199 4.90873,-5.63138 -0.0127,-2.68939 -2.41251,-5.90621 -5.56073,-5.93169 l -1.53227,-0.0124 v 2.02741 z"
          id="path993"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect995"
          width="2.519068"
          height="11.534679"
          x="472.82663"
          y="91.419792"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect997"
          width="5.5684319"
          height="2.0218811"
          x="472.82663"
          y="91.419792"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect997-7"
          width="5.5684319"
          height="2.0218811"
          x="473.00876"
          y="97.351616"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 479.63811,102.94725 h 2.78911 l -2.73184,-3.31224 -1.67078,1.2174 z"
          id="path1021"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 478.39506,93.44167 c 0.63727,0.0171 1.55938,1.08336 1.59082,1.92762 0.0314,0.84426 -0.84462,1.98232 -1.40869,1.98232 h -0.87863 v 2.02385 l 0.87863,-0.002 c 1.82779,-0.004 3.68828,-1.36475 3.61722,-3.81855 -0.0711,-2.4538 -1.84414,-4.13515 -3.79935,-4.13515 h -1.01158 v 2.01925 l 1.01158,0.003 z"
          id="path1023"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect1027"
          width="5.8470144"
          height="1.9991418"
          x="487.69864"
          y="91.382896"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect1029"
          width="2.4051378"
          height="11.530468"
          x="491.14804"
          y="91.382896"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect1065"
          width="2.455286"
          height="11.614643"
          x="533.4613"
          y="91.409477"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect1065-0"
          width="2.455286"
          height="11.614643"
          x="540.97443"
          y="91.417625"
        />
        <path
          fill="none"
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 541.57747,98.28219 h -4.20931 l -1.14957,-1.96298 h 5.30334 z"
          id="path1087"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 242.4344,80.50779 7.2353,-5.06062 -9.90366,-28.15803 h -10.93495 z"
          id="path1131"
        />
        <path
          d="m 229.69654,73.3365 -8.96,-5.44 c -7.9552,14.87 -28.835,9.8112 -30.947,-6.4 -1.5232,-11.702 9.2896,-23.667 21.347,-19.77 4.2752,1.3792 7.168,4.6464 9.6,8.2496 l 8.96,-5.44 c -2.6944,-8.4384 -14.653,-13.12 -22.72,-13.12 -15.61,0 -29.571,12.454 -28.451,28.8 1.1136,16.282 15.005,28.25 31.331,26.291 6.8864,-0.8288 18.054,-5.6384 19.84,-13.171 m 45.44,-41.28 v 54.08 h 10.24 v -4.8 c 2.6272,2.2688 4.7648,4.3552 8.32,5.0368 2.9728,0.5664 6.0096,0.5152 8.96,-0.2048 9.78647,-2.38971 14.79237,-10.70171 14.87023,-18.94109 0.0952,-10.07565 -6.98881,-20.12541 -19.35023,-20.13091 -3.8336,0 -6.5344,0.7808 -9.92,2.56 l 3.52,7.36 c 3.3504,-0.768 6.032,-1.344 9.28,0.32 6.6944,3.4272 7.8272,12.531 2.2112,17.45 -5.8912,5.1584 -14.915,2.3968 -17.331,-4.9696 -1.28,-3.8976 -0.56,-8.7392 -0.56,-12.8 v -24.96 h -10.24 m 81.82609,46.08552 -8.8275,-3.89632 c -1.67195,1.82576 -3.02155,3.12613 -7.11406,3.19099 -4.09251,0.0648 -10.30248,-3.99668 -10.30248,-10.67081 0,-6.67414 4.93759,-10.91572 10.1601,-10.91572 5.22251,0 7.70078,3.06347 9.45805,7.56594 h -14.6575 l 4.86439,7.83056 19.62216,-0.0886 c 3.07861,-7.39244 -2.8493,-23.72914 -19.2755,-24.29775 -8.11954,-0.28106 -13.7983,4.58948 -16.10117,7.63286 -3.20195,4.23158 -4.28125,9.08335 -4.24157,11.69962 0.0785,5.1736 2.28012,11.81913 6.53379,15.2789 4.25367,3.45977 9.45394,5.17818 13.75357,5.23651 4.29963,0.0583 12.72865,-2.43277 16.22143,-8.57231 m 18.24,-26.24 v -4.48 h -10.56 v 38.72 h 10.56 l -0.0993,-21.69688 c 0.47142,-1.95956 1.32422,-3.55382 3.78573,-5.87026 2.46151,-2.31644 4.8853,-2.60988 7.16854,-2.60988 2.28324,0 4.18494,0.81064 5.25515,1.59799 l 5.05711,-8.79066 c -7.9211,-2.95126 -14.74069,-3.57123 -21.16719,3.12969 m -140.4798,39.36 -0.19913,10.25836 c 5.16609,0 9.08582,-0.57153 12.60621,-2.98474 10.37694,-7.11333 14.93051,-23.5322 19.06192,-35.43362 1.8016,-5.184 5.68741,-15.68005 5.68741,-15.68005 l -10.98275,0.0315 c 0,0 -3.14326,8.64696 -3.98806,11.16816 -1.61304,4.82163 -3.89759,11.32103 -6.01736,17.43497 -2.8594,8.24725 -7.62213,15.18087 -16.16864,15.20503"
          fill={getFillColor("#ffffff", "#000000")}
          fillOpacity="1"
          id="path6-1"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 536.21859,96.31921 h 5.02819 V 98.294 h -3.8764 z"
          id="path1182"
        />
        <path
          fill={getFillColor("#ffffff", "#000000")}
          stroke="none"
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          d="m 494.02321,91.46397 h 2.85605 v 1.9114 h -1.88378 z"
          id="path894"
        />
        <rect
          opacity="0.997"
          fill={getFillColor("#00ff77", "#f85c2c")}
          stroke="none"
          strokeWidth="5.66929"
          strokeLinejoin="bevel"
          id="rect891"
          width="10.138206"
          height="54.188244"
          x="504.35355"
          y="31.88065"
        />
      </svg>
    </div>
  );
};
