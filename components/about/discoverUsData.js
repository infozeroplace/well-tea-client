import { Accordion, AccordionItem } from "@nextui-org/react";

export const discoverItems = [
    {
      title: "Our Story",
      image: "/images/about-image-2.jpg",
      description: (
        <div className="text-xs text-justify">
          <p>
            The concept of WellTea started life in late 2010 from our flat in
            London – inspired by our recent travels, we wanted to create a brand
            and space that felt like a second home, where people could come
            together to relax, work, catch up and share in those small meaningful
            moments and connections over a quality cup of tea. On our travels, we
            naturally found ourselves drawn to these beautiful welcoming
            independent spaces created by cafes, coffee shops and studios – and to
            this day these spaces create a focal point whenever we plan a trip,
            whether it’s domestic or international.
          </p>
          <br />
          <p>
            We wanted to capture the essence of these spaces and what they
            represented for us and the people that used them. Initially we had
            ambitions of starting our very own boutique space that focused on
            ethically sourced, quality single origin teas and herbal blends, but
            these plans were quickly scuppered by the beginning of what would
            become a near three-year lockdown on the hospitality sector in the UK.
            We, instead, redirected our energy and focus into creating something
            that could be tangibly shared with those who were looking for
            speciality tea blends that inspired, energised and brought joy into
            their day. We set about designing, sourcing and blending from our
            kitchen, we didn’t know what we had yet, but WellTea was born.
          </p>
          <br />
          <p>
            At the time we started selling just a handful of blends to our
            friends, before setting up online and attending local events during
            the small windows we were given throughout lockdowns. The realisation
            soon dawned on us that, in what was a fairly coffee-saturated market,
            tea was an untapped space where we could present our offering into
            those exact same spaces we admired so much – we soon went from
            drinking in the spaces we loved, to seeing our infusions served in
            them.
          </p>
        </div>
      ),
    },
    {
      title: "Our Values",
      image: "/whychooseus/slide_banner_08.jpg",
      description: (
        <div className="text-xs text-justify">
          <h5 className="font-semibold">Quality and Sourcing</h5> <br />
          <p>
            Detail, quality and sourcing fundamentally underline everything we
            create. We work hard to source the best tasting, organically
            cultivated and fairly traded ingredients. All of our products are hand
            blended in small batches and we manage all of our packing and shipping
            in-house to ensure quality and care throughout the process. Where we
            work with other small businesses, we do so as a value-aligned
            partnership, with a focus on respect and an emphasis on creating high
            quality products and relationships that are made to last. We believe
            that this is how communities and friendships are formed and small
            businesses thrive.
          </p>
          <br />
          <h5 className="font-semibold">Intention and Kindness</h5> <br />
          <p>
            The warmth and comfort that a shared cup of tea brings to meaningful
            moments is something that we have fostered into the way in which we
            talk about and run our business. We firmly believe in putting people
            and the planet ahead of profit, with the relationships we create,
            being built on kindness, respect and empathy. We strive to bring the
            warmth and comfort that tea brings into the products we create and the
            relationships we build. To us, to shop small, represents a kindness,
            where conscious, active choices are selected to support something
            different. We believe there is a power in shopping with intention and
            that is that it represents change; it supports dreams, communities and
            rewards creativity. It can change the world.
          </p>
          <br />
          <h5 className="font-semibold">Mindfulness and Process</h5> <br />
          <p>
            If you choose for it to be, we’ve found that drinking tea can be such
            a mindful experience. We like to talk about the ritual around making
            yourself a cup of tea, this is about how you choose to spend this
            time, as well as how you might like your tea. Much like the tea type,
            this approach varies from person to person; we like to take our time,
            to set aside our phones and laptops and use this moment, for as long
            as it takes the kettle to boil and the tea to steep to reflect, to
            smell the tea and relax. These small changes in daily routines can
            help to add joyful and calm moments to your day.
          </p>
        </div>
      ),
    },
    {
      title: "Our Teas",
      image: "/whychooseus/slide_banner_09.jpg",
      description: (
        <Accordion className="w-full ourteas font-medium">
          <AccordionItem key="1" aria-label="Black Tea" title="Black Tea">
            <p className="text-xs text-justify">
              In a Black Tea, the harvested leaves undergo complete oxidation,
              resulting in leaves with a near black appearance and a rich, robust
              flavour, and dark tea. This type of tea has a strong taste and is
              often associated with the classic English Breakfast Tea.
            </p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Green Tea" title="Green Tea">
            <p className="text-xs text-justify">
              Green Teas undergo minimal oxidation, preserving the natural green
              colour and delicate taste of the newly harvested leaves. This
              process helps retain more antioxidants and results in a light,
              refreshing cup with a grassy, umami or marinal profile.
            </p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Oolong Tea" title="Oolong Tea">
            <p className="text-xs text-justify">
              An Oolong Tea is the name given to a tea that has been allowed to
              partially oxidise, while falling between a Green and Black Tea on
              the oxidation scale. For this reason, there are a vast number of
              Oolongs with a diverse range of flavours, where some are closer to a
              Green Tea and have a light subtle flavour, to others that closer
              resemble a Black Tea and have flavours that range from floral and
              fruity to creamy and toasty.
            </p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Herbal Tea" title="Herbal Tea">
            <p className="text-xs text-justify">
              A Herbal Tea, or Tisane are most often naturally caffeine free and
              are blends that are made purely from herbs, flowers, fruits, or
              other botanicals. Infusions do not include any leaves from the
              Camellia Sinensis plant and have a diverse array of flavours and
              aromas based on the specific ingredients used in the blend.
            </p>
          </AccordionItem>
          <AccordionItem key="5" aria-label="White Tea" title="White Tea">
            <p className="text-xs text-justify">
              White Tea is the least oxidised tea of all. It involves minimal
              processing, with leaves often selected as buds of very young and
              early leaves, that are left to wither and dry in natural sunlight,
              without any rolling. These teas are rich in antioxidants, near
              negligible in caffeine and have a subtle and delicate flavour, with
              a light colour and often sweet, floral aroma.
            </p>
          </AccordionItem>
          <AccordionItem key="6" aria-label="Pu-erh Tea" title="Pu-erh Tea">
            <p className="text-xs text-justify">
              Pu-erh Tea is a unique and traditional fermented tea originating
              from Yunnan, China. Known for its rich, earthy flavor and smooth,
              full-bodied taste, Pu-erh undergoes a special fermentation and aging
              process that sets it apart from other teas. This tea is made from
              the leaves of the Camellia Sinensis plant and is often categorized
              into two types: raw (sheng) and ripe (shou). Pu-erh tea is prized
              for its potential health benefits, including aiding digestion and
              promoting overall wellness, and is a favorite among tea connoisseurs
              for its complex and evolving taste profile.
            </p>
          </AccordionItem>
        </Accordion>
      ),
    },
  ];
  