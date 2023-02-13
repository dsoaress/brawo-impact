import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

function FourthIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path
        d="M79.5876 77.359C79.2569 77.0242 78.7629 76.8442 78.1559 76.8421C77.392 76.8379 76.6259 76.8358 75.862 76.8358H71.3389V31.9619C71.3389 30.2501 70.8157 29.729 69.1036 29.7269C67.3454 29.7269 65.5852 29.7269 63.827 29.7269H58.1256C56.2544 29.7269 55.7982 30.1894 55.7982 32.0812V76.7794H47.7923V76.1369C47.7923 76.1369 47.7923 53.2469 47.7923 45.6022C47.7923 43.882 47.29 43.3839 45.557 43.3839C44.6256 43.3839 43.6942 43.3839 42.7628 43.3839H38.9492C38.4867 43.3839 38.0241 43.3839 37.5616 43.3839C37.099 43.3839 36.6344 43.3818 36.1718 43.3818C35.4581 43.3818 34.7464 43.3839 34.0327 43.3923C32.869 43.407 32.2934 43.9657 32.2243 45.1481C32.2139 45.326 32.216 45.5017 32.2181 45.6692C32.2181 45.734 32.2181 45.801 32.2181 45.8659V76.7961H24.2122V70.1204C24.2122 63.9741 24.2122 57.8299 24.2122 51.6836C24.2122 50.0743 23.7224 49.5825 22.1192 49.5825C20.4029 49.5825 18.6866 49.5825 16.9703 49.5825H10.9842C9.12353 49.5825 8.66934 50.0325 8.66934 51.8699V76.84C8.13562 76.84 7.60608 76.84 7.07863 76.8421C6.4277 76.8421 5.78096 76.8442 5.13839 76.8442C3.92653 76.8442 2.94699 76.8379 2.05327 76.8275H2.00094C1.09675 76.8275 0.481395 77.1393 0.0627884 77.809L0 77.9094V78.916L0.0586047 79.0144C0.575584 79.8807 1.39396 80 2.20187 80H2.20605C20.9575 79.9916 39.7048 79.9896 58.4563 79.9896H77.819C77.819 79.9896 78.0911 79.9896 78.1371 79.9896C79.2757 79.9665 79.9894 79.368 79.9999 78.4284C80.0041 78.0057 79.8618 77.6353 79.5876 77.3569V77.359ZM21.0015 52.7802V76.7752H11.8821V52.7802H21.0015ZM35.4246 76.8024V46.5921H44.5879V76.8024H35.4246ZM68.1429 32.9288V76.7731H59.011V32.9288H68.1429Z"
        fill="currentColor"
      />
      <path
        d="M5.26186 46.5104C5.40418 46.5104 5.54861 46.5041 5.69093 46.4895L6.4193 46.4183C8.85978 46.1777 11.3861 45.9286 13.8433 45.5017C26.6715 43.2688 38.7336 38.6732 49.6907 31.8405C50.4588 31.3613 51.3609 30.7879 52.2274 30.1685C52.9705 29.6369 53.1526 28.7831 52.6816 28.0465C52.3928 27.5944 51.9239 27.3328 51.3944 27.3328C51.1223 27.3328 50.8481 27.3998 50.5802 27.5317C50.3542 27.6426 50.1511 27.7765 49.9544 27.9062L49.877 27.9565C37.4862 36.0825 23.6513 41.174 8.75304 43.0867C7.84257 43.2039 6.90279 43.2604 5.99442 43.3169L5.54651 43.3441C5.50465 43.3462 5.46278 43.3483 5.42302 43.3483C5.0086 43.3483 4.4979 43.2144 4.41209 42.5719C4.34929 42.0864 4.72185 41.6888 5.3393 41.5821C5.46488 41.5612 5.59465 41.5465 5.73279 41.534L5.85 41.5214C6.32093 41.4712 6.79395 41.4251 7.26488 41.3791C8.26535 41.2807 9.29932 41.1803 10.3165 41.038C18.538 39.8912 26.6945 37.5808 34.5601 34.1697C48.0037 28.3394 59.4338 19.7426 68.5364 8.61567C68.8838 8.19295 69.4636 7.48352 68.9508 6.55227C68.6431 5.99351 68.1659 5.72355 67.4877 5.72355C67.3224 5.72355 67.1445 5.7382 66.9122 5.77169L66.6715 5.80517C65.7777 5.93282 64.8526 6.06466 63.9421 6.14837C63.8835 6.15465 63.8249 6.15674 63.7642 6.15674C63.5193 6.15674 63.287 6.1128 63.1112 6.03327C62.6612 5.82819 62.6382 5.43476 62.6968 5.14178C62.7596 4.83415 62.9249 4.47002 63.6659 4.37585C64.951 4.21471 66.2361 4.05148 67.5212 3.88825C69.3777 3.65177 71.2343 3.4153 73.0929 3.1851C73.185 3.17464 73.2729 3.16836 73.3545 3.16836C73.7899 3.16836 74.3675 3.29392 74.3696 4.38003C74.378 7.15496 74.3801 10.1894 74.3696 13.6549C74.3696 14.0923 74.2524 14.831 73.4906 14.8498H73.4613C72.7371 14.8498 72.5801 14.1927 72.5738 13.6424C72.5717 13.3703 72.578 13.0962 72.5822 12.8241C72.5947 12.2193 72.6073 11.5915 72.5319 10.9721C72.4754 10.5075 72.105 9.76038 71.5566 9.56995C71.4436 9.53019 71.3159 9.50926 71.1819 9.50926C70.7696 9.50926 70.3217 9.6976 69.9345 9.87339C69.6478 10.0031 69.4657 10.2522 69.3066 10.474C69.2605 10.5389 69.2124 10.6017 69.1643 10.6602C65.2335 15.3814 60.7147 19.7782 55.7291 23.7292L55.6537 23.7878C55.4005 23.9866 55.1409 24.1938 54.9212 24.4554C54.4272 25.0455 54.4105 25.7696 54.8772 26.3932C55.1786 26.795 55.5826 27.0085 56.0493 27.0085C56.2795 27.0085 56.5182 26.9562 56.7589 26.8515C57.0079 26.7448 57.2172 26.5774 57.4014 26.4309L57.4851 26.3639C61.8847 22.9047 65.9201 19.1232 69.4845 15.1261C69.5033 15.1052 69.5201 15.0863 69.5389 15.0654C69.5829 15.147 69.6268 15.2286 69.6708 15.3102C69.9743 15.8732 70.2861 16.455 70.7424 16.9174C71.4729 17.6583 72.3771 18.0496 73.3566 18.0496C73.8903 18.0496 74.4387 17.9345 74.9871 17.7085C76.5966 17.0451 77.4924 15.71 77.5134 13.9479C77.528 12.7216 77.5196 11.4764 77.5134 10.271C77.5029 8.53824 77.4945 6.74689 77.5469 4.98901C77.6222 2.41498 76.5631 0.788951 74.3068 0.0230198L74.242 0H72.5612L72.4985 0.0209271C72.4461 0.0376687 72.3938 0.0565031 72.3436 0.0774302C72.2682 0.106728 72.195 0.133933 72.1447 0.140211C70.3971 0.359946 68.6473 0.575494 66.8975 0.793136C65.6814 0.943811 64.4675 1.09449 63.2514 1.24516C60.9282 1.53395 59.3626 3.39856 59.5258 5.67542C59.6765 7.76185 61.4828 9.33557 63.7266 9.33557C63.7433 9.33557 63.7601 9.33557 63.7747 9.33557C51.9323 22.5803 36.7704 31.6229 18.7117 36.2101C14.3372 37.3213 9.80165 38.0684 4.84953 38.4912C3.78417 38.5832 2.82556 39.0855 2.14742 39.9058C1.46928 40.7283 1.14277 41.806 1.2537 42.867C1.47556 44.9827 3.15627 46.5167 5.25139 46.5167L5.26186 46.5104Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const FourthIcon = forwardRef(FourthIconBase)