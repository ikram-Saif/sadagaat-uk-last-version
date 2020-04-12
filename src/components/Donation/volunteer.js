import React from 'react';
import Header from '../sub_page_header'

function Volunteer() {
    return (

<div>
    <Header name="Be a volunteer"/>
 <section>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="tab-content">
          <div className="tab-pane active p-15" id="register-tab">
            <form name="reg-form" className="register-form" method="post">
              <div className="icon-box mb-0 p-0">
                <h4 className="text-gray pt-10 mt-0 mb-30">Fill Your Volunteering Form</h4>
              </div>
              <hr />
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi id perspiciatis facilis nulla possimus quasi, amet qui. Ea rerum
                officia, aspernatur nulla neque nesciunt alias.</p>
              <div className="row">
                <div className="form-group col-md-12">
                  <label>Name</label>
                  <input name="form_email" className="form-control" type="text" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label htmlFor className="float-left">Gender</label>
                  <select className="form-control float-right">
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
                <div className="form-group col-md-8">
                  <label>Age Range</label>
                  <div className="form-check- form-inline">
                    <div className="form-check form-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        15-25
                      </label>
                    </div>
                    <div className="form-check form-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        25-35
                      </label>
                    </div>
                    <div className="form-check form-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                      <label className="form-check-label" htmlFor="exampleRadios3">
                        35-45
                      </label>
                    </div>
                    <div className="form-check form-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                      <label className="form-check-label" htmlFor="exampleRadios3">
                        45-
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="form_choose_password">Phone No.</label>
                  <input id="form_choose_password" name="form_choose_password" className="form-control" type="tel" />
                </div>
                <div className="form-group col-md-6">
                  <label>Additional Phone No.</label>
                  <input id="form_re_enter_password" name="form_re_enter_password" className="form-control" type="tel" />
                </div>
                <div className="form-group col-md-8">
                  <label htmlFor="form_choose_password">E-Mail</label>
                  <input id="form_choose_password" name="form_choose_password" className="form-control" type="tel" />
                </div>
                <div className="form-group col-md-4">
                  <label>Blood Group</label>
                  <select className="form-control float-right">
                    <option>AB+</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <button className="btn text-white btn-theme-green btn-lg btn-block mt-15" type="submit">Submit</button>
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
export default Volunteer;