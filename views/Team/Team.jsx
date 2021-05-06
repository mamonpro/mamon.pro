import { CallToAction, Testimonial } from '@components/sections';
import { Button } from '@components/ui';
import React from 'react';
import { Hero, Staff } from './sections';

const Team = () => {
  return (
    <>
      <Hero />
      <Staff />
      <Testimonial
        quote="Mamon is one of the best teams we have worked with. Their work has the power to change your business."
        name="Angela Wiesenmüller"
        position="Director EMEA at Meltwater"
      />
      <CallToAction
        color="blue"
        heading="Have a project for us?"
        description="We would love for you to tell us more about your product; what it’s about and what you believe needs improvement."
      >
        <a href="mailto:hello@mamon.pro">
          <Button type="primary" size="large" color="purple">Let's chat</Button>
        </a>
      </CallToAction>
    </>
  );
}

export default Team;
