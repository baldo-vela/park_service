import {
    RaccoonMeadowsVolunteers,
    RaccoonMeadowsActivity,
    raccoonMeadowsVolunteers,
  } from './raccoon-meadows-log';
  
  import {
    WolfPointVolunteers,
    WolfPointActivity,
    wolfPointVolunteers,
  } from './wolf-point-log';
  
  type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;
  
  type Volunteers = {
    id: number;
    name: string;
    activities: CombinedActivity[];
  };
  
  function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
  ) {
    return volunteers.map(volunteer => {
      let id = volunteer.id;
       
      if (typeof id === 'string') {
        id = parseInt('id', 10); 
      }

      return {
        id: volunteer.id,
        name: volunteer.name,
        activities: volunteer.activities,
      }
    });
  }
  
  function isVerified(verified: string | boolean) {
    if (typeof verified === 'string') {
      if (verified === 'Yes') return true;
      if (verified === 'No') return false;
    }
    return verified;
  }

  function calculateHours(volunteers: Volunteers[]) {
    return volunteers.map((volunteer) => {
      let hours = 0;
  
      volunteer.activities.forEach((activity) => {

  
      });
  
      return {
        id: volunteer.id,
        name: volunteer.name,
        hours: hours,
      };
    });
  }
  
  const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
  );
  
  console.log('combinedVolunteers:', combinedVolunteers);