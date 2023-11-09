import React from 'react';
 

const ContactForm = () => {
    return (
        <>
             <form id="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-user"></i>
                        <input className="w-100" type="text" placeholder="Họ và tên" name="name" required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-envelope"></i>
                        <input className="w-100" type="email" placeholder="Email" name="email" required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-pen pen"></i>
                        <textarea className="w-100" placeholder="Lời góp ý" name="message" required ></textarea>
                    </div>
                </div>
                <div className="col-xxl-12 col-lg-12 col-md-12">
                    <div className="contact__btn">
                        <button className="tp-btn w-100" type="submit">Gửi đến chúng tôi <i
                            className="fal fa-long-arrow-right"></i></button>
                    </div>
                </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;