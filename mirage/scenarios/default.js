export default function(server) {
  let location = server.create('location');
  server.create('thing', {location: location});
}
