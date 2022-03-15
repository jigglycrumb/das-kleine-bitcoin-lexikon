import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Verständlich',
    description: (
      <>
        Kein Studienabschluss notwendig
      </>
    ),
  },
  {
    title: 'Präzise',
    description: (
      <>
        Die wichtigsten Fakten ohne Blabla
      </>
    ),
  },
  {
    title: 'Vernetzt',
    description: (
      <>
        Weiterführende Infos für Interessierte
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx('start--features', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
