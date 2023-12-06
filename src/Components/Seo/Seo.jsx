import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
export default function Seo({ currentPage }) {
  return (
    <Helmet>
      {/* Title */}
      <title>X-Beat | {currentPage}</title>
      {/* Meta */}
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Explore a wide range of headphones and speakers. Find the best deals on quality audio products for music lovers."
      />
      <meta
        name="keywords"
        content="headphones, speakers, audio products, earphones, sound systems"
      />
      <meta name="author" content="X-Beat" />

      {/* Open graph */}
      <meta
        property="og:title"
        content="Headphones & Speakers Store - Best Deals on Audio Products"
      />
      <meta
        property="og:description"
        content="Explore a wide range of headphones and speakers. Find the best deals on quality audio products for music lovers."
      />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="X-Beat" />

      {/* Twitter */}
      {/* <meta name="twitter:card" content="" /> */}
      <meta
        name="twitter:title"
        content="Headphones & Speakers Store - Best Deals on Audio Products"
      />
      <meta
        name="twitter:description"
        content="Explore a wide range of headphones and speakers. Find the best deals on quality audio products for music lovers."
      />
      {/* <meta name="twitter:image" content="" /> */}
    </Helmet>
  );
}
Seo.propTypes = {
  currentPage: PropTypes.string,
};
