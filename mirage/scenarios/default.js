export default function(server) {
  let location = server.create('location', {name: "OpenWorks"});
  server.create('thing', {name: "HVAC", location: location});
}
