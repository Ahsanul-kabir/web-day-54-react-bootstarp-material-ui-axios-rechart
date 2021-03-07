import React from 'react';
import React, {Fragment } from 'react'
const Fragment = () => {
    {/* Fragment use korle div extra kore liha lage nah...tai dom e div er jaiga o nei nah */ }

    return (
        <>  {/* Symbol of Fragment */}
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <Bootstarp article={article}></Bootstarp>)
            }
        </>  {/* Symbol of Fragment */ }

    // one way
    <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
    </React.Fragment>

    // another way
    <Fragment>  // ei khane import kora lage Fragment ke
      <ChildA />
      <ChildB />
      <ChildC />
    </Fragment>

    );
};

export default Fragment;