import introScreen from './screens/intro/intro';
import greetingScreen from './screens/greeting/greeting';
import rulesScreen from './screens/rules/rules';
import gameScreen from './screens/game/game';
import statsScreen from './screens/stats/stats';


export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showRules() {
    rulesScreen.init();
  }

  static showGame() {
    gameScreen.init();
  }

  static showStats(state) {
    statsScreen.init(state);
  }

}
