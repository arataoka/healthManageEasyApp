import React from 'react';
import { Link } from 'react-router-dom';
import Style from './_SideListItem.module.scss';

type Props = {
  id: string;
  src: string;
  title: string;
};

const SideListItem: React.FC<Props> = ({ id, src, title }) => {
  return (
    <Link className={Style.item} to={{ pathname: 'watch', search: `v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default SideListItem;
