import React from 'react';
import Header from '../sub_page_header'

function Log_reg() {
    return (

<div>
    <Header name="Log"/>
    <section>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#login-tab" data-toggle="tab">Login</a></li>
          <li><a href="#register-tab" data-toggle="tab">Register</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active p-15" id="login-tab">
            <h4 className="text-gray mt-0 pt-5"> Login</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <form name="login-form" className="clearfix">
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="form_username_email">Email</label>
                  <input id="form_username_email" name="form_username_email" className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="form_password">Password</label>
                  <input id="form_password" name="form_password" className="form-control" type="text" />
                </div>
              </div>
              <div className="checkbox pull-left mt-15">
                <label htmlFor="form_checkbox">
                  <input id="form_checkbox" name="form_checkbox" type="checkbox" />
                  Remember me </label>
              </div>
              <div className="clear pull-right text-center pt-10">
                <a className="text-theme-colored font-weight-600 font-12" href="#">Forgot Your Password?</a>
              </div>
              <div className="form-group mt-10">
                <button type="submit" className="btn btn-block text-white bg-theme-colored btn-lg">Login</button>
              </div>
              {/* <div class="clear text-center pt-10">
              <a class="btn btn-dark btn-lg btn-block no-border mt-15 mb-15" href="#" data-bg-color="#3b5998">Or Login with facebook</a>
            </div> */}
            </form>
          </div>
          <div className="tab-pane  p-15" id="register-tab">
            <form name="reg-form" className="register-form" method="post">
              <div className="icon-box mb-0 p-0">
                {/* <a href="#" class="icon icon-bordered icon-rounded icon-sm pull-left mb-0 mr-10">
                <i class="pe-7s-users"></i>
              </a> */}
                <h4 className="text-gray pt-10 mt-0 mb-30">Don't have an Account? Register Now.</h4>
              </div>
              <hr />
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi id perspiciatis facilis nulla possimus quasi, amet qui. Ea rerum officia, aspernatur nulla neque nesciunt alias.</p>
              <div className="row">
                {/* <div class="form-group col-md-6">
                <label>Name</label>
                <input name="form_name" class="form-control" type="text">
              </div> */}
                <div className="form-group col-md-12">
                  <label>Email Address</label>
                  <input name="form_email" className="form-control" type="email" />
                </div>
              </div>
              {/* <div class="row">
              <div class="form-group col-md-12">
                <label for="form_choose_username">Choose Username</label>
                <input id="form_choose_username" name="form_choose_username" class="form-control" type="text">
              </div>
            </div> */}
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="form_choose_password">Choose Password</label>
                  <input id="form_choose_password" name="form_choose_password" className="form-control" type="text" />
                </div>
                <div className="form-group col-md-6">
                  <label>Re-enter Password</label>
                  <input id="form_re_enter_password" name="form_re_enter_password" className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <button className="btn text-white bg-theme-colored btn-lg btn-block mt-15" type="submit">Register</button>
                {/* <a class="btn btn-dark btn-lg btn-block no-border mt-15 mb-15" href="#" data-bg-color="#3b5998">Or Register with facebook</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    )
}
export default Log_reg;