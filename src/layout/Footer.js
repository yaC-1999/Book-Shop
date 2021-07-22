import React from 'react';
import '../asset/css/footer/footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <MDBFooter backbackgroundColor='light' className='text-end text-lg-left '>
            <div className='text-center p-3 social-icon red-div' ></div>

            <MDBContainer className="p-4">
                <MDBRow >
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0 mdb-col ps-5 pb-3'>
                        <h5 className='text-uppercase mb-1'>درباره بوکا</h5>
                        <p>
                            در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت کوتاهی کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد. زمانیست که می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد و بر روی عکس‌ها و حرف‌های دوستان نظر داد. زمانیست که می‌توان وارد این فروشگاه شد، کتابی سفارش داد و در فاصله‌ای کوتاه آن را تحویل گرفت. حال دیگر این نوای موسیقی و عطر چای شماست که به فروشگاه کتاب ما حال و هوایی دیگر می‌دهد.
                        </p>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0 pe-5 pb-3'>
                        <h5 className='text-uppercase mb-1'>راهنمای خرید</h5>

                        <ul className='list-unstyled p-0 mb-0'>
                            <li>
                                <a href='#!' className='text-dark'>
                                    ثبت سفارش
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    شرایط ارسال سفارش
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    شیوه پرداخت
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-dark'>
                                    بازگرداندن سفارشات
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0 pb-3'>
                        <h5 className='text-uppercase mb-1'>تماس با ما</h5>
                        <ul className='list-unstyled p-0'>
                            <li>
                                <MDBIcon fas icon="map-marker-alt" />
                                <span className= "p-1">همین دور و برا</span>
                            </li>
                            <li>
                                <MDBIcon fas icon="phone" />
                                <span className= "p-1">021-12345678</span>
                            </li>
                            <li>
                                <MDBIcon fas icon="envelope" />
                                <span className= "p-1">info@booka.com</span>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className='text-center p-3 social-icon red-div2' >
                <a href="https://www.instagram.com" target="_blank">
                    <MDBIcon icon="instagram fa-2x " color="white" />
                </a>
                <a href="https://www.telegram.com" target="_blank">
                    <MDBIcon fab icon="telegram-plane fa-2x" color="white" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <MDBIcon icon="facebook-f fa-2x " color="white" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <MDBIcon icon="twitter fa-2x " color="white" />
                </a>
                <a href="https://www.whatsapp.com"target="_blank">
                    <MDBIcon icon="whatsapp fa-2x " color="white" />
                </a>
                <a href="https://www.youtube.com"target="_blank">
                    <MDBIcon icon="youtube fa-2x " color="white" />
                </a>
            </div>
        </MDBFooter>

    )
}

export default Footer;
