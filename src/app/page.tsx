"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitTestimonial from "@/components/sections/hero/HeroSplitTestimonial";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Zap } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "About", id: "/about" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Tire Installation", href: "/services" },
        { label: "Tire Repair", href: "/services" },
        { label: "Wheel Balancing", href: "/services" },
        { label: "New & Used Tires", href: "/services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Hours & Location", href: "/" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Call (815) 722-9514", href: "tel:(815) 722-9514" },
        {
          label: "663 E Jackson St, Joliet, IL",
          href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
        },
        { label: "Mon-Fri 8am-6pm", href: "/" },
        { label: "Sat 8am-5pm", href: "/" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSizeMediumTitles"
      background="blurBottom"
      cardStyle="solid"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Sammy's Tire Service"
          navItems={navItems}
          button={{
            text: "Call Now",
            href: "tel:(815) 722-9514",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Fast & Affordable Tire Service in Joliet"
          description="Tire repair, installation, and balancing you can trust. Same-day service for most tire repairs. Professional mechanics with years of automotive experience."
          tag="Local Tire Shop"
          tagIcon={Zap}
          background={{ variant: "glowing-orb" }}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/car-mechanic-trying-set-socket-auto-wheel_23-2147897836.jpg"
          imageAlt="Professional tire service in action"
          testimonials={[
            {
              name: "Mike Thompson",
              handle: "Local Driver",
              testimonial:
                "Best tire service in Joliet! Quick, professional, and fair pricing. Highly recommend.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
              imageAlt: "Mike Thompson",
            },
            {
              name: "Jennifer Martinez",
              handle: "Business Owner",
              testimonial:
                "Sammy's has been servicing our fleet vehicles for 3 years. Never disappointed.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-yellow-jacket_23-2149020781.jpg",
              imageAlt: "Jennifer Martinez",
            },
            {
              name: "David Kim",
              handle: "Regular Customer",
              testimonial:
                "Fixed my flat tire in 30 minutes. Great staff and reasonable prices!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiling-hispanic-female-executive-wearing-eyeglasses-standing-studio_662251-664.jpg",
              imageAlt: "David Kim",
            },
            {
              name: "Sarah Johnson",
              handle: "First-Time Customer",
              testimonial:
                "Friendly service and they explained everything clearly. Will definitely return.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-positive-young-woman-wearing-blouse_1262-2298.jpg",
              imageAlt: "Sarah Johnson",
            },
          ]}
          buttons={[
            {
              text: "Call Now",
              href: "tel:(815) 722-9514",
            },
            {
              text: "Get Directions",
              href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
            },
          ]}
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <MetricCardSeven
          title="Why Choose Sammy's?"
          description="Trusted by Joliet residents for affordable, reliable tire service"
          tag="Local Expertise"
          metrics={[
            {
              id: "fast-service",
              value: "30min",
              title: "Average Service Time",
              items: [
                "Same-day repairs",
                "Minimal wait time",
                "Walk-ins welcome",
              ],
            },
            {
              id: "affordable-pricing",
              value: "Best",
              title: "Competitive Pricing",
              items: [
                "Transparent pricing",
                "No hidden fees",
                "Price match available",
              ],
            },
            {
              id: "experienced-staff",
              value: "15+yrs",
              title: "Professional Mechanics",
              items: [
                "ASE certified",
                "Expert service",
                "Trusted locally",
              ],
            },
            {
              id: "satisfaction",
              value: "100%",
              title: "Customer Satisfaction",
              items: [
                "5-star reviews",
                "Loyal customers",
                "Family owned",
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          uniformGridCustomHeightClasses="min-h-80 2xl:min-h-90"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real reviews from satisfied Joliet residents and business owners"
          tag="Customer Reviews"
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Mike Thompson",
              handle: "@mikethompson",
              testimonial:
                "Best tire service in Joliet! Quick, professional, and fair pricing. Sammy's fixed my flat tire in less than 30 minutes.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
              imageAlt: "Mike Thompson",
            },
            {
              id: "2",
              name: "Jennifer Martinez",
              handle: "Business Owner",
              testimonial:
                "Sammy's has been servicing our fleet vehicles for 3 years. Never disappointed. Reliable service, fair pricing, and great customer care.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-yellow-jacket_23-2149020781.jpg",
              imageAlt: "Jennifer Martinez",
            },
            {
              id: "3",
              name: "David Kim",
              handle: "@davidkim87",
              testimonial:
                "Fixed my flat tire in 30 minutes. Great staff, reasonable prices, and they explained everything clearly. Highly recommend!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/smiling-hispanic-female-executive-wearing-eyeglasses-standing-studio_662251-664.jpg",
              imageAlt: "David Kim",
            },
            {
              id: "4",
              name: "Sarah Johnson",
              handle: "@sarahjohnson",
              testimonial:
                "Friendly service from start to finish. They explained everything and didn't try to upsell me unnecessary services. Will definitely return.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-positive-young-woman-wearing-blouse_1262-2298.jpg",
              imageAlt: "Sarah Johnson",
            },
            {
              id: "5",
              name: "Robert Green",
              handle: "@robertgreen",
              testimonial:
                "Local shop with honest pricing and real expertise. My go-to place for all tire needs. Keep supporting local businesses!",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/positive-customer-approving-new-offer_1262-17151.jpg",
              imageAlt: "Robert Green",
            },
            {
              id: "6",
              name: "Angela Davis",
              handle: "@angeladavis",
              testimonial:
                "Emergency flat tire at 5pm on a Friday. Sammy's got me in and out in 20 minutes. Lifesaver! Best tire shop in Joliet.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-beautiful-woman-with-long-hair-outside-posing-portrait-close-up_1321-4608.jpg",
              imageAlt: "Angela Davis",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCenter
          tag="Quick Service"
          title="Ready for Fast Tire Service?"
          description="Call us today or visit our shop. Same-day service available for most tire repairs. Professional mechanics ready to help."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get In Touch"
          termsText="We respect your privacy and won't spam you."
        />
      </div>

      <div id="map-location" data-section="map-location">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Visit Us at" },
            { type: "text", content: "663 E Jackson St, Joliet, IL 60432" },
          ]}
          buttons={[
            {
              text: "Get Directions",
              href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
            },
            {
              text: "Call (815) 722-9514",
              href: "tel:(815) 722-9514",
            },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/standing-jacket-professional-repairman-arm_1134-796.jpg"
          imageAlt="Professional tire service background"
          logoText="Sammy's Tire Service"
          copyrightText="© 2025 Sammy's Tire Service. All rights reserved. Family-owned and operated in Joliet, IL."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}