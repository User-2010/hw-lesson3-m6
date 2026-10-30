import React from 'react';
import s from './Footer.module.scss';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      {/* Черный блок подписки */}
      <div className="container">
        <div className={s.subscribeBox}>
          <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className={s.subscribeForm}>
            <div className={s.inputWrapper}>
              <MdOutlineEmail className={s.emailIcon} />
              <input type="email" placeholder="Enter your email address" />
            </div>
            <button className={s.subscribeBtn}>Subscribe to Newsletter</button>
          </div>
        </div>
      </div>

      {/* Основная часть футера */}
      <div className={s.mainFooter}>
        <div className={`container ${s.footerContainer}`}>
          {/* Левая колонка: Лого, описание, соцсети */}
          <div className={s.colBrand}>
            <h3>SHOP.CO</h3>
            <p>
              We have clothes that suits your style and which you’re proud to wear. From women to men.
            </p>
            <div className={s.socials}>
              <a href="#" className={s.socialIcon}><FaTwitter /></a>
              <a href="#" className={s.socialIcon}><FaFacebookF /></a>
              <a href="#" className={s.socialIcon}><FaInstagram /></a>
              <a href="#" className={s.socialIcon}><FaGithub /></a>
            </div>
          </div>

          {/* Колонка: COMPANY */}
          <div className={s.colLinks}>
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          {/* Колонка: HELP */}
          <div className={s.colLinks}>
            <h4>HELP</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Колонка: FAQ */}
          <div className={s.colLinks}>
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          {/* Колонка: RESOURCES */}
          <div className={s.colLinks}>
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Нижняя полоса: Копирайт и карты */}
        <div className={`container ${s.bottomBar}`}>
          <p>Shopco © 2000-2023, All Rights Reserved</p>
          <div className={s.paymentCards}>
            <span className={s.card}>VISA</span>
            <span className={s.card}>Mastercard</span>
            <span className={s.card}>PayPal</span>
            <span className={s.card}>ApplePay</span>
            <span className={s.card}>GooglePay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};