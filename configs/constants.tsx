import { IsIPAD } from "@/themes/app.constant";
import { Dimensions, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
//@ts-ignore
import One from "@/assets/images/onboarding/1.png";
//@ts-ignore
import Two from "@/assets/images/onboarding/2.png";
//@ts-ignore
import Three from "@/assets/images/onboarding/3.png";

export const onBoardingSlides: onBoardingSlidesTypes[] = [
  {
    color: "#40E0D0",
    title: "Explore",
    image: (
      <Image
        source={One}
        style={{
          width: IsIPAD ? verticalScale(285) : verticalScale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Our Community",
    subTitle:
      "Find the perfect course to enhance your career prospects and skill set",
  },
  {
    color: "#A7F893",
    title: "Set Your",
    image: (
      <Image
        source={Two}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    secondTitle: "Own Goal",
    subTitle:
      "Personalize your study plan with flexible timelines that suit you best",
  },
  {
    color: "#FFC0CB",
    image: (
      <Image
        source={Three}
        style={{
          width: IsIPAD ? scale(285) : scale(320),
          height: IsIPAD ? verticalScale(345) : verticalScale(330),
        }}
      />
    ),
    title: "Complete full",
    secondTitle: "Course",
    subTitle:
      "Achieve certification by completing courses with dedicated effort",
  },
];

// onboarding variables
export enum Side {
  LEFT,
  RIGHT,
  NONE,
}
export const MIN_LEDGE = 25;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const PREV = WIDTH;
export const NEXT = 0;
export const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
export const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];

// banner data
export const bannerData = [
  {
    image:
      "https://res.cloudinary.com/dkg6jv4l0/image/upload/v1729365053/WhatsApp_Image_2024-09-02_at_2.07.32_PM_kb1mwe.jpg",
    url: "https://react-native.becodemy.com",
  },
  {
    image:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1713574008/WhatsApp_Image_2024-02-29_at_2.00.10_AM_zpk4qe.jpg",
    url: "https://youtu.be/BrrwtCt7d-Y",
  },
  {
    image:
      "https://res.cloudinary.com/dkg6jv4l0/image/upload/v1723424082/WhatsApp_Image_2024-08-09_at_5.00.52_AM_wzokd1.jpg",
    url: "https://youtu.be/4aS7g8OYHbg",
  },
];

export const videoLessonsData = [
  {
    url: "https://youtu.be/hGB-6VAcM6U",
    thumbnail:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1717660359/WhatsApp_Image_2024-06-04_at_4.31.27_AM_afd4bw.jpg",
    title:
      "All Functional LMS mobile App with React Native,Expo,Typescript,Express js",
  },
  {
    url: "https://youtu.be/BrrwtCt7d-Y",
    thumbnail:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1713574008/WhatsApp_Image_2024-02-29_at_2.00.10_AM_zpk4qe.jpg",

    title:
      "SaaS Email Newsletter platform by using next14, typescript, AWS SES, AstraDb, Stripe",
  },
  {
    url: "https://youtu.be/mzbOqy5DWzE",
    thumbnail:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1713574100/AI_Prompt_Selling_Marketplace_with_next_13.5_Full_Project_ezvziv.png",
    title:
      "SaaS Email Newsletter platform by using next14, typescript, AWS SES, AstraDb, Stripe",
  },
  {
    url: "https://youtu.be/UxirFATvWTo",
    thumbnail:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1713574204/Food_Delivery_Web_App_anntu1.png",
    title:
      "Food Delivery Web Application using Microservice Architecture with Nest.js,GraphQL,Next.js",
  },
  {
    url: "https://youtu.be/h4dW5LNtcoE",
    thumbnail:
      "https://res.cloudinary.com/dwp4syk3r/image/upload/v1713574236/Let_s_Build_a_Full-stack_website_without_backend_ny0lcl.png",
    title:
      "Let's Make a Full-stack Website Without a Backend Next 14 | OneEntry CMS | Tailwind css | Typescript",
  },
  {
    url: "https://youtu.be/4aS7g8OYHbg",
    thumbnail:
      "https://res.cloudinary.com/dkg6jv4l0/image/upload/v1723424082/WhatsApp_Image_2024-08-09_at_5.00.52_AM_wzokd1.jpg",
    title:
      "Let's build one real-time car booking full-stack mobile app by using Expo React Native",
  },
];

export const NotificationsData = [
  {
    id: "1",
    title: "New Answer Received",
    message: "You have a new answer in your question",
    status: "Unread",
  },
  {
    id: "2",
    title: "New Reply Received",
    message: "You have a new reply in your support question",
    status: "Unread",
  },
];


export const FAQData = [
  {
    id: 1,
    question: "Will I receive a certificate for each course?",
    answer:
      "Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!",
  },
  {
    id: 2,
    question: "Can I get source code of each course?",
    answer:
      "Yes - You will get source code of all courses when you will watch the course video.",
  },
  {
    id: 3,
    question:
      "Can I ask about anything related course or if my code dosen't work?",
    answer:
      "Yes, you can comment on every part of the videos in the course. We'll always try to reply to your comment and fix any issues you may have.",
  },
  {
    id: 4,
    question: "Can I download any course videos?",
    answer:
      "For security reasons, course videos cannot be downloaded. However, you have lifetime access to each purchased course and can watch them anytime, anywhere with your account",
  },
];