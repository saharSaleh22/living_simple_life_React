import React from 'react';
import "./styles.css"
import ArticleFeature from"../ArticleFeature";
import ArticleRecent from"../ArticleRecent";
 const MainLeft=()=>{
    return (
        <main role="main">
            <ArticleFeature/>
            {
                  [1,2,3].map(item =><ArticleRecent/>) 
            }
       
           
       

      </main>
    );
}
export default MainLeft;


