import instantGame from './instant-game';
export default () => {
  const theGame = instantGame();
  return theGame.showNext();
}
