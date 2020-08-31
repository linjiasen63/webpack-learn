import * as  _ from "lodash";

function sayHello(name: string) {
  console.log(_.join(['Hello,', name], '__'));
}

sayHello("tom");