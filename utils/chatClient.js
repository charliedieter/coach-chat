
import { StreamChat } from 'stream-chat';

const chatClient = new StreamChat('f8wwud5et5jd');

const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktaGVhcnQtNiJ9.cJvh9gYwjBngLZqAeMKzyaMpSm0v6Brlmco9buuy9hw';

const user = {
  id: 'fancy-heart-6',
  name: 'Fancy heart',
  image:
    'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

export default chatClient;