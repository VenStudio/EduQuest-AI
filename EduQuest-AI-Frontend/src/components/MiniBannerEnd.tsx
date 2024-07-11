interface Props {
  correct: number;
  wrong: number;
  hints: number;
}

function MiniBannerEnd({ correct, wrong, hints }: Props) {
  return (
    <div className="banner-end">
      <div className="banner-end-containers">
        <div className="banner-end-container">
          <div className="banner-end-number">{correct}</div>
          <div className="banner-end-subtext">Correct Answers</div>
        </div>
        <div className="banner-end-container1">
          <div className="banner-end-number1">{wrong}</div>
          <div className="banner-end-subtext1">Wrong Answers</div>
        </div>
        <div className="banner-end-container2">
          <div className="banner-end-number2">{hints}</div>
          <div className="banner-end-subtext2">Hints</div>
        </div>
      </div>
      <svg
        width="1001"
        height="178"
        viewBox="0 0 1001 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 550 }}
        transform="scale(0.8)"
      >
        <rect x="23" y="70" width="978" height="33" fill="#664ECA" />
        <path
          d="M2 40.4176C2 33.6106 3.91902 26.9416 7.53686 21.1756V21.1756C14.0612 10.7775 25.4101 4.39369 37.6844 4.2176L163.316 2.41521C169.194 2.33087 174.863 4.59535 179.066 8.70647V8.70647C183.191 12.7409 188.731 15 194.5 15H237.635C251.952 15 265.356 22.0345 273.489 33.8171V33.8171C278.3 40.7876 280.975 49.0095 281.187 57.4767L282.204 98.1474C282.398 105.922 280.618 113.619 277.03 120.519L263 147.5L256 157.5V157.5C249.631 164.506 240.602 168.5 231.134 168.5H117.859C110.718 168.5 103.675 166.837 97.2873 163.644L95.5647 162.782C88.634 159.317 80.9402 157.659 73.1973 157.961L36.3517 159.4C26.6688 159.779 17.3566 155.651 11.1333 148.224V148.224C7.44872 143.826 5.04351 138.5 4.18038 132.828L2.52353 121.94C2.17501 119.65 2 117.337 2 115.02V40.4176Z"
          fill="white"
        />
        <path
          d="M90.1094 11.9012C91.3624 11.9012 92.1977 11.9012 93.033 11.9012C149.927 11.9874 206.868 12.0737 263.762 12.0737C265.712 12.0737 267.057 13.1087 268.403 15.6962C273.369 25.1837 278.473 34.4124 283.439 43.8999C284.088 45.1937 284.599 47.3499 284.599 49.0749C284.692 69.0849 284.692 89.0087 284.599 109.019C284.599 111.002 284.042 113.59 283.3 114.97C275.41 129.977 267.429 144.812 259.4 159.561C258.658 160.941 257.405 161.89 256.384 161.976C231.881 162.149 207.379 162.062 182.83 162.062C182.598 162.062 182.365 161.89 181.716 161.717C183.804 158.354 185.243 154.99 188.213 154.99C208.956 155.162 229.654 154.904 250.397 155.249C254.62 155.335 257.776 153.265 260.7 147.314C266.547 135.497 272.905 124.544 278.937 112.9C279.958 111.002 280.701 107.725 280.701 105.051C280.84 87.6287 280.84 70.2924 280.747 52.8699C280.747 50.6274 280.098 47.7812 279.262 46.1424C275.225 38.2074 270.909 30.7899 266.825 22.9412C265.479 20.3537 264.087 19.4049 262.138 19.4049C207.796 19.5774 153.408 19.5774 99.0658 20.0087C95.2605 20.0087 92.6617 17.6799 90.1094 11.9012Z"
          fill="#664ECA"
        />
        <path
          d="M180.185 8.28162C178.468 8.28162 177.493 8.28162 176.472 8.28162C124.636 8.28162 72.8466 8.36787 21.0105 8.28162C19.0151 8.28162 17.5765 9.23037 16.1379 11.9904C12.843 18.7179 9.17688 25.0141 5.78921 31.7416C5.09311 33.0354 4.58264 35.3641 4.53623 37.2616C4.44342 62.1016 4.48983 86.9416 4.44342 111.868C4.44342 115.059 4.90749 117.302 6.16046 119.372C7.97032 122.477 9.54814 126.185 11.4508 129.032C14.4208 133.344 15.3489 138.605 14.4672 145.592C14.0496 145.074 13.6319 144.643 13.2607 144.039C9.2697 136.622 5.23233 129.29 1.28778 121.787C0.591683 120.407 0.0812114 118.078 0.0348049 116.18C-0.0116016 88.6666 -0.0116016 61.2391 0.0348049 33.7254C0.0348049 32.0004 0.49887 29.7579 1.19497 28.5504C5.78921 19.6666 10.4763 10.8691 15.3025 2.33037C16.045 0.95037 17.4372 0.174121 18.551 0.174121C51.5924 0.0878707 84.5874 0.174121 117.629 0.174121C135.495 0.174121 153.362 0.432871 171.228 0.00162074C175.08 -0.0846292 177.308 3.27912 180.185 8.28162Z"
          fill="#8772E4"
        />
        <path
          d="M178.653 162.065C177.539 162.065 176.797 162.065 176.008 162.065C122.501 162.152 69.0409 162.238 15.5342 162.152C14.3276 162.152 12.889 160.944 11.9145 159.478C10.151 156.89 8.85165 153.354 7.04179 150.853C4.07178 146.799 4.44303 141.452 4.76788 134.638C7.87711 140.503 10.7079 145.592 13.3531 150.853C14.5596 153.268 15.859 154.13 17.6225 154.13C68.252 154.13 118.881 154.303 169.511 154.217C173.363 154.13 176.054 156.287 178.653 162.065Z"
          fill="#9F90DD"
        />
        <path
          d="M98.6099 165.484C149.193 165.484 199.312 165.484 249.57 165.484C247.853 170.572 245.858 172.729 242.888 172.729C197.502 172.815 152.163 172.729 106.777 173.074C103.251 173.16 101.023 170.572 98.6099 165.484Z"
          fill="#8772E4"
        />
        <path
          d="M358 44.4176C358 37.6106 359.919 30.9416 363.537 25.1756V25.1756C370.061 14.7775 381.41 8.39369 393.684 8.2176L519.316 6.41521C525.194 6.33087 530.863 8.59535 535.066 12.7065V12.7065C539.191 16.7409 544.731 19 550.5 19H593.635C607.952 19 621.356 26.0345 629.489 37.8171V37.8171C634.3 44.7876 636.975 53.0095 637.187 61.4767L638.204 102.147C638.398 109.922 636.618 117.619 633.03 124.519L619 151.5L612 161.5V161.5C605.631 168.506 596.602 172.5 587.134 172.5H473.859C466.718 172.5 459.675 170.837 453.287 167.644L451.565 166.782C444.634 163.317 436.94 161.659 429.197 161.961L392.352 163.4C382.669 163.779 373.357 159.651 367.133 152.224V152.224C363.449 147.826 361.044 142.5 360.18 136.828L358.524 125.94C358.175 123.65 358 121.337 358 119.02V44.4176Z"
          fill="white"
        />
        <path
          d="M446.109 15.9012C447.362 15.9012 448.198 15.9012 449.033 15.9012C505.927 15.9874 562.868 16.0737 619.762 16.0737C621.712 16.0737 623.057 17.1087 624.403 19.6962C629.369 29.1837 634.473 38.4124 639.439 47.8999C640.088 49.1937 640.599 51.3499 640.599 53.0749C640.692 73.0849 640.692 93.0087 640.599 113.019C640.599 115.002 640.042 117.59 639.3 118.97C631.41 133.977 623.429 148.812 615.4 163.561C614.658 164.941 613.405 165.89 612.384 165.976C587.881 166.149 563.379 166.062 538.83 166.062C538.598 166.062 538.365 165.89 537.716 165.717C539.804 162.354 541.243 158.99 544.213 158.99C564.956 159.162 585.654 158.904 606.397 159.249C610.62 159.335 613.776 157.265 616.7 151.314C622.547 139.497 628.905 128.544 634.937 116.9C635.958 115.002 636.701 111.725 636.701 109.051C636.84 91.6287 636.84 74.2924 636.747 56.8699C636.747 54.6274 636.098 51.7812 635.262 50.1424C631.225 42.2074 626.909 34.7899 622.825 26.9412C621.479 24.3537 620.087 23.4049 618.138 23.4049C563.796 23.5774 509.408 23.5774 455.066 24.0087C451.26 24.0087 448.662 21.6799 446.109 15.9012Z"
          fill="#664ECA"
        />
        <path
          d="M536.185 12.2816C534.468 12.2816 533.493 12.2816 532.472 12.2816C480.636 12.2816 428.847 12.3679 377.011 12.2816C375.015 12.2816 373.576 13.2304 372.138 15.9904C368.843 22.7179 365.177 29.0141 361.789 35.7416C361.093 37.0354 360.583 39.3641 360.536 41.2616C360.443 66.1016 360.49 90.9416 360.443 115.868C360.443 119.059 360.907 121.302 362.16 123.372C363.97 126.477 365.548 130.185 367.451 133.032C370.421 137.344 371.349 142.605 370.467 149.592C370.05 149.074 369.632 148.643 369.261 148.039C365.27 140.622 361.232 133.29 357.288 125.787C356.592 124.407 356.081 122.078 356.035 120.18C355.988 92.6666 355.988 65.2391 356.035 37.7254C356.035 36.0004 356.499 33.7579 357.195 32.5504C361.789 23.6666 366.476 14.8691 371.303 6.33037C372.045 4.95037 373.437 4.17412 374.551 4.17412C407.592 4.08787 440.587 4.17412 473.629 4.17412C491.495 4.17412 509.362 4.43287 527.228 4.00162C531.08 3.91537 533.308 7.27912 536.185 12.2816Z"
          fill="#8772E4"
        />
        <path
          d="M534.653 166.065C533.539 166.065 532.797 166.065 532.008 166.065C478.501 166.152 425.041 166.238 371.534 166.152C370.328 166.152 368.889 164.944 367.914 163.478C366.151 160.89 364.852 157.354 363.042 154.853C360.072 150.799 360.443 145.452 360.768 138.638C363.877 144.503 366.708 149.592 369.353 154.853C370.56 157.268 371.859 158.13 373.622 158.13C424.252 158.13 474.881 158.303 525.511 158.217C529.363 158.13 532.054 160.287 534.653 166.065Z"
          fill="#9F90DD"
        />
        <path
          d="M454.61 169.484C505.193 169.484 555.312 169.484 605.57 169.484C603.853 174.572 601.858 176.729 598.888 176.729C553.502 176.815 508.163 176.729 462.777 177.074C459.251 177.16 457.023 174.572 454.61 169.484Z"
          fill="#8772E4"
        />
        <path
          d="M718 44.4176C718 37.6106 719.919 30.9416 723.537 25.1756V25.1756C730.061 14.7775 741.41 8.39369 753.684 8.2176L879.316 6.41521C885.194 6.33087 890.863 8.59535 895.066 12.7065V12.7065C899.191 16.7409 904.731 19 910.5 19H953.635C967.952 19 981.356 26.0345 989.489 37.8171V37.8171C994.3 44.7876 996.975 53.0095 997.187 61.4767L998.204 102.147C998.398 109.922 996.618 117.619 993.03 124.519L979 151.5L972 161.5V161.5C965.631 168.506 956.602 172.5 947.134 172.5H833.859C826.718 172.5 819.675 170.837 813.287 167.644L811.565 166.782C804.634 163.317 796.94 161.659 789.197 161.961L752.352 163.4C742.669 163.779 733.357 159.651 727.133 152.224V152.224C723.449 147.826 721.044 142.5 720.18 136.828L718.524 125.94C718.175 123.65 718 121.337 718 119.02V44.4176Z"
          fill="white"
        />
        <path
          d="M806.109 15.9012C807.362 15.9012 808.198 15.9012 809.033 15.9012C865.927 15.9874 922.868 16.0737 979.762 16.0737C981.712 16.0737 983.057 17.1087 984.403 19.6962C989.369 29.1837 994.473 38.4124 999.439 47.8999C1000.09 49.1937 1000.6 51.3499 1000.6 53.0749C1000.69 73.0849 1000.69 93.0087 1000.6 113.019C1000.6 115.002 1000.04 117.59 999.3 118.97C991.41 133.977 983.429 148.812 975.4 163.561C974.658 164.941 973.405 165.89 972.384 165.976C947.881 166.149 923.379 166.062 898.83 166.062C898.598 166.062 898.365 165.89 897.716 165.717C899.804 162.354 901.243 158.99 904.213 158.99C924.956 159.162 945.654 158.904 966.397 159.249C970.62 159.335 973.776 157.265 976.7 151.314C982.547 139.497 988.905 128.544 994.937 116.9C995.958 115.002 996.701 111.725 996.701 109.051C996.84 91.6287 996.84 74.2924 996.747 56.8699C996.747 54.6274 996.098 51.7812 995.262 50.1424C991.225 42.2074 986.909 34.7899 982.825 26.9412C981.479 24.3537 980.087 23.4049 978.138 23.4049C923.796 23.5774 869.408 23.5774 815.066 24.0087C811.26 24.0087 808.662 21.6799 806.109 15.9012Z"
          fill="#664ECA"
        />
        <path
          d="M896.185 12.2816C894.468 12.2816 893.493 12.2816 892.472 12.2816C840.636 12.2816 788.847 12.3679 737.011 12.2816C735.015 12.2816 733.576 13.2304 732.138 15.9904C728.843 22.7179 725.177 29.0141 721.789 35.7416C721.093 37.0354 720.583 39.3641 720.536 41.2616C720.443 66.1016 720.49 90.9416 720.443 115.868C720.443 119.059 720.907 121.302 722.16 123.372C723.97 126.477 725.548 130.185 727.451 133.032C730.421 137.344 731.349 142.605 730.467 149.592C730.05 149.074 729.632 148.643 729.261 148.039C725.27 140.622 721.232 133.29 717.288 125.787C716.592 124.407 716.081 122.078 716.035 120.18C715.988 92.6666 715.988 65.2391 716.035 37.7254C716.035 36.0004 716.499 33.7579 717.195 32.5504C721.789 23.6666 726.476 14.8691 731.303 6.33037C732.045 4.95037 733.437 4.17412 734.551 4.17412C767.592 4.08787 800.587 4.17412 833.629 4.17412C851.495 4.17412 869.362 4.43287 887.228 4.00162C891.08 3.91537 893.308 7.27912 896.185 12.2816Z"
          fill="#8772E4"
        />
        <path
          d="M894.653 166.065C893.539 166.065 892.797 166.065 892.008 166.065C838.501 166.152 785.041 166.238 731.534 166.152C730.328 166.152 728.889 164.944 727.914 163.478C726.151 160.89 724.852 157.354 723.042 154.853C720.072 150.799 720.443 145.452 720.768 138.638C723.877 144.503 726.708 149.592 729.353 154.853C730.56 157.268 731.859 158.13 733.622 158.13C784.252 158.13 834.881 158.303 885.511 158.217C889.363 158.13 892.054 160.287 894.653 166.065Z"
          fill="#9F90DD"
        />
        <path
          d="M814.61 169.484C865.193 169.484 915.312 169.484 965.57 169.484C963.853 174.572 961.858 176.729 958.888 176.729C913.502 176.815 868.163 176.729 822.777 177.074C819.251 177.16 817.023 174.572 814.61 169.484Z"
          fill="#8772E4"
        />
      </svg>
    </div>
  );
}

export default MiniBannerEnd;