import React from 'react'
import Nav from '../../../components/nav'
const Interests = () => {
  return (

        <div class="menu_s">

<div className="wrapper">
  {/*Top menu */}

 <Nav/>
  {/*  profile Setting   */}

<div class="tab-content" id=""  >
<div class="title">  <i class='fa fa-cogs icon' id="s" ></i> interests Settings </div>
<div class="Quetion"> What are you interested in ? </div>
<section className="radio-section">

  <div className="radio-list">
    <div className="radio-item">
      <input type="radio" name="radio" id="radio1"  />
      <label htmlFor="radio1">Accounting </label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio2" />
      <label htmlFor="radio2"> design</label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio3" />
      <label htmlFor="radio3"> consulting</label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio4" />
      <label htmlFor="radio4"> sports</label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio5" />
      <label htmlFor="radio5"> Web </label>
    </div>
  </div>
  <div className="radio-list">
    <div className="radio-item">
      <input type="radio" name="radio" id="radio6" />
      <label htmlFor="radio6"> financial</label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio7" />
      <label htmlFor="radio7">Music </label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio8" />
      <label htmlFor="radio8"> Gaming</label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio9" />
      <label htmlFor="radio9">Tech </label>
    </div>
    <div className="radio-item">
      <input type="radio" name="radio" id="radio10" />
      <label htmlFor="radio10">Other</label>
    </div>
  </div>
</section>

<div className="radio-button">
    <input  type="button" value="Submit"  /> 


  </div>
</div>
    </div>
    </div>
  )
}

export default Interests