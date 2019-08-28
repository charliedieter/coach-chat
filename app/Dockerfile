FROM node:12.0.0

COPY package.json package-lock.json app.json ./
RUN npm install

# MIGHT NEED TO SET PORTS FOR HOST/EMULATORS/SIMULATORS/MULATORS https://medium.com/@hmajid2301/running-expo-react-native-in-docker-ff9c4f2a4388
# ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.1"

EXPOSE 19000
EXPOSE 19001

CMD npm run ios