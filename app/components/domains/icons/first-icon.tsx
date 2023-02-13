import type { Ref, SVGProps } from 'react'
import { forwardRef } from 'react'

function FirstIconBase(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <path
        d="M22.0882 0C24.627 2.15596 26.1116 4.93595 26.2593 8.22937C26.4506 12.4641 26.3632 16.7134 26.3445 20.9543C26.3424 21.6785 26.5795 22.0563 27.1929 22.4048C30.4178 24.2352 33.6074 26.1261 36.8282 27.9627C39.8494 29.6846 41.9453 32.1473 42.9621 35.5013C43.3696 36.8454 42.9413 37.5988 41.5731 37.914C38.4958 38.6194 35.5349 38.2604 32.7528 36.7598C30.8129 35.7142 28.9291 34.5684 27.0182 33.4685C26.7978 33.3412 26.5712 33.2285 26.2676 33.0657V56.0945C26.3029 56.1008 26.3383 56.1071 26.3736 56.1133C27.0161 53.7445 27.6607 51.3736 28.3032 49.0047C28.5756 48.0008 28.8313 46.9949 29.1141 45.9951C29.6235 44.1794 31.0021 43.1212 32.8942 43.1212C44.8251 43.1171 56.7539 43.1171 68.6848 43.1212C70.5749 43.1212 71.9638 44.1627 72.4629 45.9951C74.4236 53.2164 76.3781 60.4378 78.3077 67.6674C78.9939 70.2408 77.266 72.4761 74.6107 72.4823C68.9821 72.4969 63.3556 72.4865 57.727 72.4865C57.4172 72.4865 57.1074 72.4865 56.7352 72.4865V76.861C57.0429 76.861 57.3444 76.861 57.6459 76.861C64.2851 76.861 70.9242 76.8756 77.5633 76.8443C78.5198 76.8401 79.2205 77.1094 79.68 77.9547V78.8917C79.2184 79.7328 78.5198 80.0021 77.5633 80C52.4041 79.9791 27.2448 79.9833 2.0856 79.9833C1.87767 79.9833 1.66974 79.9937 1.46389 79.9729C0.621787 79.8935 0.00632168 79.2424 8.3849e-05 78.4326C-0.00823325 77.6249 0.603074 76.9549 1.43894 76.8694C1.66974 76.8464 1.9047 76.8589 2.13966 76.8589C6.75565 76.8589 11.3737 76.8589 15.9897 76.8589C16.2663 76.8589 16.5449 76.8589 16.8796 76.8589C16.8796 76.4499 16.8796 76.1389 16.8796 75.83C16.8796 71.2739 16.8796 66.7178 16.8817 62.1617C16.8817 61.8236 16.8817 61.4813 16.9399 61.1515C17.073 60.4148 17.6885 59.9285 18.4329 59.9285C19.1772 59.9285 19.799 60.4148 19.9299 61.1453C19.9902 61.475 19.9882 61.8194 19.9882 62.1554C19.9923 66.7366 19.9902 71.3198 19.9902 75.901C19.9902 76.2036 19.9902 76.5083 19.9902 76.8151H23.105C23.105 76.4394 23.105 76.1076 23.105 75.7736C23.105 61.2455 23.0988 46.7194 23.1237 32.1912C23.1237 31.4398 22.9199 31.012 22.2463 30.6759C21.2378 30.173 19.9923 30.8471 19.9923 31.9741C19.9923 36.8955 19.9923 41.8147 19.9882 46.7361C19.9882 47.0742 19.9882 47.4164 19.9279 47.7462C19.799 48.4475 19.2105 48.9233 18.4973 48.9484C17.7509 48.9755 17.1063 48.5122 16.9545 47.7921C16.8859 47.4645 16.8838 47.1201 16.8838 46.7841C16.8796 42.541 16.8817 38.2959 16.8796 34.0529C16.8796 33.7586 16.8547 33.4622 16.8381 33.0698C16.4783 33.2702 16.233 33.4059 15.9918 33.5457C14.1038 34.631 12.2429 35.7684 10.3216 36.7932C7.58528 38.25 4.67222 38.6027 1.64479 37.9327C0.189298 37.6113 -0.263984 36.8475 0.180981 35.4345C1.18943 32.2434 3.14187 29.8077 6.03206 28.1318C9.37554 26.195 12.7149 24.2477 16.0708 22.3339C16.5636 22.0521 16.7424 21.7391 16.7383 21.1714C16.7133 17.3958 16.6572 13.6203 16.759 9.84686C16.8006 8.30868 17.0314 6.72458 17.4889 5.25736C18.1355 3.16193 19.2542 1.27729 21.1546 0H22.0882ZM44.8064 72.5095H26.2551V76.8172H44.8064V72.5095ZM62.4012 69.3267C62.1392 67.4191 61.8897 65.6012 61.6423 63.8021H52.3604V69.3267H62.4012ZM39.1529 69.31H49.1666V63.7917H39.8972C39.6477 65.6367 39.4065 67.4337 39.1529 69.31ZM65.5451 69.36C68.6328 69.36 71.6623 69.3684 74.6918 69.3538C75.2262 69.3517 75.4341 68.9802 75.3094 68.496C74.9039 66.9161 74.4652 65.3466 74.0452 63.7875H64.7986C65.0482 65.645 65.2914 67.4462 65.5472 69.36H65.5451ZM27.5339 63.7813C27.1159 65.3195 26.6938 66.818 26.3071 68.3269C26.1096 69.095 26.3445 69.3579 27.1804 69.36C29.3054 69.3663 31.4325 69.3621 33.5575 69.3621C34.3539 69.3621 35.1502 69.3621 35.9986 69.3621C36.2543 67.4691 36.5018 65.6513 36.7534 63.7792H27.5318L27.5339 63.7813ZM60.4675 55.0364H52.375V60.5755H61.2077C60.9582 58.7097 60.7149 56.8939 60.4654 55.0364H60.4675ZM40.3339 60.5692H49.1459V55.0301H41.0803C40.8287 56.8897 40.5834 58.7138 40.3318 60.5692H40.3339ZM64.3599 60.5692H73.174C72.6645 58.6867 72.1718 56.8647 71.679 55.0427H63.6072C63.863 56.9231 64.1125 58.7451 64.3599 60.5692ZM28.403 60.5734H37.1879C37.4395 58.7138 37.6849 56.8939 37.9386 55.028H29.8959C29.3969 56.8793 28.9062 58.7034 28.4051 60.5734H28.403ZM25.2695 28.8435C27.1263 29.9204 29.0226 31.0328 30.9314 32.1286C32.2351 32.8757 33.5201 33.6647 34.8695 34.3137C36.2731 34.9879 37.7847 35.2467 39.4689 35.0839C38.7432 33.5436 37.8263 32.3039 36.508 31.4941C33.333 29.5406 30.0997 27.6831 26.9662 25.8339C26.3903 26.8566 25.8517 27.8104 25.2654 28.8456L25.2695 28.8435ZM3.65337 35.0985C5.76384 35.2341 7.5936 34.7917 9.29653 33.8087C12.0121 32.2413 14.7255 30.6676 17.439 29.0939C17.6074 28.9958 17.755 28.8685 17.8091 28.831C17.231 27.8166 16.6904 26.867 16.1207 25.8715C13.0434 27.6768 9.8912 29.4738 6.79516 31.3626C5.40412 32.212 4.40607 33.4768 3.65129 35.1006L3.65337 35.0985ZM21.5518 4.01764C20.3105 5.79792 19.8239 7.72221 19.8281 9.80094C19.8343 12.7896 19.8281 15.7784 19.8322 18.765C19.8322 19.0133 19.8613 19.2617 19.8738 19.4537H23.1757C23.1757 19.4537 23.2256 19.4015 23.2256 19.3577C23.2069 15.5905 23.2485 11.8233 23.1299 8.06032C23.0842 6.60979 22.4583 5.26154 21.5518 4.01764ZM52.3583 46.2686V51.8265H60.0329C59.7772 49.9502 59.5256 48.1094 59.274 46.2686H52.3583ZM42.2697 46.2727C42.0202 48.1198 41.7707 49.9585 41.517 51.8285H49.15V46.2727H42.2697ZM63.183 51.8682H70.8181C70.3711 50.2006 69.9386 48.652 69.5477 47.0929C69.3876 46.4501 69.0487 46.2185 68.3895 46.231C66.6263 46.2685 64.8631 46.2414 63.0999 46.2456C62.8836 46.2456 62.6674 46.279 62.4283 46.2999C62.684 48.1782 62.9273 49.9815 63.183 51.8682ZM39.1258 46.2456C36.953 46.2456 34.8862 46.2289 32.8215 46.2686C32.5907 46.2727 32.2268 46.5545 32.1602 46.7799C31.6654 48.4391 31.2308 50.1171 30.7547 51.8682H38.369C38.6247 49.9731 38.8659 48.1761 39.1258 46.2456ZM48.0126 72.5241V76.8255H53.5123V72.5241H48.0126ZM19.2999 24.6965C19.2791 25.8986 20.2834 26.9505 21.4873 26.9902C22.7016 27.0298 23.7891 25.9591 23.7891 24.7278C23.7891 23.511 22.7806 22.5008 21.5601 22.4925C20.3375 22.4841 19.3207 23.4734 19.2999 24.6965Z"
        fill="currentColor"
      />
      <path
        d="M60.844 0C61.6819 0.459158 62.0042 1.15416 61.9481 2.1163C61.8857 3.17654 61.9481 4.24304 61.9294 5.30537C61.9127 6.29256 61.2515 6.9959 60.3782 6.9959C59.5091 6.9959 58.8416 6.28629 58.8271 5.30537C58.8104 4.24304 58.8707 3.17445 58.8084 2.1163C58.7481 1.15416 59.0704 0.457071 59.9104 0H60.844Z"
        fill="currentColor"
      />
      <path
        d="M79.676 19.8399C79.2164 20.6789 78.5261 21.0045 77.5676 20.9481C76.5113 20.8855 75.4488 20.9481 74.3904 20.9293C73.409 20.9126 72.7062 20.249 72.7062 19.3703C72.7062 18.4958 73.409 17.83 74.3904 17.8133C75.4509 17.7966 76.5134 17.8572 77.5676 17.7945C78.5261 17.7361 79.2185 18.0638 79.676 18.9028V19.8399Z"
        fill="currentColor"
      />
      <path
        d="M69.579 19.414C69.5624 24.5086 65.4413 28.616 60.3533 28.6097C55.2445 28.6013 51.14 24.4355 51.1733 19.2909C51.2045 14.2046 55.3422 10.116 60.4364 10.1369C65.5057 10.1578 69.5936 14.3048 69.5769 19.414H69.579ZM66.4643 19.3493C66.4559 15.9661 63.7487 13.2613 60.372 13.2613C56.9973 13.2613 54.2943 15.9703 54.288 19.3556C54.2818 22.7763 57.0077 25.4999 60.4198 25.4832C63.7861 25.4665 66.4747 22.7387 66.4663 19.3472L66.4643 19.3493Z"
        fill="currentColor"
      />
      <path
        d="M74.6816 6.66832C74.351 7.23601 74.1804 7.68056 73.8831 8.00614C73.0951 8.86393 72.2613 9.6779 71.4254 10.4898C70.6478 11.2453 69.7557 11.2703 69.0945 10.5941C68.452 9.9367 68.4749 9.0643 69.1985 8.31295C70.0593 7.41759 70.9409 6.54101 71.8329 5.67696C72.3257 5.19902 72.9724 5.02788 73.538 5.38894C73.9892 5.67696 74.2844 6.20916 74.6816 6.67041V6.66832Z"
        fill="currentColor"
      />
      <path
        d="M52.3189 29.1043C52.0091 29.6553 51.8615 30.0853 51.5787 30.39C50.7533 31.2833 49.8862 32.139 49.0108 32.9821C48.281 33.6855 47.3578 33.6959 46.7278 33.0573C46.0998 32.4186 46.1227 31.4982 46.8297 30.7677C47.6926 29.8745 48.5721 28.9958 49.4662 28.1318C49.9527 27.6622 50.5848 27.4514 51.165 27.8354C51.6141 28.1338 51.9197 28.6494 52.3189 29.1043Z"
        fill="currentColor"
      />
      <path
        d="M74.6109 32.1098C74.301 32.5 74.0328 33.0093 73.617 33.3203C73.1283 33.6834 72.4796 33.6312 72.0305 33.2117C70.9721 32.2225 69.9387 31.204 68.9656 30.1333C68.4292 29.5426 68.5456 28.7182 69.0904 28.1568C69.6559 27.5724 70.5064 27.4451 71.1177 28.0045C72.1677 28.9624 73.1533 29.9914 74.1305 31.0266C74.3426 31.252 74.4029 31.6235 74.6109 32.1118V32.1098Z"
        fill="currentColor"
      />
      <path
        d="M52.2566 9.66314C51.9301 10.0659 51.6536 10.5689 51.2356 10.8799C50.7408 11.2472 50.1045 11.1763 49.6533 10.7526C48.5991 9.75915 47.5636 8.74274 46.5884 7.67415C46.079 7.11481 46.2059 6.21737 46.7278 5.68934C47.2746 5.13417 48.1749 5.02356 48.7655 5.57037C49.8092 6.53461 50.799 7.55936 51.7762 8.59456C51.9883 8.81996 52.0486 9.18938 52.2545 9.66732L52.2566 9.66314Z"
        fill="currentColor"
      />
      <path
        d="M44.5321 20.9314C43.9124 20.9314 43.2907 20.9502 42.6711 20.9272C41.7375 20.8917 41.0784 20.226 41.0825 19.3619C41.0888 18.4978 41.75 17.8362 42.6898 17.8195C43.9291 17.7966 45.1704 17.7987 46.4117 17.8195C47.3495 17.8362 48.0273 18.4937 48.046 19.3452C48.0647 20.226 47.3682 20.9043 46.3909 20.9314C45.7713 20.9481 45.1496 20.9356 44.53 20.9314H44.5321Z"
        fill="currentColor"
      />
      <path
        d="M58.8229 35.2591C58.8229 34.61 58.8021 33.961 58.8292 33.314C58.8645 32.429 59.5216 31.7674 60.3429 31.7466C61.1891 31.7257 61.9002 32.404 61.9231 33.3244C61.9522 34.5954 61.9501 35.8665 61.9231 37.1375C61.9044 38.0746 61.2286 38.7404 60.3699 38.7362C59.5091 38.732 58.8583 38.0683 58.8271 37.125C58.8063 36.503 58.8229 35.8811 58.825 35.257L58.8229 35.2591Z"
        fill="currentColor"
      />
      <path
        d="M19.9675 54.4459C19.9675 55.3037 19.3021 55.9778 18.4475 55.9861C17.5638 55.9966 16.8735 55.2911 16.8943 54.402C16.9151 53.5463 17.5971 52.8889 18.4517 52.9014C19.3063 52.9119 19.9696 53.5881 19.9696 54.4459H19.9675Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const FirstIcon = forwardRef(FirstIconBase)
