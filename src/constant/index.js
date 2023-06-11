import { useTranslation } from "react-i18next";
import {
  messages,
  communities,
  growToogether,
  users,
  conversation,
} from "../assets";

export const counts = [
  {
    img: communities,
    count: "1.4k+",
    title: "Communities Formed",
  },
  {
    img: messages,
    count: "2.7m+",
    title: "Messages Sent",
  },
];

export const grids = [
  {
    has_wave: true,
    img: growToogether,
    title: "Grow Together",
    description:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    img: conversation,
    reverse: true,
    title: "Flowing Conversations",
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    img: users,
    has_wave: true,
    title: "Your Users",
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

export const headerInfo = {
  header: "Build The Community Your Fans Will Love",
  description:
    "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.",
  button: "Get Started For Free",
};

export const FooterData = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.",
  phone: "Phone: +1-543-123-4567",
  email: "Email: jksa.work.1@gmail",
  description2:
    "To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address",
  copyright: "Challenge by Frontend Mentor. Coded by Mohammed Altigani Osman.",
  subscribe: "subscribe",
};
