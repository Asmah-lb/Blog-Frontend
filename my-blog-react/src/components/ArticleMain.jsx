import React from "react";
import ArticleImg from '../assets/imageblog.png';

const ArticleMain = function(){
return(

    <section className="article-section">
        <div className="article-hero">
            <div className="article-date">
                <p>February 2, 2024 in #sustainability</p>
                <p>5 min read</p>
            </div>
            <div className="article-detail">
                <div className="article-description">
                    <h2>Living Light: The Minimalist Lifestyle and its Environmental Impact</h2>
                    <p>Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life.</p>
                </div>
                <img className="article-image" src={ArticleImg}/>
            </div> 
        <div className="article-content">
            <p>In a world drowning in excess, the minimalist lifestyle emerges as a beacon of simplicity. Minimalists consciously pare down possessions, focusing on what truly adds value to life.</p>
             <div className="article-frame">
                <h3>Reducing Consumption</h3>
                <p>Minimalism's emphasis on essentialism naturally leads to reduced consumption. By resisting the urge to accumulate unnecessary items, minimalists contribute to a decrease in demand for goods, alleviating the environmental strain caused by overproduction.</p>
            </div>
            <div className="article-frame">
                <h3>Sustainable Practices</h3>
                <p>Minimalists often gravitate towards sustainable practices, favoring quality over quantity. From eco-friendly products to renewable energy sources, their choices promote a healthier planet and a more mindful existence.</p>
            </div>
            <div className="article-frame">
                <h3>Positive Environmental Footprint</h3>
                <p>By adopting a minimalist lifestyle, individuals not only declutter their physical spaces but also lighten their ecological impact. This intentional approach to living resonates far beyond personal spaces, inspiring a collective shift towards a more sustainable and environmentally conscious world.</p>
            </div>
        </div> 
        <div className="tags">
            
             <p>#sustainability</p>
             <p>#lifestyle</p>
             <p>#resource</p>
        </div> 
        </div>
    </section>

    );
}
export default ArticleMain