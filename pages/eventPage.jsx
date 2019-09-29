import React from 'react';
import { useRouter } from 'next/router';

import EventDetails from './components/EventSearch/EventDetails';


function EventPage() {
  const router = useRouter();

  return (
    <>
      {router.query.id
        && (
          <EventDetails
            eventId={router.query.id}
          />
        )
      }
    </>
    
  )
}

export default EventPage;