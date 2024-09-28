import React from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';

export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://random-useless-facts-b0ad3-default-rtdb.firebaseio.com/responseNo.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return (
    <div>
      {Object.values(facts).map((fact, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <FactCard key={i} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
