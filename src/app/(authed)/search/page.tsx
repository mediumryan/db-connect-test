import SearchForm from '@/component/search/searchForm';
import React from 'react';

export default function page() {
  return (
    <div>
      <h2>{`You can find user's email to input user name`}</h2>
      <SearchForm />
    </div>
  );
}
