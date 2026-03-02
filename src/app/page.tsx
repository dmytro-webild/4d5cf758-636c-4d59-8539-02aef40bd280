"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="grid"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="CSGO Legends"
          navItems={[
            { name: "Players", id: "team" },
            { name: "Stats", id: "metrics" },
            { name: "Highlights", id: "highlights" },
            { name: "Fan Love", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="Pro Esports Hub"
          bottomRightText="competitive@csgolegeands.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Two Legends. One Vision. Counter-Strike Mastery."
          description="Meet Mykola Chuchuka and Vitaliy SuperKot – the dynamic duo dominating competitive CS:GO. Experience raw skill, lightning-fast reflexes, and unmatched strategic gameplay."
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg", alt: "Mykola Chuchuka" },
            { src: "http://img.b2bpic.net/free-photo/pro-gamer-broadcasting-gameplay-front-internet-audience_482257-77071.jpg", alt: "Vitaliy SuperKot" }
          ]}
          avatarText="Pro Players | Multiple Tournament Wins"
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Watch Highlights", href: "#highlights" },
            { text: "Join Community", href: "#testimonials" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section featuring Mykola Chuchuka and Vitaliy SuperKot"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          members={[
            {
              id: "1",              name: "Mykola Chuchuka",              role: "Rifler | IGL",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg",              imageAlt: "Mykola Chuchuka professional portrait"
            },
            {
              id: "2",              name: "Vitaliy SuperKot",              role: "AWP Specialist",              imageSrc: "http://img.b2bpic.net/free-photo/pro-gamer-broadcasting-gameplay-front-internet-audience_482257-77071.jpg",              imageAlt: "Vitaliy SuperKot professional portrait"
            }
          ]}
          title="Meet the Legends"
          description="Two of the most skilled Counter-Strike players in the competitive scene, each bringing unique expertise and championship mentality to every match."
          tag="Players"
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          useInvertedBackground={true}
          ariaLabel="Team members section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          metrics={[
            { id: "1", value: "47.2%", description: "Mykola's Headshot Rate" },
            { id: "2", value: "1.28", description: "Vitaliy's K/D Ratio" },
            { id: "3", value: "8+", description: "Major Tournament Titles" },
            { id: "4", value: "2.1M+", description: "Combined Twitch Followers" }
          ]}
          title="Dominating Stats"
          description="Raw numbers that showcase years of dedication, precision, and competitive excellence."
          tag="Performance"
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          useInvertedBackground={false}
          ariaLabel="Performance metrics section"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          features={[
            {
              id: "01",              title: "Perfect Spray Control",              description: "Mykola's legendary spray patterns are flawless. Watch as he dominates rounds with unmatched recoil control and positioning.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-soldier-camouflage-holding-gun-black-wall_140725-95756.jpg",              imageAlt: "Spray control demonstration"
            },
            {
              id: "02",              title: "Clutch Moments",              description: "Vitaliy lives for the pressure. His ability to turn 1v5 situations into victories has become the stuff of legend.",              imageSrc: "http://img.b2bpic.net/free-photo/joyous-gamer-throwing-fists-air-from-excitement-after-winning-sf-game_482257-112451.jpg",              imageAlt: "Clutch gameplay moment"
            },
            {
              id: "03",              title: "Team Synergy",              description: "Together, they've mastered the art of coordination and communication, reading the enemy like a book.",              imageSrc: "/placeholders/placeholder1.webp",              imageAlt: "Team coordination in action"
            }
          ]}
          title="Signature Skills"
          description="What sets these two apart is not just raw talent – it's their mastery of game mechanics and mental fortitude under pressure."
          tag="Gameplay"
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          useInvertedBackground={true}
          ariaLabel="Signature skills section"
        />
      </div>

      <div id="highlights" data-section="highlights">
        <ProductCardOne
          products={[
            {
              id: "1",              name: "ESL Pro League Victory",              price: "2023",              imageSrc: "http://img.b2bpic.net/free-vector/two-team-e-sports-athlete-competition-esports-competition_1150-46697.jpg",              imageAlt: "ESL Pro League Championship"
            },
            {
              id: "2",              name: "Regional Championship Run",              price: "2024",              imageSrc: "http://img.b2bpic.net/free-photo/joyous-gamer-throwing-fists-air-from-excitement-after-winning-sf-game_482257-112451.jpg",              imageAlt: "Regional tournament highlight"
            },
            {
              id: "3",              name: "Comeback Victory",              price: "2024",              imageSrc: "http://img.b2bpic.net/free-photo/joyous-gamer-throwing-fists-air-from-excitement-after-winning-sf-game_482257-112451.jpg",              imageAlt: "Epic comeback moment"
            }
          ]}
          title="Tournament Highlights"
          description="Epic moments from the biggest stages in competitive Counter-Strike. Watch as these legends cement their legacy."
          tag="Moments"
          tagAnimation="slide-up"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          ariaLabel="Tournament highlights section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          testimonials={[
            {
              id: "1",              name: "Alex Stream",              role: "Esports Journalist",              testimonial: "Watching Mykola and Vitaliy play is like watching art in motion. Their precision and game sense are unmatched. Absolute legends.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg",              imageAlt: "Alex Stream"
            },
            {
              id: "2",              name: "Jordan Pro",              role: "Competing Player",              testimonial: "These two are the benchmark for excellence in CS:GO. Their work ethic and dedication inspire me every single day. Respect.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg",              imageAlt: "Jordan Pro"
            },
            {
              id: "3",              name: "Luna Gaming",              role: "Content Creator",              testimonial: "The chemistry between Mykola and Vitaliy is incredible. They make you believe in teamwork and the power of dedication to your craft.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg",              imageAlt: "Luna Gaming"
            },
            {
              id: "4",              name: "Phoenix Esports",              role: "Team Manager",              testimonial: "Having them in the competitive scene elevates everyone's game. They're not just players – they're inspirations and ambassadors for the game.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg",              imageAlt: "Phoenix Esports"
            }
          ]}
          title="From the Community"
          description="Hear what players, fans, and industry experts have to say about these two Counter-Strike icons."
          tag="Fan Love"
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with the Legends"
          description="Subscribe to get exclusive behind-the-scenes content, tournament updates, strategy breakdowns, and more from Mykola and Vitaliy."
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419467.jpg"
          imageAlt="Gaming setup"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe Now"
          termsText="We respect your inbox. Unsubscribe anytime. No spam, just pure esports content."
          ariaLabel="Newsletter subscription section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419467.jpg"
          imageAlt="Gaming background"
          columns={[
            {
              title: "Players",              items: [
                { label: "Mykola Chuchuka", href: "#team" },
                { label: "Vitaliy SuperKot", href: "#team" },
                { label: "Stats & Records", href: "#metrics" }
              ]
            },
            {
              title: "Content",              items: [
                { label: "Highlights", href: "#highlights" },
                { label: "Tournaments", href: "#highlights" },
                { label: "Community", href: "#testimonials" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Twitch", href: "https://www.twitch.tv" },
                { label: "YouTube", href: "https://www.youtube.com" },
                { label: "Contact", href: "mailto:competitive@csgolegeneds.com" }
              ]
            }
          ]}
          logoText="CSGO Legends"
          copyrightText="© 2025 | CSGO Legends | Mykola Chuchuka & Vitaliy SuperKot"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}