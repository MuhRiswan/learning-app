import React from 'react';
import Kategori from '../kategori.json';
import { MdCancel } from 'react-icons/md';

const CategoryBtn = ({ kategori, handleKategori, handleClear }) => {
  return (
    <div className="kategori-list d-flex my-4">
      {kategori !== '' ? (
        <button onClick={handleClear}>
          {kategori}
          <MdCancel />
        </button>
      ) : null}
      {Kategori.map((e, key) => (
        <button key={key} value={e} onClick={handleKategori}>
          {e}
        </button>
      ))}
    </div>
  );
};

export default CategoryBtn;
