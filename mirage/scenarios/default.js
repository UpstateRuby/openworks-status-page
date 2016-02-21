export default function( server ) {

  let openworks = server.create('location', {name: 'Openworks'});

  let hvac = openworks.createThing({name: 'HVAC'});
  let internet = openworks.createThing({name: 'Internet'});
  let lighting = openworks.createThing({name: 'Lighting'});
  let security = openworks.createThing({name: 'Security'});

  hvac.createProperty({name: 'Temperature', value: 752, unit: 'Fahrenheit', precision: 1});
  hvac.createProperty({name: 'Humidity', value: 165, unit: 'Percentage', precision: 1});
  internet.createProperty({name: 'Ping', value: 132, unit: 'ms', precision: 1});
  internet.createProperty({name: 'Uplink', value: 248, unit: 'Mbps', precision: 1});
  internet.createProperty({name: 'Downlink', value: 225, unit: 'Mbps', precision: 1});
  lighting.createProperty({name: 'Overhead', value: 'working'});
  lighting.createProperty({name: 'Motion Sensor', value: 'working'});
  security.createProperty({name: 'Openworks', value: 'working'});
  security.createProperty({name: 'Elevator', value: 'working'});
  security.createProperty({name: 'Richardson St', value: 'working'});
  security.createProperty({name: 'Aloft', value: 'working'});
}
