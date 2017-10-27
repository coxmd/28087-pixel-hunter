import InstantGame from './instant-game';
export default () => {
  const theGame = new InstantGame();
  return theGame.next();
};
