class BabelPhaser {
	constructor(){

	// this.name =""
	}
          test() {
          	console.log("init BabelPhaser");
            return "test";
          }
        }

        let bb = new BabelPhaser()
        bb.test()


        class PhaBel extends BabelPhaser {
        	constructor (name){
        		super()
        		this.name = name
        	}
        	sayHello(){
        		console.log(`sayHello ${this.name}` )
        	}
        }

var pb = new PhaBel("PhaBel")
pb.sayHello()