import home1 from '../assets/home1.png'

import '../css/Home.css'

function Home(){
    return(
        <>
      
            <div className="home-container">
                <img className="home-image1" src={home1} alt ="destined"/>

                <div className="home-workflow">
                    <h1 className="title-1">Wedding Workflow</h1>
                    <div className="info">
                        <h2 className="number"><span className="num">1.</span> Organize your things to do</h2>
                        <p className="workflow-info-each">Create your To-Do-List, organize your wedding workflow.</p>
                    </div>
                    <div className="info">
                        <h2 className="number"><span className="num">2.</span> Create a Wish List</h2>
                        <p className="workflow-info-each">Make a list of styles, designers, and specific dress features you 
                            like, such as fabric, silhouette, and neckline.</p>
                    </div>
                    <div className="info">
                        <h2 className="number"><span className="num">3.</span> Set a Budget</h2>
                        <p className="workflow-info-each">Determine how much you are willing to spend on your wedding dress, 
                            including alterations and accessories.</p>
                    </div>
                    <div className="info">
                        <h2 className="number"><span className="num">4.</span> Browse Products</h2>
                        <p className="workflow-info-each">Users explore the product categories and listings on the website, 
                            browsing different type of wedding dresses depends of preferability. </p>
                    </div>
                    <div className="info">
                        <h2 className="number"><span className="num">5.</span> Order the Dress</h2>
                        <p className="workflow-info-each">Visit our shop, to order your dream wedding dress. </p>
                    </div>
                </div>

            
            </div>

        </>

    );
}
export default Home