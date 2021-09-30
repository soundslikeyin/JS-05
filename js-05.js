

{ // Exercise 1 
    var names = ["Maria", "Antony", "Joy", "Juan"]

    {// Part 1        
        function insertName(newName) {
            names.push(newName);
            console.log(names);
        }

        insertName("Yin")
    }

    { // Part 2
        function checkName(queryName) {
            return names.includes(queryName);
        }

        // checkName("Joy")
    }

    { // Part 3
        function checkSameNames(otherNames, names) {
            const sameNames = [];

            for (i = 0; i < names.length; i++) {
                if ( otherNames.includes(names[i])) {
                    sameNames.push(names[i]);
                }
            }
            console.log(sameNames);
        }

        // const otherNames = ["James", "Juan", "Antony", "Peter", "Maria"]
        checkSameNames(otherNames, names)
    }

    { //Part 4
        function checkNameLength(names) {
            const nameLength = [];

            for (i = 0; i < names.length; i++) {
                nameLength.push(names[i].length);
            }

            console.log(nameLength);
        }

        checkNameLength(names)
    }


}

{ // Exercise 2

false || (true && false); // false
true || (11 + 12); // 23
(31 + 22) || true; // 53
true && (1 + 7); // 8
false && (3 + 4); // false
(1 + 2) && true; // 3
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // flase
false === (847 === '847'); // true
false === (887 == '887'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

}

{ //Exercise 3

    function numberRange(x) {
        (x >= 0) && (x <= 25) && console.log(`${x} is between 0 and 25`);
        (x >= 26) && (x <= 100) && console.log(`${x} is between 26 and 100`);
        (x > 100) && console.log(`${x} is greater than 100`);
        (x < 0) && console.log(`${x} is less than 100`);
    }

    numberRange(25);   // '25 is between 0 and 25'
    numberRange(75);   // '75 is between 26 and 100'
    numberRange(125);  // '125 is greater than 100'
    numberRange(-25);  // '-25 is less than 0'

}

{ //Additional Exercise

    var a;
    var b = null;
    var c = undefined;
    var d = 4;
    var e = 'five';
    var f = a || b || c || d || e;
    
    console.log(f); // 4

}
