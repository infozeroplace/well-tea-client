import { Accordion, AccordionItem } from "@nextui-org/react";
import { PiLeafThin, PiTeaBagLight } from "react-icons/pi";

export const teaRecipeData = [
  {
    icon:(<PiLeafThin />),
    title: "Loose Leaf Tea",
    serve: "Serves 1+ people",
    need: [
      {
        id: 1,
        title: "Loose leaf tea of choice",
      },
      {
        id: 2,
        title: "Infuser",
      },
      {
        id: 3,
        title: "Cup or teapot",
      },
      {
        id: 4,
        title: "Water",
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Boil the kettle. Warm your cup or pot first by adding a splash of boiling water. Swill and discard, then fill with fresh water to brew. Use the table below to determine the correct temperature for your tea.",
      },
      {
        id: 2,
        description:
          "Place the loose leaf tea in your infuser. The general rule is 1 teaspoon of tea per 250 ml/8.4 fl oz.",
      },
      {
        id: 3,
        description:
          "Place the infuser in your cup or pot and brew for the recommended time (see below).",
      },
      {
        id: 4,
        description:
          "Remove the infuser. Add milk and sweetener if using. Sip mindfully and enjoy!",
      },
    ],
  },
  {
    icon:(<PiTeaBagLight />),
    title: "Teabag",
    serve: "Serves 1+ people",
    need: [
      {
        id: 1,
        title: "Teabag of choice",
      },
      {
        id: 2,
        title: "Cup",
      },
      {
        id: 3,
        title: "Water",
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Boil the kettle. Warm your cup or pot first by adding a splash of boiling water. Swill and discard, then fill with fresh water to brew. Use the table below to determine the correct temperature for your tea.",
      },
      {
        id: 2,
        description: "Place the teabag in the cup.",
      },
      {
        id: 3,
        description: "Brew for the recommended time (see below).",
      },
      {
        id: 4,
        description:
          "Remove the teabag. Add milk and sweetener if using. Sip mindfully and enjoy!",
      },
    ],
  },
];
