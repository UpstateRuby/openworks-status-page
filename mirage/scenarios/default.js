export default function( server ) {

  let openworks = server.create('location', {name: 'OpenWorks'});

  let hvac = openworks.createThing({name: 'HVAC'});
  let internet = openworks.createThing({name: 'Internet'});
  let lighting = openworks.createThing({name: 'Lighting'});
  let security = openworks.createThing({name: 'Security'});

  hvac.createProperty({name: 'Temperature', value: 752, unit: 'degF', precision: 1});
  hvac.createProperty({name: 'Humidity', value: 165, unit: 'pct', precision: 1});
  internet.createProperty({name: 'Ping', value: 132, unit: 'ms', precision: 1});
  internet.createProperty({name: 'Uplink', value: 2487, unit: 'Mb/s', precision: 2});
  internet.createProperty({name: 'Downlink', value: 2258, unit: 'Mb/s', precision: 2});
  lighting.createProperty({name: 'Overhead', value: 'working'});
  lighting.createProperty({name: 'Motion Sensor', value: 'working'});
  security.createProperty({name: 'Openworks', value: 'working'});
  security.createProperty({name: 'Elevator', value: 'working'});
  security.createProperty({name: 'Richardson St', value: 'working'});
  security.createProperty({name: 'Aloft', value: 'working'});
}
