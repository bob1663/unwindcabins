import images from "./images";

const cabins = [
  {
    imgUrl: images.Cabin_1,
    location: "Hampshire · England",
    title: "Rustic country retreat",
    price: "£210pp",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    ratingImage: images.RatingAndReview,
  },
  {
    imgUrl: images.Cabin_2,
    location: "Norfolk · England",
    title: "Cozy getaway cabin",
    price: "£312pp",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    ratingImage: images.RatingAndReview,
  },
  {
    imgUrl: images.Cabin_3,
    location: "Hampshire · England",
    title: "Beaty country retreat",
    price: "£210pp",
    description:
      "Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.",
    ratingImage: images.RatingAndReview,
  },
];

const inspiration = [
  {
    imgUrl: images.Inspiration_1,
    subTitle: "For those who love",
    title: "To Explore nature",
    description:
      "Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.",
  },
  {
    imgUrl: images.Inspiration_2,
    subTitle: "For those who love",
    title: "To Relax, rest & re-set",
    description:
      "Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family.",
  },
  {
    imgUrl: images.Inspiration_3,
    subTitle: "For those who love",
    title: "Four-legged friends",
    description:
      "When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins.",
  },
];

const faq = [
  {
    topic: "1. About Unwind Cabins",
    question: [
      "• How long have you been in business?",
      "• Why did you start this journey?",
    ],
    button: "About our cabins",
  },
  {
    topic: "2. Tell me more about the cabin",
    question: ["• What do I need to bring?", "• How do I get to the cabin?"],
    button: "Tell me more about the cabin",
  },
  {
    topic: "3. Pets, family & friends",
    question: [
      "• Please tell me I can bring my dog",
      "• How many people do you cabins sleep?",
    ],
    button: "Pets, family & friends",
  },
];

export default { cabins, inspiration, faq };
