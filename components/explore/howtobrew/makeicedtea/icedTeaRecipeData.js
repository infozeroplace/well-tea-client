import { PiLeafThin, PiTeaBagLight } from "react-icons/pi";

export const icedTeaRecipeData = [
  {
    icon: <PiLeafThin />,
    title: "Quick iced tea",
    serve: "Serves 2 people",
    need: [
      {
        id: 1,
        title: "Tea of choice",
      },
      {
        id: 2,
        title: "Water",
      },
      {
        id: 3,
        title: "Ice",
      },
      {
        id: 4,
        title: "Fruit to garnish",
      },
    ],
    tools: [
      {
        id: 1,
        title: "WellTea Teamaker",
      },
      {
        id: 2,
        title: "2 heatproof glasses",
      },
    ],
    steps: [
      {
        id: 1,
        description: (
          <p className="">
            <span className="font-normal">
              Add 2+ teaspoons or 2+ tea bags of tea to the top of your
              Teamaker. Carefully fill it with hot water at the recommended
              temperature.
            </span>
            <br />
            <br />
            If you like your iced tea stronger, add 3-4 teaspoons of tea.
            <br />
            <br />
            Stick to the recommended water temperature to allow the tea to
            release it’s very best (and non-bitter) flavours. Brew black tea,
            herbal and fruit tisanes are at 100°C, brew green and white teas at
            80°C.
            <br />
            <br />
            Ensure you are using a heat-proof brew tools, the Teamaker is safe
            for boiling water.
          </p>
        ),
      },
      {
        id: 2,
        description: (
          <p className="">
            <span className="font-normal">
              Infuse for the recommended time.
            </span>
            <br />
            <br />
            Find your tea’s unique brew time and temperature on the back of the
            box. Green, black and oolong tea have strict brew times (usually
            between 2-5 minutes) to avoid over-brewing, which can lead to a
            bitter taste – so use a timer to be safe. Fruit tisanes are more
            flexible (3+ minutes), as they rely on fruit and herbs which deepen
            with longer brewing times.
          </p>
        ),
      },
      {
        id: 3,
        description: (
          <p className="">
            <span className="font-normal">
              Add ice to two heatproof glasses, then sit the Teamaker on top of
              each glass to dispense the tea.
            </span>
            <br />
            <br />
            The Teamaker’s clever design makes this step simple and satisfying.
            The tea begins to cool as to flows from the Teamaker, and once it
            hits the ice it instantly cools to create iced tea.
            <br />
            <br />
            If you have extra time up your sleeve, let the tea cool in the tea
            maker – this can help give your iced tea a stronger flavour by
            preventing the ice from melting.
          </p>
        ),
      },
      {
        id: 4,
        description: (
          <p className="">
            <span className="font-normal">
              Top with fresh fruit to garnish.
            </span>
            <br />
            <br />
            Different garnishes can bring out tea’s most complex and delicious
            tastes. Start simple with a slice of lemon, then experiment with
            berries, citrus varieties and even tapioca pearls to make a boba
            iced tea. Learn more with our garnish guide.
          </p>
        ),
      },
    ],
  },
  {
    icon: <PiTeaBagLight />,
    title: "Iced tea for many",
    serve: "Serves 3-4 people",
    need: [
      {
        id: 1,
        title: "Tea of choice",
      },
      {
        id: 2,
        title: "Water",
      },
      {
        id: 3,
        title: "Ice",
      },
      {
        id: 4,
        title: "Fruit to garnish",
      },
    ],
    tools: [
      {
        id: 1,
        title: "1.2L or 2L WellTea Jug-a-lot",
      },
      {
        id: 2,
        title: "Glassess",
      },
    ],
    steps: [
      {
        id: 1,
        description: (
          <p className="">
            <span className="font-normal">
              Remove the lid of your Jug-A-Lot and add 2+ teaspoons of tea, or
              2+ tea bags, per 250 ml/8.4fl oz to the infuser.
            </span>
            <br />
            <br />
            That’s 10 teaspoons or tea bags for a small 1.2L Jug-A-Lot, or 16
            teaspoons tea bags for a 2.0L large.
          </p>
        ),
      },
      {
        id: 2,
        description: (
          <p className="">
            <span className="font-normal">
              Half fill the jug with hot water and infuse for the recommended
              time.
            </span>
            <br />
            <br />
            Stick to tea tea’s recommended water temperature to allow the tea to
            release it’s very best (and non-bitter) flavours. Brew black tea,
            herbal and fruit tisanes are at 100°C, brew green and white teas at
            80°C.
            <br />
            <br />
            Ensure you are using a heat-proof brew tools, the Jug-A-Lot is safe
            for boiling water.
            <br />
            <br />
            Find your tea’s unique brew time and temperature on the back of the
            box. Green, black and oolong tea have strict brew times (usually
            between 2-5 minutes) to avoid over-brewing, which can lead to a
            bitter taste – so use a timer to be safe. Fruit tisanes are more
            flexible (3+ minutes), as they rely on fruit and herbs which deepen
            with longer brewing times.
          </p>
        ),
      },
      {
        id: 3,
        description: (
          <p className="">
            <span className="font-normal">
              Once the tea is brewed into a strong concentrate, remove the tea
              infuser from the Jug-A-Lot, discarding the used tea leaves. Then,
              leave to cool on the bench
            </span>
            <br />
            <br />
            Let the tea fully cool before moving onto the next step – this can
            help give your iced tea a stronger flavour by preventing the ice
            from melting when added.
          </p>
        ),
      },
      {
        id: 4,
        description: (
          <p className="">
            <span className="font-normal">
              Add ice and fruit to garnish. Screw the lid on, leaving open just
              enough to pour into glasses.
            </span>
            <br />
            <br />
            Different garnishes can bring out tea’s most complex and delicious
            tastes. Start simple with a slice of lemon, then experiment with
            berries, citrus varieties and even tapioca pearls to make a boba
            iced tea. Learn more with our garnish guide.
          </p>
        ),
      },
    ],
  },
];
