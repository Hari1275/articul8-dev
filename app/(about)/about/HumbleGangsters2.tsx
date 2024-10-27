'use client';
import React from 'react';
import Image from 'next/image';
import styles from './HumbleGangsters.module.css';

const gangsters = [
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Zachary Jordan',
    role: 'Project Manager',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Emily Chen',
    role: 'UX Designer',
    description:
      'Creating intuitive and beautiful user experiences is my forte.',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    description: 'Turning complex problems into elegant code solutions.',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Sarah Kim',
    role: 'Marketing Specialist',
    description: 'Crafting compelling stories that resonate with our audience.',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'David Nguyen',
    role: 'Data Scientist',
    description: 'Uncovering insights from data to drive business decisions.',
  },
  // Add more gangsters as needed
];

export default function HumbleGangsters2() {
  return (
    <section className={styles.humbleGangsters}>
      <div className={`${styles.container} container mx-auto px-4 sm:px-6`}>
        <div className={styles.sliderContainer}>
          <div className={`${styles.slider} ${styles.sliderReverse}`}>
            {[...gangsters, ...gangsters].map((gangster, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={gangster.image}
                      alt={gangster.name}
                      layout='fill'
                      objectFit='cover'
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.overlay}>
                    <p className={styles.description}>{gangster.description}</p>
                    <div className={styles.personInfo}>
                      <h3 className={styles.name}>{gangster.name}</h3>
                      <p className={styles.role}>{gangster.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
