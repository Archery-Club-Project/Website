import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, url, image }) => {
  const siteTitle = 'Archery Club of Uva | Uva Archery Sri Lanka';
  const siteDescription = 'Archery Club of Uva (Uva Archery) promotes Sri Lankan archery excellence through training, competitions, youth development and national representation in Sri Lanka.';
  const siteKeywords = 'uva archery, archery, srilanka archery, uvaarchery, srilankan archery, sri lanka archery, uva';
  const siteUrl = 'https://www.uvaarchery.lk/';
  const siteImage = 'https://www.uvaarchery.lk/logo.png';

  const currentTitle = title ? `${title} | Archery Club of Uva` : siteTitle;
  const currentDescription = description || siteDescription;
  const currentKeywords = keywords || siteKeywords;
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const currentImage = image ? `${siteUrl}${image}` : siteImage;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={currentKeywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={currentImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={currentImage} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
