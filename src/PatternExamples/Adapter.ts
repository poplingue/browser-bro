interface Firefox {
  moduleFirefox();
}

interface Edge {
  moduleEdge();
}

class Firefox60 implements Firefox {
  moduleFirefox() {
    console.log('moduleFirefox');
  }
}

class Edge1 implements Edge {
  moduleEdge() {
    console.log('moduleEdge');
  }
}

// ------------------------------ Adapter class ------------------------------

class FirefoxToEdgeAdapter implements Edge{
  browser: Firefox;

  constructor(ff: Firefox){
    this.browser = ff;
  }

  moduleEdge() {
    console.log('moduleEdge... converting to moduleFirefox');
    this.browser.moduleFirefox()
  }

}

// ------------------------------ Execution ------------------------------

let browser = new Firefox60();
let adapter = new FirefoxToEdgeAdapter(browser);
adapter.moduleEdge();
