'use client';

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { FaStore, FaBriefcase, FaHospital, FaWhatsapp, FaPhone, FaEnvelope, FaWifi, FaShieldAlt, FaUsers, FaBuilding, FaCar, FaCoffee, FaCheckCircle, FaStar, FaPlay, FaDownload, FaImages, FaTimes } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'commercial' | 'admin' | 'clinic'>('commercial');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const whatsappNumber = "201000000000"; // استبدل برقم الواتساب الفعلي
  const whatsappMessage = encodeURIComponent("مرحباً، أريد الاستفسار عن مشروع Jaya Mark");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const unitTypes = {
    commercial: {
      name: 'تجاري',
      area: '105 - 225 متر',
      price: '10 مليون جنيه',
      icon: <FaStore />
    },
    admin: {
      name: 'إداري',
      area: '63 - 78 متر',
      price: '3.5 مليون جنيه',
      icon: <FaBriefcase />
    },
    clinic: {
      name: 'طبي',
      area: '63 - 78 متر',
      price: '3.5 مليون جنيه',
      icon: <FaHospital />
    }
  };

  return (
    <div className={styles.container}>
      {/* Header / Navigation */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image
            src="/logo.webp"
            alt="Jaya Mark Logo"
            width={120}
            height={60}
            priority
            className={styles.logoImg}
          />
          <nav className={styles.nav}>
            <a href="#video">الفيديو</a>
            <a href="#units">الوحدات</a>
            <a href="#features">المميزات</a>
            <a href="#pricing">الأسعار</a>
            <a href="#gallery">المعرض</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <video 
          className={styles.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/jaya mark/render/001.jpg"
        >
          <source src="https://res.cloudinary.com/dmt7nqvc0/video/upload/q_auto,f_auto/v1761081436/JaYa_Mark_1_1_vh9e2u.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Jaya Mark</h1>
            <p className={styles.heroSubtitle}>استثمر في مستقبلك مع أفضل الوحدات التجارية والإدارية والطبية</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25%</span>
                <span className={styles.statLabel}>خصم كاش</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5%</span>
                <span className={styles.statLabel}>مقدم فقط</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3.5م</span>
                <span className={styles.statLabel}>متوسط السعر</span>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <FaWhatsapp className={styles.whatsappIcon} />
              احجز وحدتك الآن عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection} id="video">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>شاهد المشروع بتقنية 3D</h2>
          <p className={styles.sectionSubtitle}>جولة افتراضية شاملة توضح كل تفاصيل المشروع</p>
          <div className={styles.videoWrapper}>
            <video 
              className={styles.video}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/jaya mark/render/003.jpg"
            >
              <source src="https://res.cloudinary.com/dmt7nqvc0/video/upload/q_auto,f_auto/v1761082054/jaya_mark_video_3d_dfcv40.mp4" type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو
            </video>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className={styles.unitsSection} id="units">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>اختر الوحدة المناسبة لك</h2>
          <p className={styles.sectionSubtitle}>مكاتب بمساحات مختلفة تناسب احتياجك</p>
          
          <div className={styles.unitTabs}>
            {Object.entries(unitTypes).map(([key, unit]) => (
              <button
                key={key}
                className={`${styles.unitTab} ${activeTab === key ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(key as any)}
              >
                <span className={styles.unitIcon}>{unit.icon}</span>
                <span>{unit.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.unitDetails}>
            <div className={styles.unitCard}>
              <h3>{unitTypes[activeTab].name}</h3>
              <div className={styles.unitInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>المساحة</span>
                  <span className={styles.infoValue}>{unitTypes[activeTab].area}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>السعر</span>
                  <span className={styles.infoValue}>{unitTypes[activeTab].price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>مميزات الوحدات دوناً عن سواها</h2>
          <p className={styles.sectionSubtitle}>ليه تشتري الوحدات دي؟</p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaWifi /></div>
              <h3>إنترنت سريع 24 ساعة</h3>
              <p>اتصال دائم بسرعة عالية لضمان استمرارية عملك</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaShieldAlt /></div>
              <h3>نظام أمان عالي</h3>
              <p>أمن وحراسة، نظام دخول إلكتروني وكاميرات مراقبة</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaUsers /></div>
              <h3>غرف اجتماعات جاهزة</h3>
              <p>قاعات اجتماعات مجهزة بأحدث التقنيات</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaBuilding /></div>
              <h3>نظام مبنى ذكي</h3>
              <p>نظام مبنى ذكي متكامل لراحتك</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaCar /></div>
              <h3>جراج خاص ومواقف</h3>
              <p>مواقف سيارات للموظفين والعملاء</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><FaCoffee /></div>
              <h3>مطاعم وكافيهات</h3>
              <p>من الآخر أنت حواليك كل اللي محتاجه</p>
            </div>
          </div>

          <div className={styles.featureHighlight}>
            <h3>يعني كل يوم طاقة أكبر وإنجاز أكتر <IoRocketSharp style={{display: 'inline'}} /></h3>
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className={styles.whyBuySection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>ضمان استثمارك</h2>
          <div className={styles.guaranteeGrid}>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}><FaCheckCircle /></div>
              <h3>موقع استراتيجي</h3>
              <p>في قلب المنطقة التجارية</p>
            </div>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}><FaCheckCircle /></div>
              <h3>عائد استثماري مضمون</h3>
              <p>استثمار آمن ومربح</p>
            </div>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}><FaCheckCircle /></div>
              <h3>جودة بناء عالية</h3>
              <p>تشطيبات فاخرة ومواد عالية الجودة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>سعر الوحدات وأنظمة التقسيط المتاحة</h2>
          
          <div className={styles.pricingHighlight}>
            <h3 className={styles.pricingTitle}>والمفاجأة... إن كل ده بحوالي 3.5 مليون جنيه!</h3>
          </div>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingBadge}>الأفضل</div>
              <h3>الدفع كاش</h3>
              <div className={styles.pricingDiscount}>
                <span className={styles.discountPercent}>25%</span>
                <span className={styles.discountLabel}>خصم</span>
              </div>
              <p className={styles.pricingDesc}>خصم يصل لـ 25% على الدفع الكامل</p>
            </div>

            <div className={styles.pricingCard}>
              <h3>التقسيط</h3>
              <div className={styles.pricingDiscount}>
                <span className={styles.discountPercent}>10%</span>
                <span className={styles.discountLabel}>خصم</span>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✓ مقدم 5% فقط من سعر الوحدة</li>
                <li>✓ خصم حتى 10% من سعر الوحدة</li>
                <li>✓ أنظمة سداد مرنة</li>
                <li>✓ الاستلام من 9 شهور لحد 3 سنين</li>
              </ul>
            </div>
          </div>

          <div className={styles.pricingNote}>
            <p>مفيش أسهل من كدا! 🎉</p>
          </div>

          <div className={styles.ctaCenter}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButtonLarge}>
              <FaWhatsapp className={styles.whatsappIcon} />
              استفسر عن أنظمة السداد عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>معرض صور المشروع</h2>
          <p className={styles.sectionSubtitle}>شاهد التصميمات الواقعية للمشروع</p>
          
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085410/001_ecpdeu.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085410/001_ecpdeu.jpg" alt="Jaya Mark Render 1" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761084599/003_pdtryr.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761084599/003_pdtryr.jpg" alt="Jaya Mark Render 2" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761084503/004_rj4eey.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761084503/004_rj4eey.jpg" alt="Jaya Mark Render 3" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085423/10_m4lcbe.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085423/10_m4lcbe.jpg" alt="Jaya Mark Render 4" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761084584/11_Batch_Night_View01a_avnw3r.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761084584/11_Batch_Night_View01a_avnw3r.jpg" alt="Jaya Mark Night View 1" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085176/11_Batch_Night_View02a_dn6imy.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085176/11_Batch_Night_View02a_dn6imy.jpg" alt="Jaya Mark Night View 2" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085297/12_offks7.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085297/12_offks7.jpg" alt="Jaya Mark Render 5" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085442/C6_copy_fvduxa.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085442/C6_copy_fvduxa.jpg" alt="Jaya Mark Render 6" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085507/N2_y7zuzr.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085507/N2_y7zuzr.jpg" alt="Jaya Mark Night 2" width={800} height={600} className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem} onClick={() => setSelectedImage("https://res.cloudinary.com/dmt7nqvc0/image/upload/v1761085532/N61_copy_dcsww5.jpg")}>
              <Image src="https://res.cloudinary.com/dmt7nqvc0/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1761085532/N61_copy_dcsww5.jpg" alt="Jaya Mark Night 6" width={800} height={600} className={styles.galleryImage} />
            </div>
          </div>

          <div className={styles.ctaCenter}>
            <a href="https://drive.google.com/uc?export=download&id=1OyJrMaLSiTXwpm6f8_tYjwwmrAe0xuM_" target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
              <FaDownload className={styles.downloadIcon} />
              حمل البروشور الكامل PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>تواصل معنا الآن</h2>
          <p className={styles.sectionSubtitle}>فريقنا جاهز للرد على استفساراتك</p>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><FaWhatsapp /></div>
              <h3>واتساب</h3>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                تواصل عبر واتساب
              </a>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><FaPhone /></div>
              <h3>اتصل بنا</h3>
              <p>+20 100 000 0000</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><FaEnvelope /></div>
              <h3>البريد الإلكتروني</h3>
              <p>info@jayamark.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image
              src="/logo.webp"
              alt="Jaya Mark Logo"
              width={100}
              height={50}
            />
            <p>استثمر في مستقبلك</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#units">الوحدات</a>
            <a href="#features">المميزات</a>
            <a href="#pricing">الأسعار</a>
            <a href="#contact">تواصل معنا</a>
          </div>
          <div className={styles.footerCopyright}>
            <p>© 2024 Jaya Mark. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.floatingWhatsapp}
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp className={styles.whatsappIconFloat} />
      </a>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Jaya Mark" 
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
