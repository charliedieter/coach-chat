import { StreamChat } from "stream-chat";

const chatClient = new StreamChat("f8wwud5et5jd");

// await client.updateAppSettings({
//   disable_auth_checks: true,
//   disable_permissions_checks: true
// });

chatClient.setUser(
  {
    id: "fancy-heart-6",
    name: "Fancy heart",
    image: "https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg"
  },
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktaGVhcnQtNiJ9.cJvh9gYwjBngLZqAeMKzyaMpSm0v6Brlmco9buuy9hw"
);

export default chatClient;
