import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xử lý đăng ký ở đây, ví dụ kiểm tra email và mật khẩu, sau đó tạo tài khoản

        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp');
        } else {
            alert('Đăng ký thành công');
            // Thực hiện lưu thông tin tài khoản vào cơ sở dữ liệu hoặc thực hiện các bước đăng ký khác ở đây
        }
    };

    return (
        <div className="container">
            <div className="hm-section">
                <div className="row">
                    <div className="col-lg-5 col-md-7 col-sm-9 mx-auto">
                        <div className="card hm-card-signin my-5">
                            <div className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <div className="hm-form-label-group">
                                        <Form.Label htmlFor="email">Email </Form.Label>
                                        <Form.Control
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="hm-form-label-group">
                                        <Form.Label htmlFor="password">Mật khẩu</Form.Label>
                                        <Form.Control
                                            id="password"
                                            type="password"
                                            placeholder="mật khẩu"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="hm-form-label-group">
                                        <Form.Label htmlFor="confirm password">Xác thực mật khẩu</Form.Label>
                                        <Form.Control
                                            id="confirm password"
                                            type="password"
                                            placeholder="Xác thực mật kh"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-md btn-primary text-uppercase mb-4">Đăng ký</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
