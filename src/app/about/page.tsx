"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function AboutPage() {
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
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" },
          ]}
          button={{
            text: "Call Now",
            href: "tel:(815) 722-9514",
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="about-mission" data-section="about-mission" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "About Sammy's Tire Service",
            },
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Call Us",
              href: "tel:(815) 722-9514",
            },
            {
              text: "Get Directions",
              href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
            },
          ]}
        />
      </div>

      <div id="about-story" data-section="about-story" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our Story</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sammy's Tire Service has been serving the Joliet area for over 15 years. What started as a small family operation has grown into the trusted tire shop locals recommend to their friends and family. Our commitment to fair pricing, professional service, and customer satisfaction has made us the go-to tire shop in Joliet.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              To provide affordable, reliable tire service to the Joliet community with professional expertise and honest pricing. We believe in treating every customer like family and delivering exceptional service every time.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-cta font-bold text-xl">•</span>
                <span className="text-lg text-foreground/80">Professional expertise in tire service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-cta font-bold text-xl">•</span>
                <span className="text-lg text-foreground/80">Honest, transparent pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-cta font-bold text-xl">•</span>
                <span className="text-lg text-foreground/80">Fast service without compromising quality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-cta font-bold text-xl">•</span>
                <span className="text-lg text-foreground/80">Commitment to the local community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-cta font-bold text-xl">•</span>
                <span className="text-lg text-foreground/80">Family-owned and operated</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="about-stats" data-section="about-stats" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <MetricCardSeven
          metrics={[
            {
              id: "years",
              value: "15+",
              title: "Years of Service",
              items: [
                "Serving Joliet since 2010",
                "Trusted by thousands of locals",
                "Family-owned operation",
              ],
            },
            {
              id: "expertise",
              value: "ASE",
              title: "Certified Mechanics",
              items: [
                "Professional expertise",
                "Latest equipment",
                "Continuous training",
              ],
            },
            {
              id: "satisfaction",
              value: "100%",
              title: "Customer Satisfaction",
              items: [
                "5-star reviews",
                "Loyal customer base",
                "Transparent service",
              ],
            },
            {
              id: "community",
              value: "Local",
              title: "Community Focused",
              items: [
                "Joliet-based shop",
                "Support local business",
                "Fair pricing guarantee",
              ],
            },
          ]}
          title="Why Trust Sammy's"
          description="Experience and dedication to your satisfaction"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          uniformGridCustomHeightClasses="min-h-80 2xl:min-h-90"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/standing-jacket-professional-repairman-arm_1134-796.jpg"
          imageAlt="Professional tire service background"
          logoText="Sammy's Tire Service"
          copyrightText="© 2025 Sammy's Tire Service. All rights reserved. Family-owned and operated in Joliet, IL."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Tire Installation",
                  href: "/services",
                },
                {
                  label: "Tire Repair",
                  href: "/services",
                },
                {
                  label: "Wheel Balancing",
                  href: "/services",
                },
                {
                  label: "New & Used Tires",
                  href: "/services",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
                {
                  label: "Hours & Location",
                  href: "/",
                },
              ],
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Call (815) 722-9514",
                  href: "tel:(815) 722-9514",
                },
                {
                  label: "663 E Jackson St, Joliet, IL",
                  href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
                },
                {
                  label: "Mon-Fri 8am-6pm",
                  href: "/",
                },
                {
                  label: "Sat 8am-5pm",
                  href: "/",
                },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}