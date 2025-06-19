import Image from "next/image";
import styles from "./about_us.module.css";

const OurPartners = () => {
  const partners = [
    { name: "Alphabet", logo: "/business_partners/alphabet-logo.png" },
    { name: "Amazon", logo: "/business_partners/amazon_logo.png" },
    { name: "CBC", logo: "/business_partners/CBC_Logo_White.png" },
    { name: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
    { name: "NYU", logo: "/business_partners/nyu-logo.png" },
    { name: "Queens University", logo: "/business_partners/QueensLogo_white.png" },
    { name: "Samsung", logo: "/business_partners/samsung-logo.png" },
    { name: "Sodexo", logo: "/business_partners/sodexo-logo.png" },
  ];

  return (
    <div className={styles.partnerGrid}>
      {partners.map((partner) => (
        <div key={partner.name} className={styles.partnerItem}>
          <Image
            src={partner.logo}
            alt={`${partner.name} Logo`}
            width={120}
            height={60}
            style={{ objectFit: "contain" }}
          />
          <p>{partner.name}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPartners;
