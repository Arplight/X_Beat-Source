import productsData from "./data/productsData";
import { LiaStarSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Correct from "./assets/Correct.svg";
// data
import { brandsMenu, categoryMenu, sortMenu } from "./data/filterBarData";

export default function Template() {
  return (
    <>
      <br />
      {/* Headings */}
      {/* Slider Heading */}
      <h1 className="text-main">Give your favourite music a boost</h1>
      {/* Main Headings */} <br />
      <h2 className="text-main">Featured Products</h2>
      {/* Card title */}
      <h5 className="text-main">JBL Live 660NC</h5>
      {/* Footer Headings */}
      <h4 className="text-main">Policies</h4>
      {/* Final Price */}
      <h3 className="text-main">$50,000</h3>
      {/* Text */}
      <br />
      {/* Price */}
      <del className="text-muted">$70,000</del>
      <br />
      {/* Text Large */}
      <p className="text-large text-main">Original Price</p>
      <a className="text-large text-main" href="#">
        boAt Airdopes 131 Wireless In-Ear Earbuds
      </a>
      <br />
      {/* Text Small */}
      <p className="text-small text-muted">Original Price</p>
      <a className="text-small text-muted" href="#">
        boAt Airdopes 131 Wireless In-Ear Earbuds
      </a>
      <br />
      {/* buttons */}
      <br />
      {/* Single Button */}
      <button className="single-button">Single Button</button>
      <br />
      <br />
      <button className="full-button">Single Button</button>
      <br />
      {/* Tab Button */}
      <button className="tab-button">Tab Button</button>
      <br />
      {/* Top Button */}
      <button className="top-button">
        <IoIosArrowUp />
      </button>
      <br />
      {/* Form Button */}
      <button className="form-button">Login / Signup</button>
      <br />
      {/* Social Button */}
      <a href="#" className="social-button-facebook">
        Facebook
      </a>
      <br />
      <a href="#" className="social-button-google">
        Google
      </a>
      <br />
      <a href="#" className="social-button-twitter">
        Twitter
      </a>
      {/* Quantity Button */}
      <div className="quantity-button">
        <button>
          <FaMinus />
        </button>
        <span>1</span>
        <button>
          <FaPlus />
        </button>
      </div>
      {/* Close Button */}
      <button className="close-button">
        <IoMdClose className="close" />
      </button>
      <br />
      <br />
      <br />
      <br />
      {/* Badges */}
      {/* In Stock Badge */}
      <div className="in-stock">
        <img src={Correct} alt="" />
        <span>In Stock</span>
      </div>
      {/* Cart Badge */}
      <div className="cart-badge">
        <p>1</p>
      </div>
      {/* Offer Badge */}
      <div className="offer-badge">
        <p className="text-small text-main">No Cost EMI on Credit Card</p>
      </div>
      <div className="offer-badge">
        <p className="text-small text-main">Pay Later & Avail Cashback</p>
      </div>
      {/* Product Card */}
      <div className="product-card">
        <div className="card-image">
          <img src="" alt="" />
        </div>
        <div className="card-info">
          <section>
            <ul className="rating">
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
            </ul>
            <h5 className="text-main">JBL Live 660NC</h5>
            <p className="text-small text-muted">
              Bluetooth & Wired On-Ear Headphones
            </p>
          </section>
          <section>
            <div className="prices">
              <h3 className="text-main">$50,000</h3>
              <del className="text-muted">$70,000</del>
            </div>
            <button className="full-button">Add To Cart</button>
          </section>
        </div>
      </div>
      {/* empty card */}
      <div className="empty-card text-main">
        <a href="#">
          Browse All <br /> Products
          <FaArrowRightLong className="inline text-xl ml-2" />
        </a>
      </div>
      {/* Cart List */}
      <ul className="w-3/5 overflow-y-scroll max-h-[600px] bg-[#161819]">
        <li className="w-full  flex gap-12  border-b-[1px] border-[#ffffff30] py-12">
          <div className="bg-black h-52 w-1/5">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col w-4/5 gap-6 relative p-3">
            <a className="text-large text-main" href="#">
              boAt Airdopes 131 Wireless In-Ear Earbuds
            </a>
            <div className="prices">
              <h3 className="text-main">$50,000</h3>
              <del className="text-muted">$70,000</del>
            </div>
            <div className="quantity-button">
              <button>
                <FaMinus />
              </button>
              <span>1</span>
              <button>
                <FaPlus />
              </button>
            </div>
            <button className="remove-button">
              <MdOutlineRemoveShoppingCart />
            </button>
          </div>
        </li>
      </ul>
      {/* Cart Summary */}
      <div className="w-2/5 ">
        <div className=" py-6 border-b-[1px] border-[#ffffff30]">
          <h5 className="text-main mb-10">Order Summary ( 6 items )</h5>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center">
              <p className="text-large text-main mr-auto">Original Price</p>
              <h6 className="text-main">$69,248</h6>
            </li>
            <li className="flex items-center">
              <p className="text-large text-main mr-auto">Discount</p>
              <h6 className="text-[#008000]">- $69,248</h6>
            </li>
            <li className="flex items-center">
              <p className="text-large text-main  mr-auto">Delivery</p>
              <h6 className="text-[#008000]">Free</h6>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 py-6">
          <div className="flex items-center">
            <h5 className="text-main mr-auto">Total Price</h5>
            <h3 className="text-main">$50,000</h3>
          </div>
          <button className="full-button">Checkout</button>
        </div>
      </div>
      {/* Filter Board */}
      <div className="filter-board flex flex-col w-1/6 bg-[#161819] gap-8 p-6">
        <div>
          <h6 className="text-main pb-3  border-b-[1px] border-[#ffffff30]">
            Sort By
          </h6>
          <ul className="flex flex-col gap-1 pt-3">
            {sortMenu.map((item) => (
              <li key={item.id}>
                <p className="text-large text-main">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <h6 className="text-main pb-3  border-b-[1px] border-[#ffffff30]">
            Filter By
          </h6>
          <section>
            <b className="text-main text-large">Brands</b>
            <ul className="flex flex-col gap-1 py-3">
              {brandsMenu.map((item) => (
                <li key={item.id}>
                  <label
                    htmlFor={item.label}
                    className="text-large text-main flex gap-3"
                  >
                    <input type="checkbox" name={item.label} id={item.label} />
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <b className="text-main text-large ">Category</b>
            <ul className="flex flex-col gap-1 py-3">
              {categoryMenu.map((item) => (
                <li key={item.id}>
                  <label
                    htmlFor={item.label}
                    className="text-large text-main flex gap-3"
                  >
                    <input type="checkbox" name={item.label} id={item.label} />
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <b className="text-main text-large">Price</b>
            <div className="pt-3">
              <p className="text-large text-main">$19,990</p>
              <input type="range" name="price" id="price" />
            </div>
          </section>
        </div>
      </div>
      {/* Inputs */}
      <label htmlFor="name" className="field">
        <span>Username</span>
        <input type="text" id="name" name="name" />
      </label>
      <br />
      <br />
      <label htmlFor="mail" className="field">
        <span>Email</span>
        <input type="email" id="mail" name="mail" />
      </label>
      <br />
      <br />
      <label htmlFor="pass" className="field">
        <span>Password</span>
        <input type="password" id="pass" name="pass" />
      </label>
      <br />
      <br />
      <label htmlFor="passwordConfirm" className="field">
        <span>Confirm Password</span>
        <input type="password" id="passwordConfirm" name="passwordConfirm" />
      </label>
      {/* Product Summary */}
      <div className="flex flex-col w-1/2 ">
        <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6">
          <h5 className="text-main">JBL Tune 760NC</h5>
          <p className="text-large text-main mb-4 font-normal">
            Wireless Over-Ear NC Headphones
          </p>
          <div className="flex items-center">
            <ul className="rating border-r-[1px] border-[#ffffff40] pr-2 py-0.5">
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
              <li>
                <LiaStarSolid className="star" />
              </li>
            </ul>
            <p className="text-large text-muted pl-2">755 Ratings</p>
          </div>
        </div>
        <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
          <section className="flex items-center">
            <div className="prices mr-auto">
              <h3 className="text-main">$50,000</h3>
              <del className="text-muted">$70,000</del>
            </div>
            <div className="in-stock">
              <img src={Correct} alt="" />
              <span>In Stock</span>
            </div>
          </section>
          <section className="flex items-center">
            <p className="text-large text-green mr-auto">
              You save: $2,000 (25%)
            </p>
            <p className="text-small text-muted">(Inclusive of all taxes)</p>
          </section>
        </div>
        <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
          <p className="text-large text-main font-normal">
            Offers and Discounts
          </p>
          <section className="flex gap-3">
            <div className="offer-badge">
              <p className="text-small text-main">No Cost EMI on Credit Card</p>
            </div>
            <div className="offer-badge">
              <p className="text-small text-main">Pay Later & Avail Cashback</p>
            </div>
          </section>
        </div>
        <div className="py-6">
          <button className="single-button w-1/4">Add to cart</button>
        </div>
      </div>
    </>
  );
}
