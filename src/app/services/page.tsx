"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function ServicesPage() {
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

      <div id="services-overview" data-section="services-overview">
        <FeatureCardMedia
          title="Our Services"
          description="Complete tire and automotive solutions for your vehicle's needs"
          tag="What We Offer"
          features={[
            {
              id: "installation",
              title: "Tire Installation",
              description:
                "Professional tire installation with precision wheel balancing. Quick service to get you back on the road.",
              tag: "Installation",
              imageSrc:
                "http://img.b2bpic.net/free-photo/car-mechanic-changing-wheels-car_1303-27459.jpg",
              imageAlt: "Professional tire installation process",
              buttons: [
                {
                  text: "Request Service",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
            {
              id: "repair",
              title: "Tire Repair & Patching",
              description:
                "Expert tire repair for punctures and damage. Same-day service available for most repairs.",
              tag: "Repair",
              imageSrc:
                "http://img.b2bpic.net/free-photo/technician-is-repairing-car-flat-tire_1150-6261.jpg",
              imageAlt: "Tire repair and patching service",
              buttons: [
                {
                  text: "Request Service",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
            {
              id: "balancing",
              title: "Wheel Balancing",
              description:
                "Computer-assisted wheel balancing for smooth rides and even tire wear. Extends tire life significantly.",
              tag: "Balancing",
              imageSrc:
                "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11797.jpg",
              imageAlt: "Wheel balancing equipment auto shop",
              buttons: [
                {
                  text: "Request Service",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
            {
              id: "flat-tire",
              title: "Flat Tire Emergency Fix",
              description:
                "Stuck with a flat tire? We fix it fast. Walk-ins welcome, emergency service available.",
              tag: "Emergency",
              imageSrc:
                "http://img.b2bpic.net/free-photo/auto-mechanic-checking-car_1303-14037.jpg",
              imageAlt: "Emergency flat tire repair",
              buttons: [
                {
                  text: "Call Now",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
            {
              id: "rotation",
              title: "Tire Rotation",
              description:
                "Regular tire rotation maintains even wear and maximizes tire lifespan. Affordable maintenance service.",
              tag: "Maintenance",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-man-buying-car-car-showroom_1303-15648.jpg",
              imageAlt: "Tire rotation maintenance service",
              buttons: [
                {
                  text: "Request Service",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
            {
              id: "new-used-tires",
              title: "New & Used Tires",
              description:
                "Large selection of new and quality used tires. Competitive pricing on all major brands.",
              tag: "Sales",
              imageSrc:
                "http://img.b2bpic.net/free-photo/business-man-looking-car-car-salon_1303-23591.jpg",
              imageAlt: "Tire shop product selection display",
              buttons: [
                {
                  text: "Browse Tires",
                  href: "tel:(815) 722-9514",
                },
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
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

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/standing-jacket-professional-repairman-arm_1134-796.jpg?_wi=2"
          imageAlt="Professional tire service background"
          logoText="Sammy's Tire Service"
          copyrightText="© 2025 Sammy's Tire Service. All rights reserved. Family-owned and operated in Joliet, IL."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}