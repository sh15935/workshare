import React from 'react'
import "./Main.scss"

const Main = () => {
  return (
    <section className='homePage'>

      <div className="homeDiv">

        <div className="right">
          <h1 className="homeTitle">Bringing Projects to Life, Together!</h1>
          <p className='description'>Redefining Collaborative Workflows by Offering an Intuitive Media Management Platform That Simplifies the Process of Organizing, Sharing, and Working Together.</p>
        </div>

        <div className="left">
          <img src='http://127.0.0.1:5500/images/workshare1.png' className='homeImg'/>
        </div>
      </div>

      <button className="signUp">
        <a href="http://" target="_blank">Join us now!</a>
      </button>


      <div className="features">

        <div className="homeDiv">
          <div className="right">
            <video src='http://127.0.0.1:5500/animations/animation1.mp4' className='homeImg' />
          </div>
          
          <div className="left">
            <h1 className='homeTitle'>Project Management</h1>
            <p>Manage projects and track their progress in one place. Organize media files, assign tasks, and collaborate efficiently with your team.</p>
          </div>
        </div>

        <div className="homeDiv">
          <div className="right">
            <h1 className='homeTitle'>Media Library</h1>
            <p>Upload, store, and organize all your media assets in a central library. Tag and search files easily, ensuring your team can find what they need quickly.</p>
          </div>

          <div className="left">
            <img src=''  className='homeImg'/>
          </div>
        </div>

        <div className="homeDiv">
          <div className="right">
            <img src='' className='homeImg' />
          </div>

          <div className="left">
            <h1 className='homeTitle'>Collaboration Tools</h1>
            <p>Work seamlessly with your team through comments, shared media, and instant notifications. Keep everyone on the same page, no matter where they are.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
