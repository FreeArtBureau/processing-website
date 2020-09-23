import React, { useState } from 'react';
import classnames from 'classnames';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import { useLocalization } from 'gatsby-theme-i18n';

import css from './SideExSubcategoryList.module.css';
import grid from '../styles/grid.module.css';

const SideExSubcategoryList = (props) => {
  const { subcategory, subcategoryRefs } = props;
  const { locale } = useLocalization();
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className={css.root}>
      {subcategory ? (
        <span onClick={toggleExpand} className={css.expand}>
          {expand ? '-' : '+'}
        </span>
      ) : (
        ''
      )}
      <h3>{subcategory}</h3>
      {expand || subcategory === '' ? (
        <ul>
          {subcategoryRefs.map((node, key) => {
            return (
              <li key={key}>
                <Link to={node.childMdx.frontmatter.slug} language={locale}>
                  <h4>{node.childMdx.frontmatter.title}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default SideExSubcategoryList;