"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function ContactPage() {
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

      <div id="contact-form" data-section="contact-form" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <ContactCenter
          tag="Quick Service"
          title="Ready for Fast Tire Service?"
          description="Call us today or visit our shop. Same-day service available for most tire repairs. Professional mechanics ready to help."
          background={{
            variant: "radial-gradient",
          }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get In Touch"
          termsText="We respect your privacy and won't spam you."
        />
      </div>

      <div id="contact-info" data-section="contact-info" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Address</h3>
              <p className="text-lg text-foreground/80">
                663 E Jackson St<br />
                Joliet, IL 60432
              </p>
              <a
                href="https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-cta font-semibold hover:underline"
              >
                Get Directions →
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Phone</h3>
              <p className="text-lg text-foreground/80">
                <a
                  href="tel:(815) 722-9514"
                  className="text-primary-cta font-semibold hover:underline"
                >
                  (815) 722-9514
                </a>
              </p>
              <p className="text-sm text-foreground/60">
                Call for quotes or emergency service
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Hours</h3>
              <p className="text-lg text-foreground/80">
                Monday–Friday<br />
                <span className="font-semibold">8:00 AM – 6:00 PM</span>
              </p>
              <p className="text-lg text-foreground/80">
                Saturday<br />
                <span className="font-semibold">8:00 AM – 5:00 PM</span>
              </p>
              <p className="text-sm text-foreground/60">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact-location" data-section="contact-location" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",
              content: "Visit Us Today",
            },
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Get Directions",
              href: "https://maps.google.com/?q=663+E+Jackson+St,+Joliet,+IL+60432",
            },
            {
              text: "Call Now",
              href: "tel:(815) 722-9514",
            },
          ]}
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